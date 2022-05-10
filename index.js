import express from "express";
import config from "./utils/config.js";
import cors from "cors";
import User from "./Users/model.js";

const app = new express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("hello");
});

app.listen(3500, () => {
  console.log(config.db);
  console.log(`Server listening on : http://localhost:3500}`);
});
