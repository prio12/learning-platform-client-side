import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import HomeDetails from '../HomeDetails/HomeDetails';
import Feedback from './Feedback/Feedback';


import './Home.css'
import TrustedCompanies from './TrustedCompanies/TrustedCompanies';

const Home = () => {

  const data = useLoaderData();
    return (
      <div>
        <Container className='home'>
            <h3 className='text-center py-5 greeting-title'>Welcome To Learning Mate</h3>
            <div>
              {
                data.map(details => <HomeDetails
                key={details.id}
                homePages = {details}
                ></HomeDetails> )
              }
            </div>
           
      </Container>
      <div className='my-5 feedback-section p-5 container rounded'>
        <div>
        <Feedback></Feedback>
        </div>
      </div>
      <div>
        <div className='container  p-5 rounded'>
        <Container>
                <TrustedCompanies></TrustedCompanies>
        </Container>
        </div>
      </div>
      </div>
       
        
    );
};

export default Home;