import React from 'react'
import NavBar from "../../components/NavBar/navbar";
import Footer from "../../components/Footer/footer";
import "./rules.css"

function Rules() {
  return (
    <div className='Rules'>
        <NavBar />
        <div className='rules-container'>
          <iframe title="kurallar" src={require("../../assets/Damal_Bayrak_Lig_Kurallar.pdf")}/>
        </div>
        <Footer />
    </div>
  )
}

export default Rules