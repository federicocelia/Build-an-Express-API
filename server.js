import express from "express";
import { apiRouter } from "./routes/apiRoutes.js";
import cors from "cors";

const PORT = 8000;

const app = express();

app.use(cors());

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));
