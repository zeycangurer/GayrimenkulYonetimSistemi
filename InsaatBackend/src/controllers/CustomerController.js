var Customer = require("../dao/Customer");

const jwt = require("jsonwebtoken");
let mySecretKey = "zgrr03";

//#region GET Service Controllers
exports.getCustomerListService = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  Content.getCustomerListService(function (err, data) {
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
exports.getVisitListService = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  Content.getVisitListService(function (err, data) {
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
exports.getSaleListService = function (req, res) {
  const myJwt = req.header["myJwt"] || req.body.myJwt || req.query.myJwt;
  Content.getSaleListService(function (err, data) {
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
exports.postCustomerService = function (req, res) {
  Customer.postCustomerService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postVisitService = function (req, res) {
  Customer.postVisitService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
exports.postSaleService = function (req, res) {
  Customer.postSaleService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//#endregion

//#region PUT Service Controllers
exports.putCustomerService = function (req, res) {
  Customer.putCustomerService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};



exports.putVisitService = function (req, res) {
  Customer.putVisitService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//#endregion

//#region DELETE Service Controllers
exports.deleteCustomerService = function (req, res) {
  Customer.deleteCustomerService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteSaleService = function (req, res) {
  Customer.deleteSaleService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};

exports.deleteVisitService = function (req, res) {
  Customer.deleteVisitService(function (err, data) {
    if (err) console.log(err);
    else res.send(data);
  }, req.body);
};
//#endregion