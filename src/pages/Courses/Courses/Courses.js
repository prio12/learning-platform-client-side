import React, {} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import './Courses.css'

const Courses = () => {

    const courses = useLoaderData();
    // console.log(courses)
    return (
         <div>
             <Container>
                <Row>
                    <Col lg='2' className='left-nav'>
                        <h5 className='mt-5 fw-bolder'>Courses</h5>
                        {
                            courses.map(course => <LeftSideNav
                            key={course.category_id}
                            category ={course}
                            ></LeftSideNav> )
                        }
                    </Col>
                    <Col lg = '10' className='p-3 courses-container'>
                        <h3 className='text-center mt-4 fw-bolder'>Courses On Demand</h3>
                        {
                            courses.map(course => <CourseCard
                            key={course._id}
                            CourseCard = {course}

                            ></CourseCard>)
                        }
                    </Col>
                </Row>
             </Container>
        </div>
    );
};

export default Courses;