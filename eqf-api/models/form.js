
// const {Sequelize,DataTypes}= require("sequelize")
import { Sequelize,DataTypes } from "sequelize";
const sequelize = new Sequelize("EQF", "alp", "password", {
  host: "localhost",
  dialect: "mysql",
});


// Message modeli
const Form = sequelize.define(
  "Form",
  {
    city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // tableName: "messages",
    // timestamps: false,
  }
);

// Veritabanında tablo oluşturma
sequelize.sync();

// module.exports = Message;
export default Form;
