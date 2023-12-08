import React from "react"
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./App.css"
import Companies from "./components/companies/Companies";
import Residency from "./components/residencies/Residency";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/get started/GetStarted";
import Footer from "./components/footer/Footer";
import CardComponent from "./components/cards/CardComponent"

function App() {
  return (
<div className="App">
  <div>
    <div className="white-gradient"/>
    <Header/>
    <Hero/>
  </div>
  <Companies/>
  <Residency/>
  <Value/>
  <Contact/>
  <CardComponent/>
  <GetStarted/>
  <Footer/>
</div>  


);
}

export default App;
