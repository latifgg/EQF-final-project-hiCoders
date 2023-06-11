
import express from "express";

import bodyParser from "body-parser";

import cors from "cors";



import "./db/sequelize.js";

import messageRoutes from "./routes/messageRoute.js";
import registerRoutes from "./routes/registerRoute.js";
import formRoutes from "./routes/formRoute.js"
import myMiddleware from "./routes/auth.js"
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());



// API routes
app.use("/", messageRoutes);
app.use("/", registerRoutes);
app.use("/", formRoutes);

// // Middleware
 app.use("/", myMiddleware);

const port = 5000;
app.listen(port, () => {
  console.log(` App listening on port ${port}`);
});
