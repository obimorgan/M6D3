/** @format */

import express from "express";
import { Product, productCategory } from "../../db/models/index.js";
// import { Op, Sequelize } from "sequelize";
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const product = await Product.findAll();
       // {
       //   include: [
       //     {
       //       model: Category,
       //       through: { attributes: [] }, // include category without join table
       //       attributes: { exclude: ["createdAt", "updatedAt"] }, //exclude attributes from included Category table
       //     },
       //     // { model: Review, include: User }, // includes related review with User who wrote the Review
       //     // User,
       //   ],
       // });
      res.send(product);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const { categoryId, ...rest } = req.body;
      const product = await Product.create(rest);
      if (product) {
        console.log(product.id);
        const dataToInsert = categoryId.map((id) => ({
          categoryId: id,
          productId: product.Id,
        }));
        // inserts modified array to Productategory
        const data = await Product.bulkCreate(dataToInsert);
        res.send({ product, productCategory: data });
      }
      res.send(rest);
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

router.route("/bulk").post(async (req, res, next) => {
  try {
    const data = await Product.bulkCreate(products);

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
