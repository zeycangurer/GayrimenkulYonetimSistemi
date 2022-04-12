const mssqlconfig = require('../../mssqlconfig');

// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
  console.log("Connected to SQL server successfully!");
});

//#region GET Services
exports.getProjectListService = function (callback) {
  var FUNCTIONNAME = "getProjectListService";

  var sqlStatement = `
		SELECT P.ProjectID,
           P.ProjectName,
           C.CityID,
           C.CityName,
           PS.ProjectStatusID,
           PS.ProjectStatusName,
           CONVERT(varchar, P.CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, P.UpdateDate, 23) AS 'UpdateDate' 
    FROM Project AS P
    LEFT JOIN City AS C ON P.CityID = C.CityID
    LEFT JOIN ProjectStatus AS PS ON P.ProjectStatusID = PS.ProjectStatusID
    ORDER BY ProjectID ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          ProjectsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            ProjectsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getFlatListService = function (callback) {
  var FUNCTIONNAME = "getFlatListService";

  var sqlStatement = `
		SELECT F.FlatID,
           F.FlatNo,
           P.ProjectID,
           P.ProjectName,
           FT.FlatTypeID,
           FT.FlatTypeName,
           FS.FlatStatusID,
           FS.FlatStatusName,
           F.Price,
           CONVERT(varchar, F.CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, F.UpdateDate, 23) AS 'UpdateDate' 
    FROM Flat AS F
    LEFT JOIN Project AS P ON F.ProjectID = P.ProjectID
    LEFT JOIN FlatType AS FT ON F.FlatTypeID = FT.FlatTypeID
    LEFT JOIN FlatStatus AS FS ON F.FlatStatusID = FS.FlatStatusID
    ORDER BY F.FlatID ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          FlatsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.getEmployeeListService = function (callback) {
  var FUNCTIONNAME = "getEmployeeListService";

  var sqlStatement = `
		SELECT EmployeeID,
           EmployeeName,
           EmployeeSurname,
           Username,
           Password,
           CONVERT(varchar, CreationDate, 23) AS 'CreationDate', 
           CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'
    FROM Employee
    ORDER BY EmployeeName, EmployeeSurname ASC
		`;
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          EmployeesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            EmployeesTable: result.recordsets[0],
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
exports.postProjectService = function (callback) {
  var FUNCTIONNAME = "postProjectService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
  INSERT INTO Project 
  (
    ProjectName,
    CityID,
    ProjectStatusID
  ) 
  VALUES 
  (
    '${serviceParameters.ProjectName}',
    '${serviceParameters.CityID}',
    '${serviceParameters.ProjectStatusID}'
  )`;			 
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          ProjectsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            ProjectsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.postFlatService = function (callback) {
  var FUNCTIONNAME = "postFlatService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
  INSERT INTO Flat 
  (
    FlatNo,
    ProjectID,
    FlatTypeID,
    FlatStatusID,
    Price
  ) 
  VALUES 
  (
    '${serviceParameters.FlatNo}',
    '${serviceParameters.ProjectID}',
    '${serviceParameters.FlatTypeID}',
    '${serviceParameters.FlatStatusID}',
    '${serviceParameters.Price}'
  )`;			 
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          FlatsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.postEmployeeService = function (callback) {
  var FUNCTIONNAME = "postEmployeeService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
  INSERT INTO Employee 
  (
    EmployeeName,
    EmployeeSurname,
    Username,
    Password
  ) 
  VALUES 
  (
    '${serviceParameters.EmployeeName}',
    '${serviceParameters.EmployeeSurname}',
    '${serviceParameters.Username}',
    '${serviceParameters.Password}'
  )`;			 
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          EmployeesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            EmployeesTable: result.recordsets[0],
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
exports.putProjectService = function (callback) {
  var FUNCTIONNAME = "putProjectService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
  UPDATE Project SET
    ProjectName='${serviceParameters.ProjectName}',
    CityID='${serviceParameters.CityID}',
    ProjectStatusID='${serviceParameters.ProjectStatusID}',
    UpdateDate = GETDATE()

 WHERE ProjectID='${serviceParameters.ProjectID}'`;			 
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          ProjectsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success" + sqlStatement,
            message: "",
            ProjectsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.putFlatService = function (callback) {
  var FUNCTIONNAME = "putFlatService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
  UPDATE Flat SET
    FlatNo='${serviceParameters.FlatNo}',
    ProjectID='${serviceParameters.ProjectID}',
    FlatTypeID='${serviceParameters.FlatTypeID}',
    FlatStatusID='${serviceParameters.FlatStatusID}',
    Price='${serviceParameters.Price}',
    UpdateDate = GETDATE()

 WHERE FlatID='${serviceParameters.FlatID}'`;			 
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err + sqlStatement,
          FlatsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.putEmployeeService = function (callback) {
  var FUNCTIONNAME = "putEmployeeService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
  UPDATE Employee SET
    EmployeeName='${serviceParameters.EmployeeName}',
    EmployeeSurname='${serviceParameters.EmployeeSurname}',
    Username='${serviceParameters.Username}',
    Password='${serviceParameters.Password}',
    UpdateDate = GETDATE()

  WHERE EmployeeID='${serviceParameters.EmployeeID}'`;			 
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          EmployeesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            EmployeesTable: result.recordsets[0],
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
exports.deleteProjectService = function (callback) {
  var FUNCTIONNAME = "deleteProjectService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
  DELETE FROM Project
 WHERE ProjectID='${serviceParameters.ProjectStatusID}'`;			 
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin.",
          ProjectsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            ProjectsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.deleteFlatService = function (callback) {
  var FUNCTIONNAME = "deleteFlatService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
  DELETE FROM Flat
 WHERE FlatID='${serviceParameters.FlatID}'`;			 
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          FlatsTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatsTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};

exports.deleteEmployeeService = function (callback) {
  var FUNCTIONNAME = "deleteEmployeeService";
  var serviceParameters = arguments[1];

  var sqlStatement = `
  DELETE FROM Employee
  WHERE EmployeeID='${serviceParameters.EmployeeID}'`;			 
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          EmployeesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            EmployeesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {});
    });
  });
};
//#endregion
