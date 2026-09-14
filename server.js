import express from "express";
import { startups } from "./data/data.js";

const PORT = 8000;

const celebrity = {
  type: "action hero",
  name: "JSON Statham",
};

const app = express();

app.get("/", (request, response) => {
  response.json(celebrity);
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
