import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
    return(
        <section className="app">
            <article>
                <Navbar/>
                <Home/>
            </article>
        </section>
    )
}
export default App;
