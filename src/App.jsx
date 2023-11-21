import React from "react"
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./App.css"
import Companies from "./components/companies/Companies";
import Residency from "./components/residencies/Residency";
import Value from "./components/value/Value";
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
</div>  


);
}

export default App;
