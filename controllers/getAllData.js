import { startups } from "../data/data.js";

export const getAllData = (request, response) => {
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
  return response.json(results);
};
