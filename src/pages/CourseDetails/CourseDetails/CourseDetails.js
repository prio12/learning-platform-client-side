import React from 'react';
import {Button, Container, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {

    const cardDetails = useLoaderData();
    const {name,rating,total_downloaded,title,thumbnail_url,details,price} = cardDetails;
    return (
        <div className='details-section p-5 container rounded'>
            <Container>
                <h1 className='text-center fw-bolder mb-5'>{name}</h1>
                <div className='d-flex course-details-container rounded justify-content-center align-items-center'>
                    <Image rounded style={{width:'50%'}} src={thumbnail_url}></Image>
                    <div className='ms-4 course-details-holder'>
                        <h4 className='fw-bold'>{title}</h4>
                        <p>{details}</p>
                        <div className='d-flex justify-content-between me-3 fw-bold '>
                            <p>Rating : {rating.number}</p>
                            <p>Total Enrolled: {total_downloaded}K</p>
                            <p>Price: {price}$</p>
                        </div>
                        <Button variant="outline-danger"><span className='fw-bold'>Get premium access</span></Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CourseDetails;