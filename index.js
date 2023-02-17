const express = require("express");
const cors = require("cors");
const { appendFile } = require("fs");
const routes = require("./routes");
const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true }));

server.use("/", routes.mainRoutes);

server.listen(3000, function () {
  console.log("Servidor funcionando en el puerto 3000");
}); 
