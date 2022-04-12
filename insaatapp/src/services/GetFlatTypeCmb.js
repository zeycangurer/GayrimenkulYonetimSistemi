import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetFlatTypeCmb({ setCmbFlatType, getCmbFlatType }) {
  const [flatTypeData, setFlatTypeData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const responseFlatType = await axios.get(myLink.GetFlatTypeLink, {
      params: { myJwt: _myJwt },
    });

    setFlatTypeData(responseFlatType.data[0].FlatTypeTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbFlatType"
      id="cmbFlatType"
      onChange={(e) => setCmbFlatType(e.target.value)}
      value={getCmbFlatType}
    >
      <option value>Lütfen seçiniz...</option>
      {flatTypeData.map((item) => (
        <option key={item.FlatTypeID} value={item.FlatTypeID}>
          {item.FlatTypeName}
        </option>
      ))}
    </select>
  );
}

export default GetFlatTypeCmb;
