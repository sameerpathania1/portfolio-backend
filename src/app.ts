import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello, world v1.0.0" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});