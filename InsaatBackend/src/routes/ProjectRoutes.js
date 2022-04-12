// 'use strict';
const express = require("express");
const router = express.Router();

var projectController = require("../controllers/ProjectController");

var cors = require("cors");
const app = express();

// Set up a whitelist and check against it:
var whitelist = ["http://localhost:3000", "http://example2.com"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Then pass them to cors:
app.use(cors(corsOptions));

app.use(require("body-parser").json());
// app.use(express.bodyParser({limit: '250mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,language"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

var bodyParser = {
  json: { limit: "500mb", extended: true },
  urlencoded: { limit: "500mb", extended: true },
};
//#region GET Service Routes
router.get("/getProjectListService", projectController.getProjectListService);
router.get("/getFlatListService", projectController.getFlatListService);
router.get("/getEmployeeListService", projectController.getEmployeeListService);
//#endregion

//#region POST Service Routes
router.post("/postProjectService", projectController.postProjectService);
router.post("/postFlatService", projectController.postFlatService);
router.post("/postEmployeeService", projectController.postEmployeeService);
//#endregion

//#region PUT Service Routes
router.put("/putProjectService", projectController.putProjectService);
router.put("/putFlatService", projectController.putFlatService);
router.put("/putEmployeeService", projectController.putEmployeeService);
//#endregion

//#region DELETE Service Routes
router.delete("/deleteProjectService", projectController.deleteProjectService);
router.delete("/deleteFlatService", projectController.deleteFlatService);
router.delete("/deleteEmployeeService", projectController.deleteEmployeeService);
//#endregion
module.exports = router;
