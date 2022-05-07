import express, { Request, Response } from "express";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

app.post("/feedbacks", async (req: Request, res: Response) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("Server started at port 3333");
});
