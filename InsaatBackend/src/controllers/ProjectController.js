var Project = require("../dao/Project");
const jwt = require("jsonwebtoken");
let mySecretKey = "zgrr03";

//#region GET Service Controller
exports.getProjectListService = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  Content.getProjectListService(function (err, data) {
    jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
        var returnVal = {
          result: "Failed",
          message: "Authentication Failed",
        };
        res.send(returnVal);
      } else {
        res.send(data);
      }
    });
  }, req.body);
};
exports.getFlatListService = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  Content.getFlatListService(function (err, data) {
    jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
        var returnVal = {
          result: "Failed",
          message: "Authentication Failed",
        };
        res.send(returnVal);
      } else {
        res.send(data);
      }
    });
  }, req.body);
};
exports.getEmployeeListService = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  Content.getEmployeeListService(function (err, data) {
    jwt.verify(myJwt, mySecretKey, (error, decoded) => {
      if (error) {
        var returnVal = {
          result: "Failed",
          message: "Authentication Failed",
        };
        res.send(returnVal);
      } else {
        res.send(data);
      }
    });
  }, req.body);
};
//#endregion

//#region POST Service Controllers
exports.postProjectService = function (req, res) {
  Project.postProjectService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postFlatService = function (req, res) {
  Project.postFlatService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postEmployeeService = function (req, res) {
  Project.postEmployeeService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//#endregion

//#region PUT Service Controllers
exports.putProjectService = function (req, res) {
  Project.putProjectService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putFlatService = function (req, res) {
  Project.putFlatService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putEmployeeService = function (req, res) {
  Project.putEmployeeService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//#endregion

//#region DELETE Service Controllers
exports.deleteProjectService = function (req, res) {
  Project.deleteProjectService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.deleteFlatService = function (req, res) {
  Project.deleteFlatService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.deleteEmployeeService = function (req, res) {
  Project.deleteEmployeeService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//#endregion