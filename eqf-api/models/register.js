// const {Sequelize,DataTypes}= require("sequelize")
import { Sequelize,DataTypes } from "sequelize";
const sequelize = new Sequelize("EQF", "alp", "password", {
  host: "localhost",
  dialect: "mysql",
});

const Register = sequelize.define('Register', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

// module.exports = Register;
export default Register;
