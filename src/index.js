import express from "express";
import productRouter from "./services/product/index.js";
import reviewRouter from "./services/review/index.js";
import cors from "cors";
import sequelize, { testDB } from "./db/index.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use("/products", productRouter);
server.use("/reviews", reviewRouter);

server.listen(process.env.PORT || 3000, async () => {
  console.log("server is running on port ", process.env.PORT || 3000);
  await testDB();
  await sequelize.sync();
});