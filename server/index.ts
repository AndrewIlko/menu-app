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

app.listen(port, async (): Promise<void> => {
  data.db = await DBFunc();
  console.log(`Server is running on port ${port}.`);
});
