import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css'

const Faq = () => {
    return (
        <div>
            <h1 className='text-center fw-bolder mb-5'>FAQ</h1>
            <Container className='accordion-holder'>
            <Accordion className='accordion-container' defaultActiveKey="0">
      <Accordion.Item  eventKey="0">
        <Accordion.Header ><span className='fw-bold'>When will I have access to the lectures and assignments?</span></Accordion.Header>
        <Accordion.Body>
        Access to lectures and assignments depends on your type of enrollment. If you take a course in audit mode, you will be able to see most course materials for free. To access graded assignments and to earn a Certificate, you will need to purchase the Certificate experience, during or after your audit
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item  eventKey="1">
        <Accordion.Header><span className='fw-bold'>What will I get if I subscribe to this Specialization?</span></Accordion.Header>
        <Accordion.Body>
        When you enroll in the course, you get access to all of the courses in the Specialization, and you earn a certificate when you complete the work. Your electronic Certificate will be added to your Accomplishments page - from there, you can print your Certificate or add it to your LinkedIn profile.  If you only want to read and view the course content, you can audit the course for free.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item  eventKey="2">
        <Accordion.Header><span className='fw-bold'>Is financial aid available?</span></Accordion.Header>
        <Accordion.Body>
        Yes. In select learning programs, you can apply for financial aid or a scholarship if you can’t afford the enrollment fee. If fin aid or scholarship is available for your learning program selection, you’ll find a link to apply on the description page.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </Container>
        </div>
    );
};

export default Faq;