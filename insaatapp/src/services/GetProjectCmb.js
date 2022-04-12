import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetProjectCmb({ setCmbProject, getCmbProject }) {
  const [projectData, setProjectData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const responseProject = await axios.get(myLink.GetProjectLink, {
      params: { myJwt: _myJwt },
    });

    setProjectData(responseProject.data[0].ProjectsTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbProjectID"
      id="cmbProjectID"
      onChange={(e) => setCmbProject(e.target.value)}
      value={getCmbProject}
    >
      <option value>Lütfen seçiniz...</option>
      {projectData.map((item) => (
        <option key={item.ProjectID} value={item.ProjectID}>
          {item.ProjectName}
        </option>
      ))}
    </select>
  );
}

export default GetProjectCmb;
