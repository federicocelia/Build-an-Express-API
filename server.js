import express from "express";
import { startups } from "./data/data.js";

const PORT = 8000;

const app = express();

app.get("/api", (request, response) => {
  let results = startups;

  if (request.query.industry) {
    results = results.filter(
      (startup) =>
        startup.industry.toLowerCase() === request.query.industry.toLowerCase(),
    );
  }
  if (request.query.country) {
    results = results.filter(
      (startup) =>
        startup.country.toLowerCase() === request.query.country.toLowerCase(),
    );
  }
  if (request.query.continent) {
    results = results.filter(
      (startup) =>
        startup.continent.toLowerCase() ===
        request.query.continent.toLowerCase(),
    );
  }
  if (request.query.is_seeking_funding === "true") {
    results = results.filter((startup) => startup.is_seeking_funding === true);
  }
  if (request.query.is_seeking_funding === "false") {
    results = results.filter((startup) => startup.is_seeking_funding === false);
  }
  if (request.query.has_mvp === "true") {
    results = results.filter((startup) => startup.has_mvp === true);
  }
  if (request.query.has_mvp === "false") {
    results = results.filter((startup) => startup.has_mvp === false);
  }
  response.json(results);
});

app.get("/api/:field/:term", (req, res) => {
  let filteredData = startups;

  const { field, term } = req.params;
  const allowedFields = ["country", "continent", "industry"];

  if (allowedFields.includes(field)) {
    filteredData = filteredData.filter(
      (startup) =>
        startup[field] && startup[field].toLowerCase() === term.toLowerCase(),
    );

    return res.json(filteredData);
  } else {
    return res.status(400).json({
      message:
        "Search field not allowed. Please use only 'country', 'continent', 'industry'",
    });
  }
});

app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));
