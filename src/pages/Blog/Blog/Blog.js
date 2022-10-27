import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogs-container container'>
            <h2 className='text-center fw-bolder pt-5' >Blog</h2>
            <Container>
                <div className='blog-details p-5 mt-5'>
                <h4 className='fw-bold'>what is cors?</h4>
                <p> CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>
                </div>
                <div className='blog-details p-5 mt-5'>
                    <h4 className='fw-bold'>Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>Firebase helps to develop high-quality apps, grow  user base, and earn more money. Each feature works independently, and they work even better together.</p><br />
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </div>
                <div className='blog-details p-5 mt-5'>
                    <h4 className='fw-bold'>How does the private route work?</h4>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
                <div className='blog-details p-5 mt-5'>
                    <h4 className='fw-bold'> What is Node? How does Node work?</h4>
                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </Container>
        </div>
    );
};

export default Blog;