import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetFlatCmb({ setCmbFlat, getCmbFlat }) {
  const [flatData, setFlatData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const responseFlat = await axios.get(myLink.GetFlatLink, {
      params: { myJwt: _myJwt },
    });

    setFlatData(responseFlat.data[0].FlatsTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbFlatNo"
      id="cmbFlatNo"
      onChange={(e) => setCmbFlat(e.target.value)}
      value={getCmbFlat}
    >
      <option defaultValue="">Lütfen seçiniz...</option>
      {flatData.map((item) => (
        <option key={item.FlatID} value={item.FlatID}>
          {item.FlatNo}
        </option>
      ))}
    </select>
  );
}

export default GetFlatCmb;
