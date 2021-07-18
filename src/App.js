import React from 'react';

// import Test from "./components/Test";
import Front from "./components/Front";
// import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Team from "./components/Team";
import Footer from "./components/Footer";

import './main.css';

function App(){
    return (
        <div className="App">
            {/* <Navbar/> */}
            <Front/>
            <About/>
            <Services/>
            <Team/>
            <Clients/>
            <Footer/>
            {/* <Test/> */}
        </div>
    )
};

export default App;