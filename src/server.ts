import express, { Request, Response } from "express";

const app = express();

app.get("/users", (req: Request, res: Response) => {
  res.send("users");
});

app.listen(3333, () => {
  console.log("Server started at port 3333");
});
