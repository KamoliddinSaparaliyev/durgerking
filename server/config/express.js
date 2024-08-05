const express = require("express");
const fileUpload = require("express-fileupload");
var jwt = require("jsonwebtoken");
const cors = require("cors");
const morgan = require("morgan");

const def = () => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }));
  app.use(morgan("dev"))
  app.use(async (req, res, next) => {
    // await sleep(9000);
    next();
  });
  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );

  return app;
};

module.exports = def;
