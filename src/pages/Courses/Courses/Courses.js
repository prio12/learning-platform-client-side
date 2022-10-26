import React, {} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {

    const courses = useLoaderData();
    console.log(courses)
    return (
         <div>
             <Container>
                <Row>
                    <Col className='bg-info' lg='2'>
                        <h4>Total Courses : {courses.length}</h4>
                        {
                            courses.map(course => <LeftSideNav
                            key={course.category_id}
                            category ={course}
                            ></LeftSideNav> )
                        }
                    </Col>
                    <Col className='bg-primary' lg = '10'>
                        <h3>right side</h3>
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