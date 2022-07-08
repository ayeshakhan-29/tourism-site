import React from "react";
import './Navbar.css'
import { Container,Navbar,Nav,Button} from "react-bootstrap";
import { BsMoonStars } from "react-icons/bs";


const Navbar1 = () => {
  return (
   <>
    <Navbar className=' custom-navbar' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand className="logo" href='/'><BsMoonStars />TravelEx</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='ms-auto   me-auto my-2 mt-lg-2' navbarScroll>
              <span className='nav-link-hover'>
                <Nav.Link className="linke" href='/'>
                  Home
                </Nav.Link>
              </span>
              <span className='nav-link-hover'>
              <Nav.Link className="linke" href="/packages">Packages</Nav.Link>
              </span>
              <span className='nav-link-hover'>
              <Nav.Link className="linke" href="/aboutus">About Us</Nav.Link>
              </span>
              <span className='nav-link-hover'>
              <Nav.Link className="linke" href="/contactus">Contact Us</Nav.Link>
              </span>
             
            </Nav>
            <div className="hell">
            <Button variant="secondary" className="navbar-btn" href="/signin" >login</Button>
            {/* <input className="text" type='text' placeholder='search'>
            
            </input> */}
          
            </div>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

   </>
  )
}

export default Navbar1