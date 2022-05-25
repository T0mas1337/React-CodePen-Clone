import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './navbar.css';
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Login from '../login/login';
import {Avatar} from "@material-ui/core";

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <div className="navbar">
                <Link to={"#"} className = {"menu-bars"}>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <div className={"user-info"}>
                    <Avatar src={user?.photoURL}/>
                    <div>{user?.displayName}</div>
                    <div className={"user-logout"}><Login/></div>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className={'nav-menu-items'}>
                    <li className={'navbar-toggle'}>
                        <Link to={"#"} className={"menu-bars"} onClick={showSidebar}>
                            <AiIcons.AiOutlineClose/>

                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path} onClick={showSidebar}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                    })}

                </ul>
            </nav>
        </>
    )
}

export default Navbar;