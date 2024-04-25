import React from 'react'
import { FiSearch } from "react-icons/fi";
import setting from '../Assent/settings.png'
import notification from '../Assent/notification.png'
import style from '../Style/Navbar.module.css'
import logo from '../Assent/logo.png'

const NavBar = () => {
    return (
        <>
            <div className="Dashboard-main-top">

                <div className={style.DashboardNavarbar}>
                    <div className={`${style.logo}`}>
                        <img src={logo} width="155px" height="115px"/>
                    </div>

                    <div className={`${style.search} col-xxl-8 col-xl-7 col-lg-7 col-md-6 col-sm-5`}>
                        <FiSearch className={`${style.searchicon} me-3`} />
                        <input className={style.searchinput} type="text" placeholder="Search Here....." />
                    </div>

                    <div className={`${style.navabaricon}`}>
                        <a href="javascript:void(0)">
                            <img src={setting} className={style.settingsicon} width="30px" height="30px" />
                        </a>
                        <a href="javascript:void(0)" className="ms-3 ms-md-2 ms-sm-0">
                            <img src={notification} className={style.notification} width="30px" height="30px" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
