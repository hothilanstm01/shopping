import React, { useEffect, useRef } from 'react'
import {Link, useLocation} from 'react-router-dom'
import logo from '../assets/images/logo-1.png'

const mainNav = [
    {
        display: "Home",
        path : "/"
    },
    {
        display: "Shop",
        path : "/catalog"
    },
    {
        display: "Assessories",
        path : "/assessories"
    },
    {
        display: "Contact us",
        path : "/contact"
    }
]

const Header = () => {

    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, []);

    const menuLeft = useRef(null)

    const menuToggle = () => menuLeft.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header_logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header_menu">
                    <div className="header_menu_mobile-tonggle" onClick={menuToggle}>
                        <i class='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header_menu_left" ref={menuLeft}>
                        <div className="header_menu_left_close" onClick={menuToggle}>
                            <box-icon name='chevron-left' ></box-icon>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div
                                    key={index} className={`header_menu_item
                                    header_menu_left_item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header_menu_right">
                        <div className="header_menu_item header_menu_right_item">
                            <i class='bx bx-search' ></i> 
                        </div>
                        <div className="header_menu_item header_menu_right_item">
                            <Link to="/cart">
                                <i class='bx bx-shopping-bag' ></i>
                            </Link>
                        </div>
                        <div className="header_menu_item header_menu_right_item">
                            <i class='bx bx-user' ></i> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
