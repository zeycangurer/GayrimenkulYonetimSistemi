import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetCustomerCmb({ setCmbCustomer, getCmbCustomer }) {
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const responseEmployee = await axios.get(myLink.GetCustomerLink, {
      params: { myJwt: _myJwt },
    });

    setEmployeeData(responseEmployee.data[0].CustomersTable);
  }, []);
  return (
    <select
      className="form-control"
      name="txtEmployeeName"
      id="txtEmployeeName"
      onChange={(e) => setCmbCustomer(e.target.value)}
      value={getCmbCustomer}
    >
      <option value>Lütfen seçiniz...</option>
      {employeeData.map((item) => (
        <option key={item.CustomerID} value={item.CustomerID}>
          {item.CustomerName} {item.CustomerSurname}
        </option>
      ))}
    </select>
  );
}

export default GetCustomerCmb;
