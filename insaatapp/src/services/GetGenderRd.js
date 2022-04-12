import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetGenderRd({ setGenderRd, rdGender }) {
  const [genderData, setGenderData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.GetGenderLink, {
      params: { myJwt: _myJwt },
    });

    setGenderData(response.data[0].GenderTable);
    var gender = document.getElementsByName("rdGender");
    for (var i = 0; gender.lenght; i++) {
      if (gender[i].checked) {
        rdGender = gender[i].value;
      }
    }
  }, []);
  return (
    <span>
      {genderData.map((item) => (
        <span key={item.GenderID}>
          &nbsp;&nbsp;
          <input
            type="radio"
            className="form-body"
            name="rdGender"
            id={`rdGender${item.GenderID}`}
            onChange={(e) => setGenderRd(e.target.value)}
            value={item.GenderID}
          />
          &nbsp; &nbsp;
          <label>{item.GenderName}&nbsp;&nbsp;</label>
        </span>
      ))}
    </span>
  );
}

export default GetGenderRd;
