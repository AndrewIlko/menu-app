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

const DBFunc = async () => {
  const user: mongoDB.MongoClient = new mongoDB.MongoClient(url);
  await user.connect();
  return user.db();
};

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
          .findOne({ _id: new mongoDB.ObjectId(option) });
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

interface Dish {
  id: mongoDB.ObjectId;
  name: string;
  price: number;
  description: string;
  likes: number;
}

export interface DishesCategory {
  categoryName: string;
  dishes: Dish[];
}

app.get("/categories/:menu", async (req: Request, res: Response) => {
  const { menu } = req.params;
  const menuCategories = await data.db
    ?.collection("menu")
    .findOne({ name: menu });

  const dishesCategoryData: DishesCategory[] = [];

  for (let category of menuCategories?.categories) {
    const dishesCategory: DishesCategory = { categoryName: "", dishes: [] };
    const info = await data.db
      ?.collection("categories")
      .findOne({ _id: new mongoDB.ObjectId(category) });

    dishesCategory.categoryName = info?.name;
    for (let dishString of info?.options) {
      const dish = await data.db
        ?.collection("dishes")
        .findOne({ _id: new mongoDB.ObjectId(dishString) });
      if (dish) {
        dishesCategory.dishes.push({
          id: dish._id,
          name: dish.name,
          price: dish.price,
          description: dish.description,
          likes: dish.likes,
        });
      }
    }
    dishesCategoryData.push(dishesCategory);
  }
  res.json(dishesCategoryData);
});

app.listen(port, async (): Promise<void> => {
  data.db = await DBFunc();
  console.log(`Server is running on port ${port}.`);
});
