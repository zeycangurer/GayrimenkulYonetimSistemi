import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import myLink from "./Links";

function GetIncomeTypeList() {
  const [incomeTypeData, setIncomeTypeData] = useState([]);
  const [incomeTypeName, setIncomeTypeName] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [searchParam, setSearchParam] = useSearchParams();

  const btnDelete = async (incomeTypeID) => {
    let text = window.confirm("Silmek istediğinize emin misiniz?");

    if (text) {
      let request = {
        data: { IncomeTypeID: incomeTypeID },
      };
      const response = await axios.delete(myLink.DeleteIncomeTypeLink, request);

      if (response.status === 200 || 201) {
        setOpen(true);
        setOpen(false);
        window.alert("Silme işlemi başarılı!");
        console.info("Veriler silindi.");
        console.log(response);
      } else {
        window.alert("Bu veri silinemez!!");
        console.info("Başarısız!");
        console.log(response);
      }
    } else {
      window.alert("Silme işlemi iptal edildi!");
      console.info("İptal!");
    }
  };

  const btnSave = async () => {
    let request = {
      IncomeTypeName: incomeTypeName,
      IncomeTypeID: searchParam.get("id"),
    };

    const response = await axios.put(myLink.PutIncomeTypeLink, request);

    if (response.data.status === 200 || 201) {
      window.alert("Başarıyla güncellendi!");
      handleToClose();
    } else {
      window.alert("Başarısız!");
      handleToClose();
    }
  };
  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  const btnSave2 = async () => {
    let request = {
      IncomeTypeName: incomeTypeName,
    };

    const response = await axios.post(myLink.PostIncomeTypeLink, request);

    if (response.data.status === 200 || 201) {
      window.alert("Başarıyla eklendi!");
      handleToClose2();
    } else {
      window.alert("Başarısız!");
      handleToClose2();
    }
  };
  const handleClickToOpen2 = () => {
    setOpen2(true);
  };

  const handleToClose2 = () => {
    setOpen2(false);
  };

  useEffect(async () => {
    let _myJwt = localStorage.getItem("myJwt");
    const response = await axios.get(myLink.GetIncomeTypeLink, {
      params: { myJwt: _myJwt },
    });

    setIncomeTypeData(response.data[0].IncomeTypesTable);

    if (incomeTypeData.length != 0) {
      setIncomeTypeName(document.getElementById("txtIncomeTypeName").value);
    }
  }, [open, open2]);
  return (
    <tbody>
      {incomeTypeData.map((item) => (
        <tr key={item.IncomeTypeID}>
          <td className="highlight">
            <div className="success"></div>
            <Link to="#">{item.IncomeTypeName} </Link>
          </td>
          <td>
            <Link
              to={`?id=${item.IncomeTypeID}`}
              className="btn default btn-xs purple"
              onClick={handleClickToOpen}
            >
              <i className="fa fa-edit" /> GÜNCELLE
            </Link>
            <Link
              to="#"
              className="btn default btn-xs black"
              onClick={() => btnDelete(item.IncomeTypeID)}
            >
              <i className="fa fa-trash-o" /> SİL
            </Link>
          </td>
        </tr>
      ))}
      <tr>
        <td colSpan={2} align="center">
          <Link
            to="#"
            className="btn default btn-xs green"
            onClick={handleClickToOpen2}
          >
            <i className="fa fa-edit" /> Ekle
          </Link>
        </td>
      </tr>

      <Dialog fullWidth open={open} onClose={handleToClose}>
        <center>
          <DialogTitle>
            {
              <div
                className="caption"
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                }}
              >
                <i className="fa fa-cogs font-green-sharp" />
                &nbsp;
                <span className="caption-subject font-green-sharp bold uppercase">
                  GELİR TİPİNİ GÜNCELLE
                </span>
              </div>
            }
          </DialogTitle>
        </center>
        <DialogContent>
          <DialogContentText>
            <form role="form ">
              <div className="form body ">
                <div className="form-group">
                  <label>
                    <b>Gelir Tipi</b>
                  </label>
                  <input
                    defaultValue={incomeTypeData
                      .filter(
                        (item) => item.IncomeTypeID == searchParam.get("id")
                      )
                      .map((item2) => item2.IncomeTypeName)}
                    type="text"
                    className="form-control"
                    placeholder="Gelir Tipi Giriniz..."
                    name="txtIncomeTypeName"
                    id="txtIncomeTypeName"
                    onChange={(e) => setIncomeTypeName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-actions center">
                <DialogActions>
                  <button
                    type="button"
                    className="btn default"
                    name="btnCancel"
                    id="btnCancel"
                    onClick={handleToClose}
                  >
                    Vazgeç
                  </button>
                  <button
                    type="button"
                    className="btn green"
                    name="btnSubmit"
                    id="btnSubmit"
                    onClick={() => btnSave()}
                  >
                    Güncelle
                  </button>
                </DialogActions>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Dialog fullWidth open={open2} onClose={handleToClose2}>
        <center>
          <DialogTitle>
            {
              <div
                className="caption"
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
                }}
              >
                <i className="fa fa-cogs font-green-sharp" />
                &nbsp;
                <span className="caption-subject font-green-sharp bold uppercase">
                  YENİ GELİR TİPİ EKLE
                </span>
              </div>
            }
          </DialogTitle>
        </center>
        <DialogContent>
          <DialogContentText>
            <form role="form ">
              <div className="form body ">
                <div className="form-group">
                  <label>
                    <b>Gelir Tipi</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Gelir Tipi Giriniz..."
                    name="txtIncomeTypeName"
                    id="txtIncomeTypeName"
                    onChange={(e) => setIncomeTypeName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-actions center">
                <DialogActions>
                  <button
                    type="button"
                    className="btn default"
                    name="btnCancel"
                    id="btnCancel"
                    onClick={handleToClose2}
                  >
                    Vazgeç
                  </button>
                  <button
                    type="button"
                    className="btn green"
                    name="btnSubmit"
                    id="btnSubmit"
                    onClick={() => btnSave2()}
                  >
                    Ekle
                  </button>
                </DialogActions>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </tbody>
  );
}

export default GetIncomeTypeList;
