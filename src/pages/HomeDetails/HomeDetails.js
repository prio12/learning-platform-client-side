import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './HomeDetails.css'


const HomeDetails = ({homePages}) => {

    const {title, details, img} = homePages;
    console.log(title,details,img)
    return (
        <Container>
                <div className='d-flex home-details align-items-center mb-5 gap-5'>
                    <Image rounded style={{width:'50%'}} src={img}></Image>
                    <div>
                        <h3 className='fw-bolder'>{title}</h3>
                        <p>{details}</p>
                    </div>
                </div>
        </Container>
    );
};

export default HomeDetails;