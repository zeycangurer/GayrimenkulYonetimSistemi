import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import myLink from "./Links";

function GetFlatTypeChk({btnCheck}) {
  const [flatTypeData, setFlatTypeData] = useState([]);
  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const responseFlatType = await axios.get(myLink.GetFlatTypeLink, {
      params: { myJwt: _myJwt },
    });

    setFlatTypeData(responseFlatType.data[0].FlatTypeTable);
  }, []);
  return (
    <span>
      {flatTypeData.map((item) => (
        <span key={item.FlatTypeID}>
          <input
            type="checkbox"
            className="form-body"
            name="chkFlatType"
            id={`chkFlatType${item.FlatTypeID}`}
            defaultValue={item.FlatTypeID}
            onClick={() => btnCheck(item.FlatTypeID)}
          />
          &nbsp;&nbsp;
          <label>{item.FlatTypeName}&nbsp;&nbsp;</label>
        </span>
      ))}
    </span>
  );
}

export default GetFlatTypeChk;
