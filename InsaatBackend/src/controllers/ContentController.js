
var Content = require('../dao/Content');

const jwt = require("jsonwebtoken");
let mySecretKey = "zgrr03";

//#region GET Service Controllers
exports.getCityListService = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  Content.getCityListService(function (err, data) {
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

exports.getGenderListService = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  Content.getGenderListService(function (err, data) {
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

exports.getIncomeTypeListService = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  Content.getIncomeTypeListService(function (err, data) {
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

exports.getFlatTypeListService = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  Content.getFlatTypeListService(function (err, data) {
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
exports.getFlatStatusListService = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  Content.getFlatStatusListService(function (err, data) {
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

exports.getProjectStatusListService = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  Content.getProjectStatusListService(function (err, data) {
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
exports.postCityService = function (req, res) {
  Content.postCityService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postGenderService = function (req, res) {
  Content.postGenderService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postIncomeTypeService = function (req, res) {
  Content.postIncomeTypeService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postFlatTypeService = function (req, res) {
  Content.postFlatTypeService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postFlatStatusService = function (req, res) {
  Content.postFlatStatusService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.postProjectStatusService = function (req, res) {
  Content.postProjectStatusService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postLogin = function (req, res) {
  Content.postLogin(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//#endregion

//#region PUT Service Controllers
exports.putCityService = function (req, res) {
  Content.putCityService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.putGenderService = function (req, res) {
  Content.putGenderService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.putIncomeTypeService = function (req, res) {
  Content.putIncomeTypeService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.putFlatTypeService = function (req, res) {
  Content.putFlatTypeService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putFlatStatusService = function (req, res) {
  Content.putFlatStatusService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.putProjectStatusService = function (req, res) {
  Content.putProjectStatusService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//#endregion

//#region DELETE Service Controllers
exports.deleteCityService = function (req, res) {
  Content.deleteCityService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteGenderService = function (req, res) {
  Content.deleteGenderService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteIncomeTypeService = function (req, res) {
  Content.deleteIncomeTypeService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteFlatTypeService = function (req, res) {
  Content.deleteFlatTypeService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.deleteFlatStatusService = function (req, res) {
  Content.deleteFlatStatusService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.deleteProjectStatusService = function (req, res) {
  Content.deleteProjectStatusService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

//#endregion



