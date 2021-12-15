import express from "express";
// import { products } from "../../data/articles.js";
import { Product, Review } from "../../db/models/index.js";
import { Op, Sequelize } from "sequelize";
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const articles = await Article.findAll({
        include: Product,
        where: {
          ...(req.query.search && {
            [Op.or]: [
              {
                title: { [Op.iLike]: `%${req.query.search}%` },
              },
              {
                content: { [Op.iLike]: `%${req.query.search}%` },
              },
              //Option 1
              {
                "$user.name$": {
                  [Op.iLike]: "%" + req.query.search + "%",
                },
              },
              //Option 2
              // {
              //   name: Sequelize.where(Sequelize.col(`"poduct.name"`), {
              //     [Op.iLike]: "%" + req.query.search + "%",
              //   }),
              // },
            ],
          }),

          ...(req.query.category && {
            category: {
              [Op.in]: req.query.category.split(","),
            },
          }),
        },
      });
      res.send(product);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const product = await Product.create(req.body);
      res.send(product);
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