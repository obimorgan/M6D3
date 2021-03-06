import express from "express";
import { Product, User, Review, Category } from "../../db/models/index.js";
import { Op } from "sequelize";
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Category.findAll();
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

router.route("/bulk").post(async (req, res, next) => {
  try {
    const data = await Category.bulkCreate([
      { name: "Multimedia" },
      { name: "Hardware" },
      { name: "Electronics" },
      { name: "Leisure" },
    ]);

    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .put(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

export default router;