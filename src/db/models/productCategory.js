import sequelize from "../index.js";

import s from "sequelize";

const { DataTypes } = s;

const productCategory = sequelize.define(
  "productCategory",
  {
    // isPopular: {
    //   type: DataTypes.BOOLEAN,
    // },
  },
  {
    timestamps: false,
  }
);

export default productCategory;