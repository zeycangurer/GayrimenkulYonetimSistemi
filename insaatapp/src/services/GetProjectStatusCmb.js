import React, { useState, useEffect } from "react";
import axios from "axios";
import myLink from "./Links";

function GetProjectStatusCmb({ setCmbStatus, getCmbStatus }) {
  const [projectStatusData, setProjectStatusData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.GetProjectStatusLink, {
      params: { myJwt: _myJwt },
    });

    setProjectStatusData(response.data[0].ProjectStatusTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbStatus"
      id="cmbStatus"
      onChange={(e) => setCmbStatus(e.target.value)}
      value={getCmbStatus}
    >
      <option value>Lütfen seçiniz...</option>
      {projectStatusData.map((item) => (
        <option key={item.ProjectStatusID} value={item.ProjectStatusID}>
          {item.ProjectStatusName}
        </option>
      ))}
    </select>
  );
}

export default GetProjectStatusCmb;
