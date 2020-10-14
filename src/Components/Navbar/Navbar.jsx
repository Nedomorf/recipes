import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import style from './Navbar.module.css';

const Navbar = (props) => {

    const [activeMenu, setActiveMenu] = useState(false);

    const toggleNav = () => {
        return activeMenu
            ? setActiveMenu(false)
            : setActiveMenu(true)
    }

    return (
        <div>
            <div
                id={style.navToggle}
                onClick={toggleNav}
                className={activeMenu ? style.active : null}
                style={{ background: props.color }}
            />
            <div id={style.nav} className={activeMenu ? style.active : null} style={{ background: props.color }}>
                <NavLink to="search" className={style.navItem}>
                    <div>
                        <span className={style.menuItem}>Search</span>
                        <span className={style.icon}><i className="fa fa-search" aria-hidden="true"/></span>
                    </div>
                </NavLink>
                <NavLink to="#" className={style.navItem}>
                    <div>
                        <span className={style.menuItem}>Portfolio</span>
                        <span className={style.icon}><i className="fa fa-user-o" aria-hidden="true"/></span>
                    </div>
                </NavLink>
                <NavLink to="#" className={style.navItem}>
                    <div>
                        <span className={style.menuItem}>Contact</span>
                        <span className={style.icon}><i className="fa fa-phone" aria-hidden="true"/></span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;