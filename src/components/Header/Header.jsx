import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import "./Header.css"

// IMPORT SOCIAL ICON
import SocialIcon from '../SocialIcon/SocialIcon';

// LOGO
import logo from "../../assets/img/logo.png";
const Header = () => {

    // MOBILE NAV
    const [nav, setNav] = useState(false);

    // HANDLE SIDE NAVBAR
    const handleNav = () => {
        setNav(!nav);
    }

    window.addEventListener("scroll", (e) => {
        document.getElementById("header").style.backdropFilter = "blur(30px)";
    })


    return (
        <>
            <header id='header'>
                <div className="container">
                    <nav className='d-flex align-items-center navbar-expand-lg w-100 headerNav'>
                        <Link className='logo' to={"/"}>
                            <img src={logo} alt="Packbatles logo" />
                        </Link>

                        <button className='toggler ms-auto d-block d-lg-none' onClick={handleNav} >
                            {
                                nav ? <FaTimes /> : <FaBarsStaggered />
                            }
                        </button>

                        <div className={`d-lg-flex align-items-center w-100 ${nav ? 'nav-active' : null}`} id='topNav'>
                            <button className='closeNav ms-auto d-block d-lg-none ' onClick={handleNav} >
                                <FaTimes />
                            </button>

                            <ul className='navbar-nav'>
                                <li>
                                    <NavLink to={"/packs"}>Packs</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/battles"}>Battles</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/event"}>Event</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/upgrade"}>Upgrade</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/trade"}>Trade</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#" >More</NavLink>
                                </li>
                            </ul>
                            <div className="h-social d-none d-xxl-block ms-auto ">
                                <SocialIcon />
                            </div>
                            <div className="header-buttons ms-auto d-flex align-items-center">
                                <Link className='me-3' to={"/login"}>Log In</Link>
                                <Link className='signup-btn' to={"/singup"}>Sign Up</Link>
                            </div>

                        </div>


                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header