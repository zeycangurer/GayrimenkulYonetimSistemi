// Config
const mssqlConfig = require("../../mssqlConfig");

// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlConfig, function (err) {
  console.log("Connected to SQL server successfully!");
});

//#region GET Services
exports.getCustomerListService = function (callback) {
  var FUNCTIONNAME = "getCustomerListService";

  var sqlStatement = `
          SELECT C.CustomerID,
             C.CustomerName,
             C.CustomerSurname,
             C.GSM,
             CONVERT(varchar, C.BirthDate, 23) AS 'BirthDate',
             C.TC,
             C.EMail,
             C.Address,
             G.GenderID,
             G.GenderName,
             CT.CityID,
             CT.CityName,
             C.CustomerNo,
             IT.IncomeTypeID,
             IT.IncomeTypeName,
             CONVERT(varchar, C.CreationDate, 23) AS 'CreationDate', 
             CONVERT(varchar, C.UpdateDate, 23) AS 'UpdateDate' 
      FROM Customer AS C
      LEFT JOIN Gender AS G ON C.GenderID = G.GenderID
      LEFT JOIN City AS CT ON C.CityID = CT.CityID
      LEFT JOIN IncomeType AS IT ON C.IncomeTypeID = IT.IncomeTypeID
      ORDER BY C.CustomerName, C.CustomerSurname ASC
          `;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          CustomersTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "İşleminiz başarıyla gerçekleşmiştir.",
            message: "",
            CustomersTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getVisitListService = function (callback) {
  var FUNCTIONNAME = "getVisitListService";

  var sqlStatement = `
          SELECT V.VisitID,
             CONVERT(varchar, V.VisitDate, 23) AS 'VisitDate',
             C.CustomerID,
             C.CustomerName,
             C.CustomerSurname,
             P.ProjectID,
             P.ProjectName,
             V.Notes,
             CONVERT(varchar, V.CreationDate, 23) AS 'CreationDate', 
             CONVERT(varchar, V.UpdateDate, 23) AS 'UpdateDate'
      FROM Visit AS V
      LEFT JOIN Customer AS C ON V.CustomerID = C.CustomerID
      LEFT JOIN Project AS P ON V.ProjectID = P.ProjectID
      ORDER BY V.VisitDate DESC
          `;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          VisitsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            VisitsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getSaleListService = function (callback) {
  var FUNCTIONNAME = "getSaleListService";

  var sqlStatement = `
    SELECT S.SalesID,           
           CONVERT(varchar, S.SalesDate, 23) AS 'SalesDate',
           C.CustomerID,
           C.CustomerName,
           C.CustomerSurname,
           F.FlatID,
           F.FlatNo,
           S.Price,
           E.EmployeeID,
           E.EmployeeName,
           E.EmployeeSurname,
           S.Notes,
           CONVERT(varchar, S.CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, S.UpdateDate, 23) AS 'UpdateDate' 
    FROM Sales AS S
    LEFT JOIN Customer AS C ON S.CustomerID = C.CustomerID
    LEFT JOIN Flat AS F ON S.FlatID = F.FlatID
    LEFT JOIN Employee AS E ON S.EmployeeID = E.EmployeeID
    ORDER BY S.SalesDate DESC
          `;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          SalesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            SalesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};
//#endregion

//#region POST Services

exports.postCustomerService = function (callback) {
  var FUNCTIONNAME = "postCustomerService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
  DECLARE @CustomerID AS INT
  SET NOCOUNT ON  
  INSERT INTO Customer 
    (
      CustomerName,
      CustomerSurname,
      GSM,
      BirthDate,
      TC,
      EMail,
      Address,
      GenderID,
      CityID,
      CustomerNo,
      IncomeTypeID
    ) 
    VALUES 
    (
      '${serviceParameters.CustomerName}',
      '${serviceParameters.CustomerSurname}',
      '${serviceParameters.GSM}',
      '${serviceParameters.BirthDate}',
      '${serviceParameters.TC}',
      '${serviceParameters.EMail}',
      '${serviceParameters.Address}',
      '${serviceParameters.GenderID}',
      '${serviceParameters.CityID}',
      '${serviceParameters.CustomerNo}',
      '${serviceParameters.IncomeTypeID}'
      )

      SELECT @CustomerID= SCOPE_IDENTITY()
`;
    for(let i=0; i<serviceParameters.FlatTypeID.length; i++){
      sqlStatement += `INSERT INTO CustomerRequest (CustomerID, FlatTypeID) 
      VALUES (@CustomerID, ${serviceParameters.FlatTypeID[i]}) `
    }
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          CustomersTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            CustomersTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.postSaleService = function (callback) {
  var FUNCTIONNAME = "postSaleService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
    INSERT INTO Sales 
    (
      SalesDate,
      CustomerID,
      FlatID,
      Price,
      EmployeeID,
      Notes
    ) 
    VALUES 
    (
      '${serviceParameters.SalesDate}',
      '${serviceParameters.CustomerID}',
      '${serviceParameters.FlatID}',
      '${serviceParameters.Price}',
      '${serviceParameters.EmployeeID}',
      '${serviceParameters.Notes}'
    )`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          SalesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            SalesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.postVisitService = function (callback) {
  var FUNCTIONNAME = "postVisitService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
    INSERT INTO Visit 
    (
      VisitDate,
      CustomerID,
      ProjectID,
      Notes
    ) 
    VALUES 
    (
      '${serviceParameters.VisitDate}',
      '${serviceParameters.CustomerID}',
      '${serviceParameters.ProjectID}',
      '${serviceParameters.Notes}'
    )`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          VisitsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            VisitsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};
//#endregion

//#region PUT Services

exports.putCustomerService = function (callback) {
  var FUNCTIONNAME = "putCustomerService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
    UPDATE Customer SET
      CustomerName = '${serviceParameters.CustomerName}',
      CustomerSurname = '${serviceParameters.CustomerSurname}',
      GSM='${serviceParameters.GSM}',
      BirthDate='${serviceParameters.BirthDate}',
      TC='${serviceParameters.TC}',
      EMail='${serviceParameters.EMail}',
      Address='${serviceParameters.Address}',
      GenderID=${serviceParameters.GenderID},
      CityID=${serviceParameters.CityID},
      CustomerNo='${serviceParameters.CustomerNo}',
      IncomeTypeID=${serviceParameters.IncomeTypeID},
      UpdateDate = GETDATE()
    WHERE CustomerID = ${serviceParameters.CustomerID}`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: sqlStatement,
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          CustomersTable: err,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            CustomersTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};



exports.putVisitService = function (callback) {
  var FUNCTIONNAME = "putVisitService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
    UPDATE Visit SET
      VisitDate='${serviceParameters.VisitDate}',
      CustomerID='${serviceParameters.CustomerID}',
      ProjectID='${serviceParameters.ProjectID}',
      Notes='${serviceParameters.Notes}',
      UpdateDate = GETDATE()
    WHERE VisitID = '${serviceParameters.VisitID}'`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          VisitsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            VisitsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};
//#endregion

//#region DELETE Services
exports.deleteCustomerService = function (callback) {
  var FUNCTIONNAME = "deleteCustomerService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
    DELETE FROM Customer
    WHERE CustomerID = ${serviceParameters.CustomerID}`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          CustomersTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            CustomersTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.deleteSaleService = function (callback) {
  var FUNCTIONNAME = "deleteSaleService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
    DELETE FROM Sales
    WHERE SalesID = ${serviceParameters.SalesID}`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          SalesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            SalesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.deleteVisitService = function (callback) {
  var FUNCTIONNAME = "deleteVisitService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
    DELETE FROM Visit
    WHERE VisitID = '${serviceParameters.VisitID}'`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          VisitsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            VisitsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};
//#endregion
