import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetEmployeeCmb({ setCmbEmployee, getCmbEmployee }) {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const responseEmployee = await axios.get(myLink.GetEmployeeLink, {
      params: { myJwt: _myJwt },
    });

    setEmployeeData(responseEmployee.data[0].EmployeesTable);
  }, []);
  return (
    <select
      className="form-control"
      name="txtEmployeeName"
      id="txtEmployeeName"
      onChange={(e) => setCmbEmployee(e.target.value)}
      value={getCmbEmployee}
    >
      <option value>Lütfen seçiniz...</option>
      {employeeData.map((item) => (
        <option key={item.EmployeeID} value={item.EmployeeID}>
          {item.EmployeeName} {item.EmployeeSurname}
        </option>
      ))}
    </select>
  );
}

export default GetEmployeeCmb;
