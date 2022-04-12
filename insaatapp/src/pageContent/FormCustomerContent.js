import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import GetCityCmb from "../services/GetCityCmb";
import GetFlatTypeChk from "../services/GetFlatChk";
import GetGenderRd from "../services/GetGenderRd";
import GetIncomeTypeCmb from "../services/GetIncomeTypeCmb";
import link from '../services/Links';

function FormCustomerContent() {
    const [getTxtCustomerName, setTxtCustomerName] = useState();
    const [getTxtCustomerSurname, setTxtCustomerSurname] = useState();
    const [getTxtGSM, setTxtGSM] = useState();
    const [getTxtTC, setTxtTC] = useState();
    const [getTxtEmail, setTxtEmail] = useState();
    const [getCmbCity, setCmbCity] = useState();
    const [getTxtCustomerNo, setTxtCustomerNo] = useState();
    const [getTxtAddress, setTxtAddress] = useState();
    const [getCmbIncomeType, setCmbIncomeType] = useState();
    const [getGenderRd, setGenderRd] = useState();
    const [getFlatTypeChk, setFlatTypeChk] = useState([]);
    const [getBirthDate, setBirthDate] = useState("");

    const btnCheck = (btnCheckItem) => {
        if(getFlatTypeChk.includes(btnCheckItem)){
            let index = getFlatTypeChk.indexOf(btnCheckItem);
            getFlatTypeChk.splice(index, 1);
            console.log(getFlatTypeChk);

        } else {
            getFlatTypeChk.push(btnCheckItem);
            console.log(getFlatTypeChk);
        }
    }


    const btnSubmit = async () => {
        let requestBody = {
            CustomerName: getTxtCustomerName,
            CustomerSurname: getTxtCustomerSurname,
            GSM: getTxtGSM,
            TC: getTxtTC,
            EMail: getTxtEmail,
            CityID: getCmbCity,
            CustomerNo: getTxtCustomerNo,
            Address: getTxtAddress,
            IncomeTypeID: getCmbIncomeType,
            FlatTypeID: getFlatTypeChk,
            GenderID: getGenderRd,
            BirthDate: getBirthDate,
        };
        console.log(requestBody);

        const response = await axios.post(
            link.PostCustomerLink, requestBody);
        if (response.status === 200 || 201) {
            setTxtCustomerName("");
            setTxtCustomerSurname("");
            setTxtGSM("");
            setTxtTC("");
            setTxtEmail("");
            setCmbCity("");
            setTxtCustomerNo("");
            setTxtAddress("");
            setCmbIncomeType("");
            setGenderRd("");
            setFlatTypeChk("");

            window.alert("Eklendi.");
        } else {
            window.alert("Kayıt Eklenemedi!!!");
            console.log("eklenmedi");
        }
    };
    return (

        <div className="page-container">
            <title> Müşteri Yönetimi </title>
            {/* BEGIN PAGE HEAD */}
            <div className="page-head">
                <div className="container">
                    {/* BEGIN PAGE TITLE */}
                    <div className="page-title">
                        <h1>Müşteri</h1>
                    </div>
                    {/* END PAGE TITLE */}
                    {/* BEGIN PAGE TOOLBAR */}
                    <div className="page-toolbar">
                        {/* BEGIN THEME PANEL */}
                        <div className="btn-group btn-theme-panel">
                            <a href="javascript:;" className="btn dropdown-toggle" data-toggle="dropdown">
                                <i className="icon-settings" />
                            </a>
                            <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <h3>THEME COLORS</h3>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <ul className="theme-colors">
                                                    <li className="theme-color theme-color-default" data-theme="default">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Default</span>
                                                    </li>
                                                    <li className="theme-color theme-color-blue-hoki" data-theme="blue-hoki">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Blue Hoki</span>
                                                    </li>
                                                    <li className="theme-color theme-color-blue-steel" data-theme="blue-steel">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Blue Steel</span>
                                                    </li>
                                                    <li className="theme-color theme-color-yellow-orange" data-theme="yellow-orange">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Orange</span>
                                                    </li>
                                                    <li className="theme-color theme-color-yellow-crusta" data-theme="yellow-crusta">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Yellow Crusta</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-xs-12">
                                                <ul className="theme-colors">
                                                    <li className="theme-color theme-color-green-haze" data-theme="green-haze">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Green Haze</span>
                                                    </li>
                                                    <li className="theme-color theme-color-red-sunglo" data-theme="red-sunglo">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Red Sunglo</span>
                                                    </li>
                                                    <li className="theme-color theme-color-red-intense" data-theme="red-intense">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Red Intense</span>
                                                    </li>
                                                    <li className="theme-color theme-color-purple-plum" data-theme="purple-plum">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Purple Plum</span>
                                                    </li>
                                                    <li className="theme-color theme-color-purple-studio" data-theme="purple-studio">
                                                        <span className="theme-color-view" />
                                                        <span className="theme-color-name">Purple Studio</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12 seperator">
                                        <h3>LAYOUT</h3>
                                        <ul className="theme-settings">
                                            <li>
                                                Theme Style
                                                <select className="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips" data-original-title="Change theme style" data-container="body" data-placement="left">
                                                    <option value="boxed" selected="selected">Square corners</option>
                                                    <option value="rounded">Rounded corners</option>
                                                </select>
                                            </li>
                                            <li>
                                                Layout
                                                <select className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips" data-original-title="Change layout type" data-container="body" data-placement="left">
                                                    <option value="boxed" selected="selected">Boxed</option>
                                                    <option value="fluid">Fluid</option>
                                                </select>
                                            </li>
                                            <li>
                                                Top Menu Style
                                                <select className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips" data-original-title="Change top menu dropdowns style" data-container="body" data-placement="left">
                                                    <option value="dark" selected="selected">Dark</option>
                                                    <option value="light">Light</option>
                                                </select>
                                            </li>
                                            <li>
                                                Top Menu Mode
                                                <select className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) top menu" data-container="body" data-placement="left">
                                                    <option value="fixed">Fixed</option>
                                                    <option value="not-fixed" selected="selected">Not Fixed</option>
                                                </select>
                                            </li>
                                            <li>
                                                Mega Menu Style
                                                <select className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips" data-original-title="Change mega menu dropdowns style" data-container="body" data-placement="left">
                                                    <option value="dark" selected="selected">Dark</option>
                                                    <option value="light">Light</option>
                                                </select>
                                            </li>
                                            <li>
                                                Mega Menu Mode
                                                <select className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) mega menu" data-container="body" data-placement="left">
                                                    <option value="fixed" selected="selected">Fixed</option>
                                                    <option value="not-fixed">Not Fixed</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END THEME PANEL */}
                    </div>
                    {/* END PAGE TOOLBAR */}
                </div>
            </div>
            {/* END PAGE HEAD */}
            {/* BEGIN PAGE CONTENT */}
            <div className="page-content">
                <div className="container">
                    {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
                    <div className="modal fade" id="portlet-config" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true" />
                                    <h4 className="modal-title">Modal title</h4>
                                </div>
                                <div className="modal-body">
                                    Widget settings form goes here
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn blue">Save changes</button>
                                    <button type="button" className="btn default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                            {/* /.modal-content */}
                        </div>
                        {/* /.modal-dialog */}
                    </div>
                    {/* /.modal */}
                    {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
                    {/* BEGIN PAGE BREADCRUMB */}
                    <ul className="page-breadcrumb breadcrumb">
                        <li>
                            <a href="#">Müşteri Yönetimi</a><i className="fa fa-circle" />
                        </li>
                        <li>
                            <Link to="/formcustomer">Müşteri</Link>
                            <i className="fa fa-circle" />
                        </li>
                        <li className="active">
                            Yeni Giriş
                        </li>
                    </ul>
                    {/* END PAGE BREADCRUMB */}
                    {/* BEGIN PAGE CONTENT INNER */}
                    <div className="row">
                        <div className="col-md-6 ">
                            {/* BEGIN SAMPLE FORM PORTLET*/}
                            <div className="portlet light">
                                <div className="portlet-title">
                                    <div className="caption">
                                        <i className="fa fa-cogs font-green-sharp" />
                                        <span className="caption-subject font-green-sharp bold uppercase">MÜŞTERİ
                                            BİLGİLERİ</span>
                                    </div>
                                    <div className="tools">
                                        <a href="javascript:;" className="collapse">
                                        </a>
                                        <a href="#portlet-config" data-toggle="modal" className="config">
                                        </a>
                                        <a href="javascript:;" className="reload">
                                        </a>
                                        <a href="javascript:;" className="remove">
                                        </a>
                                    </div>
                                </div>
                                <div className="portlet-body form">
                                    <form role="form">
                                        <div className="form-body">
                                            <div className="form-group">
                                                <label>Müşteri Adı*</label>
                                                <input type="text" className="form-control" placeholder="Müşterinin Adını Giriniz..." id="txtCustomerName" name="txtCustomerName" value={getTxtCustomerName} onChange={(e) => setTxtCustomerName(e.target.value)} required />
                                            </div>
                                            <div className="form-group">
                                                <label>Müşteri Soyadı*</label>
                                                <input type="text" className="form-control" placeholder="Müşterinin Soyadını Giriniz..." id="txtCustomerSurname" name="txtCustomerSurname" value={getTxtCustomerSurname} onChange={(e) => setTxtCustomerSurname(e.target.value)} required />
                                            </div>
                                            <div className="form-group">
                                                <label>Telefon</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="fas fa-phone-square" />
                                                    </span>
                                                    <input type="text" className="form-control" id="txtGSM" name="txtGSM" placeholder="Telefon Giriniz..." value={getTxtGSM} onChange={(e) => setTxtGSM(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Doğum Tarihi</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    name="dBirthDate"
                                                    id="dBirthDate"
                                                    onChange={(e) => setBirthDate(e.target.value)}
                                                    value={getBirthDate}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>TC*</label>
                                                <input type="text" className="form-control" placeholder="Müşterinin TC No'sunu Giriniz..." id="txtTC" name="txtTC" value={getTxtTC} onChange={(e) => setTxtTC(e.target.value)} required />
                                            </div>
                                            <div className="form-group">
                                                <label>Email Adres</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-envelope-o" />
                                                    </span>
                                                    <input type="text" className="form-control" id="txtEmail" name="txtEmail" placeholder="Email Adresini Giriniz..." value={getTxtEmail} onChange={(e) => setTxtEmail(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Şehir</label>
                                                {/*<select className="form-control" id="cmbCity" name="cmbCity">
                                                    <option value={0} selected hidden>Lütfen seçiniz...</option>
                                                    <option value={1}>İstanbul</option>
                                                    <option value={2}>Ankara</option>
                                                    <option value={3}>İzmir</option>
                                                    <option value={4}>Antalya</option>
                                                </select>
    */}
                                                <GetCityCmb setCmbCity={setCmbCity}
                                                    getCmbCity={getCmbCity} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="portlet light">
                                <div className="portlet-title">
                                    <div className="tools">
                                        <a href="javascript:;" className="collapse">
                                        </a>
                                        <a href="#portlet-config" data-toggle="modal" className="config">
                                        </a>
                                        <a href="javascript:;" className="reload">
                                        </a>
                                        <a href="javascript:;" className="remove">
                                        </a>
                                    </div>
                                </div>
                                <div className="portlet-body form">
                                    <form role="form">
                                        <div className="form-body">
                                            <div className="form-group">
                                                <label>İlgilendiği Daire</label>
                                                <GetFlatTypeChk btnCheck={btnCheck} />
                                            </div>
                                            <div className="form-group">
                                                <label>Müşteri No *</label>
                                                <input type="text" className="form-control" placeholder="Müşteri No Giriniz..." id="txtCustomerNo" name="txtCustomerNo" value={getTxtCustomerNo} onChange={(e) => setTxtCustomerNo(e.target.value)} required />
                                            </div>
                                            <div className="form-group">
                                                <label>Adres</label>
                                                <textarea className="form-control" rows={3} id="txtAddress" name="txtAddress" value={getTxtAddress} onChange={(e) => setTxtAddress(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label>Cinsiyet</label>
                                                <div className="radio-list">
                                                    <GetGenderRd setGenderRd={setGenderRd} getGenderRd={getGenderRd} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Gelir Tipi</label>
                                                {/*<select className="form-control" id="cmbStatus" name="cmbStatus">
                                                    <option value={0} selected hidden>Lütfen seçiniz...</option>
                                                    <option value={1}>A</option>
                                                    <option value={2}>B</option>
                                                    <option value={3}>C</option>
                                                    <option value={4}>D</option>
                                                </select>
                                                */}
                                                <GetIncomeTypeCmb setCmbIncomeType={setCmbIncomeType} getCmbIncomeType={getCmbIncomeType} />
                                            </div>
                                        </div>
                                        <div className="form-actions right">
                                            <button type="button" className="btn green" name="btnSubmit" id="btnSubmit" onClick={() => btnSubmit()}>Kaydet</button>
                                            <button type="button" className="btn default" name="btnReset" id="btnReset">Vazgeç</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="portlet light">
                                <div className="portlet-title">
                                    <div className="caption">
                                        <i className="fa fa-cogs font-green-sharp" />
                                        <span className="caption-subject font-green-sharp bold uppercase">KAYIT GEÇMİŞİ</span>
                                    </div>
                                    <div className="tools">
                                        <a href="javascript:;" className="collapse">
                                        </a>
                                        <a href="#portlet-config" data-toggle="modal" className="config">
                                        </a>
                                        <a href="javascript:;" className="reload">
                                        </a>
                                        <a href="javascript:;" className="remove">
                                        </a>
                                    </div>
                                </div>
                                <div className="portlet-body form">
                                    <form role="form">
                                        <div className="form-body">
                                            <div className="form-group">
                                                <label><strong>Oluşturulan Kullanıcı</strong></label>
                                                <p className="form-control-static">
                                                    User XXX
                                                </p>
                                            </div>
                                            <div className="form-group">
                                                <label><strong>Oluşturma Tarihi</strong></label>
                                                <p className="form-control-static">
                                                    DD/MM/YY
                                                </p>
                                            </div>
                                            <div className="form-group">
                                                <label><strong>Güncelleyen Kullanıcı</strong></label>
                                                <p className="form-control-static">
                                                    User YY
                                                </p>
                                            </div>
                                            <div className="form-group">
                                                <label><strong>Güncelleme Tarihi</strong></label>
                                                <p className="form-control-static">
                                                    DD/MM/YY
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* END SAMPLE FORM PORTLET*/}
                    </div>
                    {/* END PAGE CONTENT INNER */}
                </div>
            </div>
            {/* END PAGE CONTENT */}
        </div>

    );
}
export default FormCustomerContent;