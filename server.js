import express from "express";
import { people, startups } from "./data/data.js";

const PORT = 8000;

const app = express();

app.get("/api", (request, response) => {
  console.log(request.query);
  response.json(people);
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
