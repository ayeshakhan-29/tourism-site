import React from 'react'
// import button from './button'
import './MainSection.css'
import '../App.css'
import { BsPersonFill } from "react-icons/bs";
import {Link} from "react-router-dom"

function MainSection(){

    return(
        <div className = "main-container">
            <video src= "/Videos/mountain2.mp4" autoPlay loop muted />
            <h1>Adventure Awaits</h1>
            <p>Travel With Us</p>
        <div className='buttondiv'>
        
            <button type='button' className='btn1'  >Book Now</button>
            <button type='button'  className='btn1' ><BsPersonFill/><Link to={"./signup"} style={{color:'#fff' }}>Sign Up  </Link></button>
        
        </div>   
        </div>

    )
}

export default MainSection