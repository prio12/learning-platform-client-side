import React, { useContext } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import YoutubeEmbed from "../YoutubeEmbeded/YoutubeEmbeded/YoutubeEmbeded";
import { FaUser } from "react-icons/fa";
import './PremiumSection.css'


const PremiumSection = () => {

    const {user} = useContext(AuthContext)
    return (
        <div className=' container rounded'>
            <h2 className='text-center fw-bold premium-title'>The Premium Section</h2>
            <div>
            <Container className='mt-5'>
                <Row>
                    <Col lg='3' className='left-nav'>
                        <h5 className='mt-5 fw-bolder mb-5'>User Information</h5>
                        <div>
                            <div>
                            {user?.photoURL ? (
                <div>
                  <Image
                      roundedCircle
                      className='ps-3'
                      style={{ height: "100%", }}
                      src={user?.photoURL}
                    ></Image>
                </div>
              ) : (
                <div>
                  <h1><FaUser></FaUser></h1>
                </div>
              )}
                            </div>
                            <div>
                                {user?.displayName? <p>
                                   <small className='fw-bold'>Name: {user.displayName}</small>
                                    </p>
                                :
                                <div><p><small className='fw-bold'>No User Name Found</small></p></div>
                                }
                            </div>
                            <div>
                                {
                                    user?.email? 
                                    <p><small><span className='fw-bold'>Email:</span> {user.email}</small></p>
                                    :
                                    <p><small>No Email Found</small></p>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col lg = '9' className='p-5 courses-container'>
                        <h3 className='text-center my-5 fw-bolder'>The Orientation</h3>
                        <div className='v-container'>
                        <YoutubeEmbed embedId="rokGy0huYEA" />
                        </div>
                    </Col>
                </Row>
             </Container>
            </div>
        </div>
    );
};

export default PremiumSection;