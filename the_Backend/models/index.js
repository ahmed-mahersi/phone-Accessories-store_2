import USER from "./user.js"; 
import PRODUCT from "./product.js";

USER.hasMany(PRODUCT, {

  foreignKey: "userId",

  onDelete: "CASCADE",

});


PRODUCT.belongsTo(USER, {

  foreignKey: "userId",
  
});


export { USER, PRODUCT };
