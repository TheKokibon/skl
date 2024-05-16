import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Success from "./components/Success";
import { Pricing } from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
    <Navbar/>
    <Hero/>
    <hr/>

    <About/>
    <hr/>

    <Success/>
    <hr/>

    <Pricing/>
    <hr/>

    <Contact/>
    <hr/>
    <Footer/>
    
    </div>
  );
}

export default App;
