import React,{useEffect} from "react";
import "./aboutus.css";
import { CardGroup, Card, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function Aboutus() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
<div className='about-container'>
        <img src='images/aboutus.jpg' className='about-img' alt='sun shine '></img>
        <div className='about-title-container'>
          <span className='about-title'>About Us</span>
        </div>
      </div>
      <Container>
        <div className='about-description-container'>
          <span className='about-description-title'>What We Do?</span>
          <span className='about-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            delectus rem porro ab amet accusamus animi possimus repellat
            aspernatur assumenda? Ex assumenda unde atque eaque maiores dicta id
            eius officiis?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Blanditiis culpa ea autem quaerat. Ducimus consequatur eveniet
            laborum possimus quos aspernatur eligendi, placeat deserunt
            architecto beatae sed eius? Debitis, officiis dicta!
          </span>
        </div>
      </Container>

    <h3>Our Team</h3>

    <CardGroup data-aos="fade-up"
                data-aos-duration="2500" >
  <Card>
    <Card.Img variant="top" className="img-thumbnail" id="imx" src="images/asha.jpeg" />
    <Card.Body>
      <Card.Title>Ayesha Rashid Khan</Card.Title>
      <Card.Text>
        CEO and founder
        <p>ark29@travelex.pk</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
     <p><button class="button">Contact</button></p>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top"className="img-thumbnail" id="imx" src="images/aymen.jpeg" />
    <Card.Body>
      <Card.Title>Aimen Ilahi</Card.Title>
      <Card.Text>
       Manager
       <p>ilahi13@travelex.pk</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p><button class="button">Contact</button></p>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" className="img-thumbnail" id="imx" src="images/sheza.jpeg" />
    <Card.Body>
      <Card.Title>Sheza Arshad</Card.Title>
      <Card.Text>
        Resources Manager
        <p>hl_02@travelex.pk</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <p><button class="button">Contact</button></p></Card.Footer>
  </Card>
</CardGroup>


    </>
  );
}

export default Aboutus;