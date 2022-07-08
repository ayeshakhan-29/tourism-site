import React from "react";
import "./Contactus.css";
import { Container, Row, Col } from "react-bootstrap";

function Contactus() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
       
          <iframe
            title='Map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486397.4375644857!2d71.97807391359814!3d31.422803856520087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901008aea42c5%3A0x57d74532cda234d4!2s128%20Street%201%2C%20Block%20K1%20Block%20K%201%20Wapda%20Town%20Phase%201%20WAPDA%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1654372647880!5m2!1sen!2s"
            className='gmap'
            style={{ border: "0" }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </Col>
        <Col>
          <Row>
            <Col xs={12} md={6}>
              <div className='contact-col'>
                <div>
                  <i className='fa fa-home' aria-hidden='true'></i>
                  <span>
                    <h5>ABC Building, Street abc</h5>
                    <p>City, Province, Country</p>
                  </span>
                </div>
                <div>
                  <i className='fa fa-phone' aria-hidden='true'></i>
                  <span>
                    <h5>+92 XXXXXXXXXX</h5>
                    <p>Monday to Friday, 9AM to 5PM</p>
                  </span>
                </div>
                <div>
                  <i className='fa fa-envelope-o' aria-hidden='true'></i>
                  <span>
                    <h5>example@given.com</h5>
                    <p>Email us your query</p>
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className='contact-col'>
                <h3>Get in touch</h3>
                <form action=''>
                  <input
                    type='text'
                    className='name'
                    placeholder='Enter Your Full Name'
                    required
                  />
                  <input
                    type='email'
                    className='email'
                    placeholder='Enter your Email'
                    required
                  />
                  <input
                    type='text'
                    className='subject'
                    placeholder='Enter Subject'
                    required
                  />
                  <textarea rows='10' placeholder='Message' required></textarea>
                  <button className='contact-form-btn'>Submit</button>
                </form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contactus;