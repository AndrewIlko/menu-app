import express, { Express, Request, Response } from "express";
import cors from "cors";
import * as mongoDB from "mongodb";

const url = `mongodb+srv://admin:admin@cluster0.x9dzgnt.mongodb.net/cafe-menu?retryWrites=true&w=majority`;

interface DB {
  db: mongoDB.Db | null;
}

export interface Menu {
  name: string;
  options: string[];
}

const data: DB = { db: null };

const port: number = 8000;

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/menu", async (req: Request, res: Response) => {
  const info = await data.db?.collection("menu").find({}).toArray();
  const menuData: Menu[] = [];
  if (info) {
    for (let menu of info) {
      const options: string[] = [];
      for (let option of menu.categories) {
        const description = await data.db
          ?.collection("categories")
          .findOne({ _id: new mongoDB.ObjectId(`${option}`) });
        if (description) {
          options.push(description.name);
        }
      }
      menuData.push({ name: menu.name, options });
    }
  }
  if (menuData.length == 0) return res.json(null);
  res.json(menuData);
});

app.listen(port, async (): Promise<void> => {
  const user: mongoDB.MongoClient = new mongoDB.MongoClient(url);
  await user.connect();
  data.db = user.db();
  console.log(`Server is running on port ${port}.`);
});

// {
//   name: "";
//   option: [];
// }
