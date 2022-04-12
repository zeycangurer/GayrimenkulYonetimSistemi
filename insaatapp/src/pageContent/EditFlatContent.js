import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import link from '../services/Links';


function EditFlatContent() {
    const [getCmbFlatType, setCmbFlatType] = useState();
    const [getTxtFlatNo, setTxtFlatNo] = useState();
    const [getCmbProject, setCmbProject] = useState();
    const [getCmbFlatStatus, setCmbFlatStatus] = useState();
    const [getTxtPrice, setTxtPrice] = useState();
    const navigate = useNavigate();

    const btnBack = async () => {
        navigate("/listflat");
    };

    const btnSubmit = async () => {
        let requestBody = {
            FlatID: searchParam.get("id"),
            FlatNo: getTxtFlatNo,
            FlatTypeID: getCmbFlatType,
            ProjectID: getCmbProject,
            Price: getTxtPrice,
            FlatStatusID: getCmbFlatStatus
        };

        const responseFlatPut = await axios.put(
            link.PutFlatLink,
            requestBody
        );
        if (responseFlatPut.status === 200 || 201) {
            window.alert("Proje Bilgileri Güncellendi.");
            console.log("Güncellendi");
        } else {
            window.alert("Kayıt Güncellenemedi");
        }
    };

    const [flatData, setFlatData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [flatTypeData, setFlatTypeData] = useState([]);
    const [flatStatusData, setFlatStatusData] = useState([]);

    const [searchParam, setSearchParam] = useSearchParams();

    useEffect(async () => {
        const responseFlatGet = await axios.get(
            link.GetFlatLink
        );
        setFlatData(responseFlatGet.data[0].FlatsTable);

        const responseProject = await axios.get(
            link.GetProjectLink
        );

        setProjectData(responseProject.data[0].ProjectsTable);

        const responseFlatType = await axios.get(
            link.GetFlatTypeLink
        );

        setFlatTypeData(responseFlatType.data[0].FlatTypeTable);

        const responseFlatStatus = await axios.get(
            link.GetFlatStatusLink
        );

        setFlatStatusData(responseFlatStatus.data[0].FlatStatusTable);

        setTxtFlatNo(document.getElementById("txtFlatNo").value);
        setCmbFlatType(document.getElementById("cmbFlatType").value);
        setCmbProject(document.getElementById("cmbProject").value);
        setCmbFlatStatus(document.getElementById("cmbFlatStatus").value);
        setTxtPrice(document.getElementById("txtPrice").value);

    }, []);

    return (
        <div className="page-container">
            <title> Proje Yönetimi </title>
            <div className="page-head">
                <div className="container">
                    {/* BEGIN PAGE TITLE */}
                    <div className="page-title">
                        <h1>Daire</h1>
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
                            <a hreg="#">Proje Yönetimi</a><i className="fa fa-circle" />
                        </li>
                        <li>
                            <Link to="/formflat">Daire</Link>
                            <i className="fa fa-circle" />
                        </li>
                        <li className="active">
                            Daire Güncelleme
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
                                        <span className="caption-subject font-green-sharp bold uppercase">DAİRE BİLGİLERİ</span>
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
                                                <label>Daire No*</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Daire No Giriniz..."
                                                    id="txtFlatNo"
                                                    name="txtFlatNo"
                                                    onChange={(e) => setTxtFlatNo(e.target.value)}
                                                    defaultValue={flatData
                                                        .filter(
                                                            (flatItem) =>
                                                                flatItem.FlatID == searchParam.get("id")
                                                        )
                                                        .map((arrayItem) => arrayItem.FlatNo)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Proje Adı</label>
                                                <select
                                                    className="form-control"
                                                    name="cmbProject"
                                                    id="cmbProject"
                                                    value={getCmbProject}
                                                    onChange={(e) => setCmbProject(e.target.value)}

                                                >
                                                    {projectData.map((projectItem, index) => (
                                                        <option
                                                            key={index}
                                                            name={projectItem.ProjectName}
                                                            value={projectItem.ProjectID}
                                                            selected={
                                                                flatData
                                                                    .filter(
                                                                        (arrayItem) =>
                                                                            arrayItem.FlatID ==
                                                                            searchParam.get("id")
                                                                    )
                                                                    .map(
                                                                        (arrayItem2) => arrayItem2.ProjectID
                                                                    ) == projectItem.ProjectID
                                                            }
                                                        >
                                                            {projectItem.ProjectName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Daire Türü</label>
                                                <select
                                                    className="form-control"
                                                    name="cmbFlatType"
                                                    id="cmbFlatType"
                                                    value={getCmbFlatType}
                                                    onChange={(e) => setCmbFlatType(e.target.value)}
                                                >
                                                    {flatTypeData.map((flatTypeItem, index) => (
                                                        <option
                                                            key={index}
                                                            name={flatTypeItem.FlatTypeName}
                                                            value={flatTypeItem.FlatTypeID}
                                                            selected={
                                                                flatData
                                                                    .filter(
                                                                        (arrayItem) =>
                                                                            arrayItem.FlatID ==
                                                                            searchParam.get("id")
                                                                    )
                                                                    .map(
                                                                        (arrayItem2) => arrayItem2.FlatTypeID
                                                                    ) == flatTypeItem.FlatTypeID
                                                            }
                                                        >
                                                            {flatTypeItem.FlatTypeName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Daire Durumu</label>
                                                <select
                                                    className="form-control"
                                                    name="cmbFlatStatus"
                                                    id="cmbFlatStatus"
                                                    value={getCmbFlatStatus}
                                                    onChange={(e) => setCmbFlatStatus(e.target.value)}
                                                >
                                                    {flatStatusData.map((flatStatusItem, index) => (
                                                        <option
                                                            key={index}
                                                            name={flatStatusItem.FlatStatusName}
                                                            value={flatStatusItem.FlatStatusID}
                                                            selected={
                                                                flatData
                                                                    .filter(
                                                                        (arrayItem) =>
                                                                            arrayItem.FlatID ==
                                                                            searchParam.get("id")
                                                                    )
                                                                    .map(
                                                                        (arrayItem2) => arrayItem2.FlatStatusID
                                                                    ) == flatStatusItem.FlatStatusID
                                                            }
                                                        >
                                                            {flatStatusItem.FlatStatusName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Fiyat</label>
                                                <input type="text" className="form-control" placeholder="Fiyat Giriniz..." id="txtPrice" name="txtPrice"
                                                    onChange={(e) => setTxtPrice(e.target.value)}
                                                    defaultValue={flatData
                                                        .filter(
                                                            (flatItem) =>
                                                                flatItem.FlatID == searchParam.get("id")
                                                        )
                                                        .map((arrayItem) => arrayItem.Price)} required />
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
export default EditFlatContent;