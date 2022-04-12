import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetCityNameCmb({ setCmbCity, getCmbCity }) {
  const [cityData, setCityData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const responseCity = await axios.get(myLink.GetCityLink, {
      params: { myJwt: _myJwt },
    });

    setCityData(responseCity.data[0].CityTable);
  }, []);
  return (
    <select
      className="form-control"
      name="cmbCity"
      id="cmbCity"
      onChange={(e) => setCmbCity(e.target.value)}
      value={getCmbCity}
    >
      <option defaultValue="">Lütfen seçiniz...</option>
      {cityData.map((item) => (
        <option key={item.CityID} value={item.CityID}>
          {item.CityName}
        </option>
      ))}
    </select>
  );
}

export default GetCityNameCmb;
