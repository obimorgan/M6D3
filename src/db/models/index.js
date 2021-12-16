import Product from "./product.js";
import Review from "./review.js";
import Category from "./category.js"
import User from "./user.js"
import productCategory from "./productCategory.js"

//hasMany
//belongsTo
Product.hasMany(Review, { onDelete: "CASCADE" });
Review.belongsTo(Product, { onDelete: "CASCADE" });

User.hasMany(Review, { onDelete: "CASCADE" });
Review.belongsTo(User, { onDelete: "CASCADE" });

User.hasMany(Product, { onDelete: "CASCADE"})
Product.belongsTo(User, { onDelete: "CASCADE"})

Product.belongsToMany(Category, { through: productCategory});
Category.belongsToMany(Product, { through: productCategory});




export { Product, Review, User, Category, productCategory };