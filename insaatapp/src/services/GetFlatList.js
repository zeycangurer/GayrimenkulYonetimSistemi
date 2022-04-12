import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import link from './Links';

function GetFlatList({ refresh }) {
    const [flatData, setFlatData] = useState([]);
    useEffect(async () => {
        let _myJwt = localStorage.getItem("myJwt");
        const responseFlat = await axios.get(link.GetFlatLink, {
            params: { myJwt: _myJwt },
        });
        setFlatData(responseFlat.data[0].FlatsTable);
    }, [refresh])
    return (

        <tbody>
            {flatData.map(repo =>
                <tr>
                    <td key={repo.FlatID}>
                        <Link
                            to={"/editflat?id=" + repo.FlatID}
                            id={repo.FlatID}
                        >
                            {repo.FlatNo}
                        </Link>
                    </td>
                    <td>
                        {repo.ProjectName}
                    </td>
                    <td>
                        {repo.FlatTypeName}
                    </td>
                    <td>
                        {repo.FlatStatusName}
                    </td>
                    <td>
                        {repo.Price}
                    </td>
                    <td>
                        {repo.CreationDate}
                    </td>
                </tr>
            )}
        </tbody>
    );
}
export default GetFlatList;