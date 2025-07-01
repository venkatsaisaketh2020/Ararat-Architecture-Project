import React from "react";
import color from "./Home.module.css"

const Home =() => {
    return(
        <div className={color.homeBlock}>
            <h2> WE DESIGN YOUR SPACE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
            <button>SEE OUR PROJECTS</button>
        </div>
    )
}
export default Home;