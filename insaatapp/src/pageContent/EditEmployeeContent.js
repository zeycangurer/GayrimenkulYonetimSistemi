import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import link from '../services/Links';

function EditEmployeeContent() {
    const [getTxtEmployeeName, setTxtEmployeeName] = useState();
    const [getTxtEmployeeSurname, setTxtEmployeeSurname] = useState();
    const [getTxtUsername, setTxtUsername] = useState();
    const [getTxtPassword, setTxtPassword] = useState();

    const navigate = useNavigate();

    const btnBack = async () => {
        navigate("/listemployee");
    };


    const btnSubmit = async () => {
        let requestBody = {
            EmployeeID: searchParam.get("id"),
            EmployeeName: getTxtEmployeeName,
            EmployeeSurname: getTxtEmployeeSurname,
            Username: getTxtUsername,
            Password: getTxtPassword

        };

        const responseEmployeePut = await axios.post(
            link.PostEmployeeLink,
            requestBody
        );
        if (responseEmployeePut.response.status === 200 || 201) {
            setTxtEmployeeName("");
            window.alert("Çalışan Bilgileri Güncellendi");
            console.log("Güncellendi.");
            console.log(getTxtEmployeeName);



        } else {
            window.alert("Kayıt Güncellenemedi.");
        }

    };
    const [employeeData, setEmployeeData] = useState([]);
    const [searchParam, setSearchParam] = useSearchParams();

    useEffect(async () => {
        const responseEmployeeGet = await axios.get(
            link.GetEmployeeLink
        );
        setEmployeeData(responseEmployeeGet.data[0].EmployeesTable);

        setTxtEmployeeName(document.getElementById("txtEmployeeName").value);
        setTxtEmployeeSurname(document.getElementById("txtEmployeeSurname").value);
        setTxtUsername(document.getElementById("txtUsername").value);
        setTxtPassword(document.getElementById("txtPassword").value);

    }, []);
    return (
        <div className="page-container">
            <title> Proje Yönetimi </title>
            <div className="page-head">
                <div className="container">
                    {/* BEGIN PAGE TITLE */}
                    <div className="page-title">
                        <h1>Çalışan</h1>
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
                            <a href="#">Proje Yönetimi</a><i className="fa fa-circle" />
                        </li>
                        <li>
                            <Link to="/editemployee">Çalışan</Link>
                            <i className="fa fa-circle" />
                        </li>
                        <li className="active">
                            Güncelleme
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
                                        <span className="caption-subject font-green-sharp bold uppercase">ÇALIŞAN BİLGİLERİ</span>
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
                                                <label>Çalışan Adı*</label>
                                                <input type="text" className="form-control" placeholder="Çalışan Adını Giriniz..." id="txtEmployeeName" name="txtEmployeeName"
                                                    onChange={(e) => setTxtEmployeeName(e.target.value)}
                                                    defaultValue={employeeData
                                                        .filter(
                                                            (employeeItem) =>
                                                                employeeItem.EmployeeID == searchParam.get("id")
                                                        )
                                                        .map((arrayItem) => arrayItem.EmployeeName)} required />
                                            </div>
                                            <div className="form-group">
                                                <label>Çalışan Soyadı*</label>
                                                <input type="text" className="form-control" placeholder="Çalışan Soyadını Giriniz..." id="txtEmployeeSurname" name="txtEmployeeSurname"

                                                    onChange={(e) => setTxtEmployeeSurname(e.target.value)}
                                                    defaultValue={employeeData
                                                        .filter(
                                                            (employeeSurnameItem) =>
                                                                employeeSurnameItem.EmployeeID == searchParam.get("id")
                                                        )
                                                        .map((arrayItem) => arrayItem.EmployeeSurname)} required />
                                            </div>
                                            <div className="form-group">
                                                <label>Çalışanın Kullanıcı Adı</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="fas fa-user" />
                                                    </span>
                                                    <input type="text" className="form-control" id="txtUsername" name="txtUsername" placeholder="Kullanıcı Adını Giriniz..."
                                                        onChange={(e) => setTxtUsername(e.target.value)}
                                                        required
                                                        defaultValue={employeeData
                                                            .filter(
                                                                (employeeUsernameItem) =>
                                                                    employeeUsernameItem.EmployeeID == searchParam.get("id")
                                                            )
                                                            .map((arrayItem) => arrayItem.Username)}
                                                         />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Şifre</label>
                                                <div className="input-group">
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-lock" />
                                                    </span>
                                                    <input type="password" className="form-control" name="txtPassword" id="txtPassword" placeholder="Şifreyi giriniz"
                                                        onChange={(e) => setTxtPassword(e.target.value)}
                                                        required
                                                        defaultValue={employeeData
                                                            .filter(
                                                                (employeePasswordItem) =>
                                                                    employeePasswordItem.EmployeeID == searchParam.get("id")
                                                            )
                                                            .map((arrayItem) => arrayItem.Password)}
                                                         />                                                
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="form-actions right">
                                            <button type="button" className="btn green" name="btnSubmit" id="btnSubmit" onClick={() => btnSubmit()}>Kaydet</button>
                                            <button type="button" className="btn default" name="btnReset" id="btnReset" onClick={() => btnBack()}>Vazgeç</button>
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
export default EditEmployeeContent;