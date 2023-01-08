import express, { Express, Request, Response } from "express";

const port: number = 8000;

const app: Express = express();

app.listen(port, (): void => {
  console.log(`Server is running on port ${port}.`);
});
