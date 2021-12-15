import express from "express";
import usersRouter from "./services/users/index.js";
import articlesRouter from "./services/articles/index.js";
import cors from "cors";
import sequelize, { testDB } from "./db/index.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use("/product", productRouter);
server.use("/review", reviewRouter);

server.listen(process.env.PORT || 3000, async () => {
  console.log("server is running on port ", process.env.PORT || 3000);
  await testDB();
  await sequelize.sync();
});