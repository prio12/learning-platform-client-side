import React, { useState } from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import './SignUp.css'

const SignUp = () => {

    const navigate = useNavigate()
    const {createUser} =useContext(AuthContext)
    const [error,setError] = useState('')


    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        // form.reset()
        console.log(name,email,password)

        createUser(email,password)
        .then(result =>{
            navigate('/')
            
        })
        .catch(err => {
            const errorMessage = err.message;
            setError(errorMessage)
        })


    }
    return (
        <div className='form-holder container rounded p-5 mt-5'>
            <h3 className='text-center fw-bold mb-5'>Sign Up</h3>
            <div>
            <Container className='form-container p-5'>
            <Form  onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label ><span className='fw-bold'>Full name</span></Form.Label>
        <Form.Control name='name'  type="text" placeholder="Name" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUrl">
        <Form.Label ><span className='fw-bold'>Photo Url</span></Form.Label>
        <Form.Control name='name'  type="text" placeholder="Photo Url" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><span className='fw-bold'>Email</span></Form.Label>
        <Form.Control name='email'  type="email" placeholder="Enter email" required />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
        <span className='fw-bold'>Password</span>
            </Form.Label>
        <Form.Control name='password'  type="password" placeholder="Password" required />
      </Form.Group>
        <Button variant="outline-danger" type="submit">
            Sign up
        </Button>
        <Form.Text className="text-danger">
          <p>{error}</p>
        </Form.Text>
        <p className='mt-2 fw-bold'>Already have an account? <Link to='/signIn'>Sign in</Link></p>
      
    </Form>
            </Container>
            </div>
        </div>
    );
};

export default SignUp;