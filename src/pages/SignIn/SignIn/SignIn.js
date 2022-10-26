import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import './SignIn.css'

const SignIn = () => {

    const {logIn} = useContext(AuthContext);

    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        console.log(email,password)

        logIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })

    }
    return (
        <div className='form-holder login-form-container container rounded p-5'>
            <h3 className='text-center fw-bold mb-5'>Login</h3>
            <div>
            <Container className='form-container p-5 '>
            <Form  onSubmit={handleSignIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><span className='fw-bold'>Email</span></Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
        <span className='fw-bold'>Password</span>
            </Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
        <Button variant="outline-danger" type="submit">
            Log in
        </Button>
        <p className='mt-2 fw-bold'>New here? <Link to='/signup'>Create a new account</Link></p>
      <Form.Text className="text-danger">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
    </Form>
            </Container>
            </div>
        </div>
    );
};

export default SignIn;