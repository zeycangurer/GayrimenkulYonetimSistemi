import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import link from './Links';

function GetProjectList() {
  const [projectData, setProjectData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);
  const [projectStatusData, setProjectStatusData] = useState([]);


  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const responseProject = await axios.get(link.GetProjectLink, {
      params: { myJwt: _myJwt },
    });
    setProjectData(responseProject.data[0].ProjectsTable);
  }, [])

  return (
    <tbody>
      {projectData.map(repo =>
      (
        <tr>
          <td key={repo.ProjectID}>
            <Link
              to={"/editproject?id=" + repo.ProjectID}
              id={repo.ProjectID}
            >
              {repo.ProjectName}
            </Link>
          </td>
          <td>
            {repo.CityName}
          </td>
          <td>
            {repo.ProjectStatusName}
          </td>
          <td>
            {repo.CreationDate}
          </td>
        </tr>
      ))}


    </tbody>

  );
}
export default GetProjectList;