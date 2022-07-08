import React from 'react'
import '../App.css'
import { Button, Form , Row, Col} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './Signup.css'

const Signup = () =>{
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  

  // function validateForm() {
  //   return email.length > 0 && password.length > 0 ;
  // }

    return(
      <div className="form">
      <div className="form-body">
      <Row className="align-items-center">
    <Col>
    <Form.Label >First Name</Form.Label>
      <Form.Control placeholder="First name" />
    </Col>
    <Col >
    <Form.Label >Last Name</Form.Label>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
           <Row className="mb-3" >
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label >Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label >State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>
    </Row>

    <Row>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    </Row>
 
    <Row className="mb-3" >
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label >City</Form.Label>
      <Form.Control/>
    </Form.Group>

   

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
    </Row>
         
    <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="I accept the terms and conditions." />
  </Form.Group>

      
      <Button className='btn' variant="primary" type="submit" >
    Submit
  </Button>
  </div>   
  </div>
    )

}

export default Signup