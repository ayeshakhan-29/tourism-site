import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'
import './Navbar.css'
import { BsMoonStars } from "react-icons/bs";

function Navbar(){
    const [click, setClick] = useState(false)
    const [button,setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton)

    useEffect(()=>{
        showButton()
    }, [])
    return(
        <>
      
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to = "/" className = "navbar-logo" onClick = {closeMobileMenu}>
                    <BsMoonStars/>
                        TravelEx 
                    </Link>
                    <div className = "menu-icon" onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times' : "fas fa-bars"} /> 
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = "nav-item">
                            <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cards' className='nav-links' onClick={closeMobileMenu}>
                                Packages
                            </Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>

                        
                    </ul>
                    
                </div>

            </nav>
        </>
    )
}

 export default Navbar