// const  Sequelize  = require("sequelize");
import  Sequelize  from "sequelize";
// const Register = require("../models/register");
// const Message = require("../models/message");
import Register from "../models/register.js";
import Message from "../models/message.js";
import Form from "../models/form.js";
// Sequelize ile MySQL bağlantısı
const sequelize = new Sequelize("EQF", "alp", "password", {
    host: "localhost",
    dialect: "mysql",
  });
  
  const connectToDataBase = async () => {
    try {
      await sequelize.authenticate();
      await Message.sync();
      await Form.sync();
      await Register.sync();    //buraya models daki herbir modeli import etmeliyim!!!
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  
  connectToDataBase();

  // module.exports=sequelize;
  export default sequelize;