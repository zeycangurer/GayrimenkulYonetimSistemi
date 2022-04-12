import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import link from './Links';

function GetEmployeeList({ refresh }) {

    const [employeeData, setEmployeeData] = useState([]);
    useLayoutEffect(async () => {
        let _myJwt = localStorage.getItem("myJwt");
        const responseEmployee = await axios.get(link.GetEmployeeLink, {
            params: { myJwt: _myJwt },
        });
        setEmployeeData(responseEmployee.data[0].EmployeesTable);
    }, [refresh])

    return (

        <tbody>
            {employeeData.map(repo =>
            (
                <tr>
                    <td key={repo.EmployeeID}>
                        <Link
                            to={"/editemployee?id=" + repo.EmployeeID}
                            id={repo.EmployeeID}
                        >
                            {repo.EmployeeName}
                        </Link>
                    </td>
                    <td>
                        {repo.EmployeeSurname}
                    </td>
                    <td>
                        {repo.Username}
                    </td>
                    <td>
                        {repo.CreationDate}
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default GetEmployeeList;