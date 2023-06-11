
// const {Sequelize,DataTypes}= require("sequelize")
import { Sequelize,DataTypes } from "sequelize";
const sequelize = new Sequelize("EQF", "alp", "password", {
  host: "localhost",
  dialect: "mysql",
});


// Message modeli
const Message = sequelize.define(
  "Message",
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
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
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
export default Message;
