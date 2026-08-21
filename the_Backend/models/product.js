
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PRODUCT = sequelize.define('Product', {
  


   id: {


    type: DataTypes.INTEGER,

    primaryKey: true,

    autoIncrement: true,
    
   },
  
  name: {


    type: DataTypes.STRING,

    allowNull: false,

  },

  description: {

    type: DataTypes.TEXT,

  },


  price: {

    type: DataTypes.FLOAT,

    allowNull: false,

  },
  
  stockQuantity: {

    type: DataTypes.INTEGER,

    defaultValue: 0,

  },

  imageUrl: {
    type: DataTypes.TEXT,
    allowNull: true, 
  }
});

export default PRODUCT;