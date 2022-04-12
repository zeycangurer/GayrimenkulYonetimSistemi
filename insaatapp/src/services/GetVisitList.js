import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import link from './Links';

function GetVisitList() {
    const [visitData, setVisitData] = useState([]);


    useEffect(async () => {
        let _myJwt = localStorage.getItem("myJwt");
        const responseVisit = await axios.get(link.GetVisitLink, {
            params: { myJwt: _myJwt },
        });
        setVisitData(responseVisit.data[0].VisitsTable);
    }, []);
    return (
        <tbody>
            {visitData.map(repo =>
            (
                <tr>
                    <td key={repo.VisitID}>
                        <Link to={"/editvisit?id=" + repo.VisitID} id={repo.VisitID}>
                            {repo.VisitDate}
                        </Link>
                    </td>
                    <td>
                        {repo.CustomerName} {repo.CustomerSurname}
                    </td>
                    <td>
                        {repo.ProjectName}
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
export default GetVisitList;