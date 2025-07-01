import React from "react";
import color from "./Navbar.module.css";
import Logo from "./logo";
import Menu from "./Menu";

const Navbar = () => {
    return(
        <section className={color.navBlock}>
            <article>
              <Logo/>
              <Menu/>
            </article>
        </section>
    )
}
export default Navbar;