import express from "express";
import { startups } from "./data/data.js";

const PORT = 8000;

const app = express();

app.get("/api", (request, response) => {
  response.json(startups);
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
