import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import YoutubeEmbed from "../YoutubeEmbeded/YoutubeEmbeded/YoutubeEmbeded";

const PremiumSection = () => {

    const {user} = useContext(AuthContext)
    return (
        <div className=' container rounded'>
            <h2 className='text-center fw-bold mb-5'>Welcome To The Premium Section</h2>
            <Container>
                <Row>
                    <Col lg='2' className='left-nav'>
                        <h5 className='mt-5 fw-bolder'>User Information</h5>
                    </Col>
                    <Col lg = '10' className='p-3 courses-container'>
                        <h3 className='text-center mt-4 fw-bolder'>Video</h3>
                        <YoutubeEmbed embedId="rokGy0huYEA" />
                    </Col>
                </Row>
             </Container>
        </div>
    );
};

export default PremiumSection;