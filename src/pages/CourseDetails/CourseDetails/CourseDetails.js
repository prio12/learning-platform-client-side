import React from 'react';
import {Button, Container, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import PdfDownload from '../PDF/PdfDownload';
import './CourseDetails.css'


const CourseDetails = () => {

    const cardDetails = useLoaderData();
    const {name,rating,total_downloaded,title,thumbnail_url,details,price} = cardDetails;
    return (
        <div className='details-section p-5 container rounded'>
            <Container>
                <div className='mb-5'>
                <h1 className='text-center fw-bolder'>{name}</h1>
                <div>
                <p className='text-center'><small>Before you enroll here're some information about this course.</small></p>
                {/* <p className='text-center fw-bold'><small>Download PDF</small></p> */}
                <div>
                <PdfDownload pdfDetails={cardDetails}></PdfDownload>
                </div>
                </div>
                </div>
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
                        <Link to='/premium'><Button  variant="outline-danger"><span className='fw-bold'>Get premium access</span></Button></Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CourseDetails;