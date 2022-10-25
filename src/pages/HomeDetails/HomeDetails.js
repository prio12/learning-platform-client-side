import React from 'react';
import { Container, Image } from 'react-bootstrap';


const HomeDetails = ({homePages}) => {

    const {title, details, img} = homePages;
    console.log(title,details,img)
    return (
        <Container>
                <div className='d-flex align-items-center gap-5 mb-5'>
                    <Image rounded style={{width:'50%'}} src={img}></Image>
                    <div>
                        <h3>{title}</h3>
                        <p>{details}</p>
                    </div>
                </div>
        </Container>
    );
};

export default HomeDetails;