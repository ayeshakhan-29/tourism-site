import React from 'react'
import { Link } from 'react-router-dom'
//import Button from './Button'
import "./Footer.css"
import { BsFacebook,BsInstagram,BsTwitter,BsLinkedin,BsYoutube,BsMoonStars } from "react-icons/bs";
function Footer(){
    return(
        <>
        <div className = 'footer-container'>
            <section className = "footer-subscription">
                <p className = "footer-subscription-heading">
                    
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe anytime
                </p>
                <div className = "input-areas">
                    <form>
                        <input
                            type = "email"
                            name = "email"
                            placeholder = "Your Email"
                            className = "footer-input"
                        />
                        <button buttonStyle = 'btn'>SUBSCRIBE</button>

                    </form>

                </div>
            </section>
                <div class='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/sign-up'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/'>Contact</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Places</Link>
                            <Link to='/'>Special Offers</Link>
                            <Link to='/'>Plans</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Travel Tips</h2>
                            <Link to='/'>Start here</Link>
                            <Link to='/'>Blog</Link>
                            <Link to='/'>Destinations</Link>
                            <Link to='/'>Travel Insurance</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Resources</h2>
                            <Link to='/'>Categories</Link>
                            <Link to='/'>Travel Resources</Link>
                            <Link to='/'>City Guides</Link>
                            <Link to='/'>Travel Guides</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                            <Link to='/'>LinkedIn</Link>
                        </div>
                    </div>
                </div>
                <section className = "social-media">
                    <div className = "social-media-wrap">
                        <div className = "footer-logo">
                            <Link className = "social-logo">
                            <BsMoonStars/>  TravelEx 
                            </Link>
                        </div>
                        <small className="website-rights">Travelex © 2022</small>
                        <div class='social-icons'>
                           
                            <Link
                                class='social-icon-link facebook'
                                to='http://www.facebook.com'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <BsFacebook/>
                            </Link>
                            <Link
                                class='social-icon-link instagram'
                                to='www.instagram.com'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <BsInstagram/>
                            </Link>
                            <Link
                                class='social-icon-link youtube'
                                to='www.youtube.com'
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <BsYoutube />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='www.twitter.com'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <BsTwitter />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='www.linkedin.com'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <BsLinkedin />
                            </Link>
                        </div>
                        </div>

                </section>
            </div>
        </>
    )
}

export default Footer