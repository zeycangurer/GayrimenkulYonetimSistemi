import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetIncomeTypeCmb({ setCmbIncomeType, getCmbIncomeType }) {
  const [incomeTypeData, setIncomeTypeData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const responseIncomeType = await axios.get(myLink.GetIncomeTypeLink, {
      params: { myJwt: _myJwt },
    });

    setIncomeTypeData(responseIncomeType.data[0].IncomeTypesTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbIncomeType"
      id="cmbIncomeType"
      onChange={(e) => setCmbIncomeType(e.target.value)}
      value={getCmbIncomeType}
    >
      <option defaultValue>Lütfen seçiniz...</option>
      {incomeTypeData.map((item) => (
        <option key={item.IncomeTypeID} value={item.IncomeTypeID}>
          {item.IncomeTypeName}
        </option>
      ))}
    </select>
  );
}

export default GetIncomeTypeCmb;
