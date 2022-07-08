import React,{useState} from 'react'
import '../App.css'
import { Form } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './Signin.css'

const Signin = () =>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
    
        return(
            <div className="Login">
                
            <Form onSubmit={handleSubmit}>
            <h1>Login</h1>
              <Form.Group className='email' size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  autoFocus
                  type="email"
                  value={email}
                  placeholder = "someone@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='email' size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  placeholder = "min 8 characters"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 cbox" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
             </Form.Group>

             <button disabled = {!validateForm()}>
                     Login
                </button>

            <div className='acc'>
            Not registerd yet?
            <a href="/signup">Create an account</a>
            </div>
            </Form>
          </div>
        )
    
}
export default Signin