import {Link} from "react-router-dom";
function Menu() {
   
    return (
        <div className="hor-menu ">
            <ul className="nav navbar-nav">
                <li className="active">
                    <Link to="index.html">Dashboard</Link>
                </li>
                <li className="menu-dropdown classic-menu-dropdown ">
                    <a data-hover="megamenu-dropdown" data-close-others="true" data-toggle="dropdown" href="javascript:;">
                        Proje Yönetimi <i className="fa fa-angle-down" />
                    </a>
                    <ul className="dropdown-menu pull-left">
                        <li className=" dropdown-submenu">
                            <a href="#">
                                <i className="icon-briefcase" />
                                Proje </a>
                            <ul className="dropdown-menu">
                                <li className=" ">
                                    <Link to="/formproject">
                                        Yeni Giriş </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/listproject">
                                        Liste </Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" dropdown-submenu">
                            <a href="#">
                                <i className="icon-home" />
                                Daire </a>
                            <ul className="dropdown-menu">
                                <li className=" ">
                                    <Link to="/formflat">
                                        Yeni Giriş </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/listflat">
                                        Liste </Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" dropdown-submenu">
                            <a href="#">
                                <i className="icon-user" />
                                Çalışan </a>
                            <ul className="dropdown-menu">
                                <li className=" ">
                                    <Link to="/formemployee">
                                        Yeni Giriş </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/listemployee">
                                        Liste </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="menu-dropdown classic-menu-dropdown ">
                    <a data-hover="megamenu-dropdown" data-close-others="true" data-toggle="dropdown" href="javascript:;">
                        Müşteri Yönetimi <i className="fa fa-angle-down" />
                    </a>
                    <ul className="dropdown-menu pull-left">
                        <li className=" dropdown-submenu">
                            <a href="#">
                                <i className="icon-user-female" />
                                Müşteri </a>
                            <ul className="dropdown-menu">
                                <li className=" ">
                                    <Link to="/formcustomer">
                                        Yeni Giriş </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/listcustomer">
                                        Liste </Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" dropdown-submenu">
                            <a href="#">
                                <i className="icon-eye" />
                                Ziyaret </a>
                            <ul className="dropdown-menu">
                                <li className=" ">
                                    <Link to="/formvisit">
                                        Yeni Giriş </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/listvisit">
                                        Liste </Link>
                                </li>
                            </ul>
                        </li>
                        <li className=" dropdown-submenu">
                            <a href="#">
                                <i className="icon-rocket" />
                                Satış </a>
                            <ul className="dropdown-menu">
                                <li className=" ">
                                    <Link to="/formsale">
                                        Yeni Giriş </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/listsale">
                                        Liste </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="menu-dropdown classic-menu-dropdown ">
                    <a data-hover="megamenu-dropdown" data-close-others="true" data-toggle="dropdown" href="javascript:;">
                        İçerik Yönetimi <i className="fa fa-angle-down" />
                    </a>
                    <ul className="dropdown-menu pull-left">
                        <li className=" mega-menu-submenu">
                            <Link to="/listgender">
                                <i className="icon-settings" />
                                Cinsiyet </Link>
                        </li>
                        <li className=" mega-menu-submenu">
                            <Link to="/listflatstatus">
                                <i className="icon-settings" />
                                Daire Durumu </Link>
                        </li>
                        <li className=" mega-menu-submenu">
                            <Link to="/listflattype">
                                <i className="icon-settings" />
                                Daire Tipi </Link>
                        </li>
                        
                        <li className=" mega-menu-submenu">
                            <Link to="/listincometype">
                                <i className="icon-settings" />
                                Gelir Tipi </Link>
                        </li>
                        <li className=" mega-menu-submenu">
                            <Link to="/listprojectstatus">
                                <i className="icon-settings" />
                                Proje Durumu </Link>
                        </li>
                        <li className=" mega-menu-submenu">
                            <Link to="/listcity">
                                <i className="icon-settings" />
                                Şehir </Link>
                        </li></ul>
                </li>
            </ul>
        </div>

    )
}
export default Menu