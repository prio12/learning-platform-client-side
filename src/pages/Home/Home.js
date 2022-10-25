import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import HomeDetails from '../HomeDetails/HomeDetails';


import './Home.css'

const Home = () => {

  const data = useLoaderData();
    return (
      <Container>
            <h3 className='text-center'>Welcome motherfuckers</h3>
            <div>
              {
                data.map(details => <HomeDetails
                key={details.id}
                homePages = {details}
                ></HomeDetails> )
              }
            </div>
      </Container>
        
    );
};

export default Home;