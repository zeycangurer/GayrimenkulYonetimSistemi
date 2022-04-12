import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import link from './Links';

function GetCustomerList({ refresh }) {

  const [customerData, setCustomerData] = useState([]);

  useEffect
    (
      async () => {
        let _myJwt = localStorage.getItem("myJwt");
        const responseCustomer = await axios.get(link.GetCustomerLink, {
          params: { myJwt: _myJwt },
        });
        setCustomerData(responseCustomer.data[0].CustomersTable);
      }, [refresh])

  return (
    <tbody>
      {customerData.map(repo =>
      (

        <tr>
          <td key={repo.CustomerID}>
            <Link to={"/editcustomer?id=" + repo.CustomerID} id={repo.CustomerID}>
              {repo.CustomerName}
            </Link>
          </td>
          <td>
            {repo.CustomerSurname}
          </td>
          <td>
            {repo.GSM}
          </td>
          <td>
            {repo.TC}
          </td>
          <td>
            {repo.Email}
          </td>
          <td>
            {repo.CityName}
          </td>
          <td>
            {repo.Address}
          </td>
          <td>
            {repo.GenderName}
          </td>
          <td>
            {repo.IncomeTypeName}
          </td>
          <td>
            {repo.CustomerNo}
          </td>
          <td>
            {repo.CreationDate}
          </td>
        </tr>

      ))}
    </tbody>

  );
}
export default GetCustomerList;