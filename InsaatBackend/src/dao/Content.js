// Config
const mssqlconfig = require("../../mssqlconfig");

const jwt = require("jsonwebtoken");
let mySecretKey = "zgrr03";


// Include MSSQL Driver
var sql = require("mssql");

// Create Connection Pool
const pool = new sql.ConnectionPool(mssqlconfig, function (err) {
  console.log("Connected to SQL server successfully!");
});



//#region  GET Services
exports.getCityListService = function (callback) {
  var FUNCTIONNAME = "getCityListService";

  var sqlStatement = `
		SELECT  CityID, 
				CityName,
				CONVERT(varchar, CreationDate, 23) AS 'CreationDate',
				CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'
		FROM dbo.City
		ORDER BY CityName
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          CityTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            CityTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.getGenderListService = function (callback) {
  var FUNCTIONNAME = "getGenderListService";

  var sqlStatement = `
		SELECT  GenderID, 
				GenderName,
				CONVERT(varchar, CreationDate,23) AS 'CreationDate',
				CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'
		FROM dbo.Gender
		ORDER BY GenderName
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          GenderTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            GenderTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.getIncomeTypeListService = function (callback) {
  var FUNCTIONNAME = "getIncomeTypeListService";

  var sqlStatement = `
		SELECT  IncomeTypeID, 
				IncomeTypeName,
				CONVERT(varchar, CreationDate, 23) AS 'CreationDate',
				CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'
		FROM dbo.IncomeType
		ORDER BY IncomeTypeName
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          IncomeTypesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            IncomeTypesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.getFlatTypeListService = function (callback) {
  var FUNCTIONNAME = "getFlatTypeListService";

  var sqlStatement = `
		SELECT  FlatTypeID, 
				FlatTypeName,
				CONVERT(varchar, CreationDate, 23) AS 'CreationDate',
				CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'
		FROM dbo.FlatType
		ORDER BY FlatTypeName
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          FlatTypeTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatTypeTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.getFlatStatusListService = function (callback) {
  var FUNCTIONNAME = "getFlatStatusListService";

  var sqlStatement = `
		SELECT  FlatStatusID, 
				FlatStatusName,
				CONVERT(varchar, CreationDate, 23) AS 'CreationDate',
				CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'
		FROM dbo.FlatStatus
		ORDER BY FlatStatusName
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          FlatStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatStatusTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.getProjectStatusListService = function (callback) {
  var FUNCTIONNAME = "getProjectStatusListService";

  var sqlStatement = `
		SELECT  ProjectStatusID, 
				ProjectStatusName,
				CONVERT(varchar, CreationDate, 23) AS 'CreationDate',
				CONVERT(varchar, UpdateDate, 23) AS 'UpdateDate'
		FROM dbo.ProjectStatus
		ORDER BY ProjectStatusName
		`;

  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          ProjectStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            ProjectStatusTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
//#endregion

//#region POST Services
exports.postCityService = function (callback) {
  var FUNCTIONNAME = "postCityService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		INSERT INTO City 
		(
			CityName
		) 
		VALUES 
		(
			'${serviceParameters.CityName}'
		)`;

  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          CitiesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            CitiesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.postGenderService = function (callback) {
  var FUNCTIONNAME = "postGenderService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		INSERT INTO Gender 
		(
			GenderName
		) 
		VALUES 
		(
			'${serviceParameters.GenderName}'
		)`;

  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          GendersTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            GendersTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.postIncomeTypeService = function (callback) {
  var FUNCTIONNAME = "postIncomeTypeService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		INSERT INTO IncomeType 
		(
			IncomeTypeName
		) 
		VALUES 
		(
			'${serviceParameters.IncomeTypeName}'
		)`;

  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          IncomeTypesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            IncomeTypesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.postFlatTypeService = function (callback) {
  var FUNCTIONNAME = "postFlatTypeService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		INSERT INTO FlatType 
		(
			FlatTypeName
		) 
		VALUES 
		(
			'${serviceParameters.FlatTypeName}'
		)`;

  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          FlatTypesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatTypesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.postFlatStatusService = function (callback) {
  var FUNCTIONNAME = "postFlatStatusService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		INSERT INTO FlatStatus 
		(
			FlatStatusName
		) 
		VALUES 
		(
			'${serviceParameters.FlatStatusName}'
		)`;

  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          FlatStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatStatusTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.postProjectStatusService = function (callback) {
  var FUNCTIONNAME = "postProjectStatusService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		INSERT INTO ProjectStatus 
		(
			ProjectStatusName
		) 
		VALUES 
		(
			'${serviceParameters.ProjectStatusName}'
		)`;

  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          ProjectsStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            ProjectsStatusTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.postLogin = function (callback) {
  var FUNCTIONNAME = "postLogin";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		SELECT Email FROM Users WHERE Email = '${serviceParameters.Email}' 
    AND Password = '${serviceParameters.Password}'`;

  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = [
          {
            result: "Fail/Invalid SQL",
            message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
            data: null,
          },
        ];
      } else {
        if (result.recordsets[0].length > 0) {
          const myData = {
            emailAddress: serviceParameters.Email,
          };

          let jwToken = jwt.sign(myData, mySecretKey, { expiresIn: "1800s" });

          var returnVal = {
            result: "Success",
            message: "",
            jwt: jwToken,
          };
        } else
          var returnVal = {
            result: "Fail/Invalid User",
            message: "",
            jwt: null,
          };
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
//#endregion

//#region PUT Services
exports.putCityService = function (callback) {
  var FUNCTIONNAME = "putCityService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		UPDATE City SET
			CityName='${serviceParameters.CityName}',
      UpdateDate = GETDATE()
		WHERE CityID='${serviceParameters.CityID}'
		`;
  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          CitiesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            CitiesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.putGenderService = function (callback) {
  var FUNCTIONNAME = "putGenderService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
	UPDATE Gender SET
		GenderName='${serviceParameters.GenderName}',
    UpdateDate = GETDATE()

	WHERE GenderID='${serviceParameters.GenderID}'
	`;
  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          GendersTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            GendersTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.putIncomeTypeService = function (callback) {
  var FUNCTIONNAME = "putIncomeTypeService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
	UPDATE IncomeType SET
		IncomeTypeName='${serviceParameters.IncomeTypeName}',
    UpdateDate = GETDATE()

	WHERE IncomeTypeID='${serviceParameters.IncomeTypeID}'
	`;
  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          IncomeTypesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            IncomeTypesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.putFlatTypeService = function (callback) {
  var FUNCTIONNAME = "putFlatTypeService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
	UPDATE FlatType SET
		FlatTypeName='${serviceParameters.FlatTypeName}',
    UpdateDate = GETDATE()

	WHERE FlatTypeID='${serviceParameters.FlatTypeID}'
	`;
  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          FlatTypesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatTypesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.putFlatStatusService = function (callback) {
  var FUNCTIONNAME = "putFlatStatusService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
	UPDATE FlatStatus SET
		FlatStatusName='${serviceParameters.FlatStatusName}',
    UpdateDate = GETDATE()

	WHERE FlatStatusID='${serviceParameters.FlatStatusID}'
	`;
  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          FlatStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatStatusTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.putProjectStatusService = function (callback) {
  var FUNCTIONNAME = "putProjectStatusService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
	UPDATE ProjectStatus SET
		ProjectStatusName='${serviceParameters.ProjectStatusName}',
    UpdateDate = GETDATE()

	WHERE ProjectStatusID='${serviceParameters.ProjectStatusID}'
	`;
  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          ProjectsStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            ProjectsStatusTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
//#endregion

//#region DELETE Services
exports.deleteCityService = function (callback) {
  var FUNCTIONNAME = "deleteCityService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
		DELETE FROM City 
		WHERE CityID='${serviceParameters.CityID}'
		`;
  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          CitiesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            CitiesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.deleteGenderService = function (callback) {
  var FUNCTIONNAME = "deleteGenderService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
	DELETE FROM Gender 
	WHERE GenderID='${serviceParameters.GenderID}'
	`;
  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          GendersTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            GendersTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.deleteIncomeTypeService = function (callback) {
  var FUNCTIONNAME = "deleteIncomeTypeService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
	DELETE FROM IncomeType 
	WHERE IncomeTypeID='${serviceParameters.IncomeTypeID}'
	`;
  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          IncomeTypesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            IncomeTypesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.deleteFlatTypeService = function (callback) {
  var FUNCTIONNAME = "deleteFlatTypeService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
	DELETE FROM FlatType
	WHERE FlatTypeID='${serviceParameters.FlatTypeID}'
	`;
  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          FlatTypesTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatTypesTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
exports.deleteFlatStatusService = function (callback) {
  var FUNCTIONNAME = "deleteFlatStatusService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
	DELETE FROM FlatStatus
	WHERE FlatStatusID='${serviceParameters.FlatStatusID}'
	`;
  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          FlatStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            FlatStatusTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};

exports.deleteProjectStatusService = function (callback) {
  var FUNCTIONNAME = "putProjectStatusService";
  var serviceParameters = arguments[1];
  var sqlStatement = `
	UPDATE ProjectStatus SET
		ProjectStatusName='${serviceParameters.ProjectStatusName}'
	WHERE ProjectStatusID='${serviceParameters.ProjectStatusID}'
	`;
  // Prepate and Execute the Statment
  console.log(sqlStatement);

  // Prepate and Execute the Statment
  const ps = new sql.PreparedStatement(pool);
  ps.prepare(sqlStatement, (err) => {
    // ... error checks
    ps.execute({}, (err, result) => {
      if (err) {
        console.log(err);
        var returnVal = {
          result: "Failed",
          message: "Hata oluştu, lütfen daha sonra tekrar deneyin." + err,
          ProjectsStatusTable: null,
        };
      } else {
        var returnVal = [
          {
            result: "Success",
            message: "",
            ProjectsStatusTable: result.recordsets[0],
          },
        ];
      }

      callback(null, returnVal);

      ps.unprepare((err) => {
        // ... error checks
      });
    });
  });
};
//#endregion
