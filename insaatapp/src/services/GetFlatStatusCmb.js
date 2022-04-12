import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetFlatStatusCmb({ setCmbFlatStatus, getCmbFlatStatus }) {
  const [flatStatusData, setFlatStatusData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const responseFlatStatus = await axios.get(myLink.GetFlatStatusLink, {
      params: { myJwt: _myJwt },
    });

    setFlatStatusData(responseFlatStatus.data[0].FlatStatusTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbFlatStatus"
      id="cmbFlatStatus"
      onChange={(e) => setCmbFlatStatus(e.target.value)}
      value={getCmbFlatStatus}
    >
      <option value>Lütfen seçiniz...</option>
      {flatStatusData.map((item) => (
        <option key={item.FlatStatusID} value={item.FlatStatusID}>
          {item.FlatStatusName}
        </option>
      ))}
    </select>
  );
}

export default GetFlatStatusCmb;
