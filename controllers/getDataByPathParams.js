import { startups } from "../data/data.js";

export const getDataByPathParams = (req, res) => {
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
};
