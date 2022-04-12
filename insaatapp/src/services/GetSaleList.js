import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import link from './Links';

function GetSaleList() {
    const [saleData, setSaleData] = useState([]);

    useEffect(async () => {
        let _myJwt = localStorage.getItem("myJwt");
        const responseSale = await axios.get(link.GetSaleLink, {
            params: { myJwt: _myJwt },
        });
        setSaleData(responseSale.data[0].SalesTable);
    }, []);
    return (
        <tbody>
            {saleData.map(repo =>
            (
                <tr key={repo.SalesID}>
                    <td >
                        {repo.SalesDate}
                    </td>
                    <td>
                        {repo.CustomerName}  {repo.CustomerSurname}
                    </td>
                    <td>
                        {repo.FlatNo}
                    </td>
                    <td>
                        {repo.EmployeeName}  {repo.CustomerSurname}

                    </td>
                    <td>
                        {repo.Price}
                    </td>
                    <td>
                        {repo.Notes}
                    </td>
                    <td>
                        {repo.CreationDate}
                    </td>
                </tr>
            ))}
        </tbody>
    );
}
export default GetSaleList;