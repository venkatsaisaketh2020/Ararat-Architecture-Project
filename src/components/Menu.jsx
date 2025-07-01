import React from "react";
import color from "./Navbar.module.css"

const Menu = () => {
    return(
        <div className={color.menuBlock}>
            <ul>
            <li><a href="HOME">HOME</a></li>
            <li><a href="ABOUT">ABOUT</a></li>
            <li><a href="PROJECTS">PROJECTS</a></li>
            <li><a href="SERVICES">SERVICES</a></li>
            <li><a href="CONTACT">CONTACT</a></li>    
            </ul>            
            <button>GET  IN  TOUCH</button>
        </div>
    )
}
export default Menu;