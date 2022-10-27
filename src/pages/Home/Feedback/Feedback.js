import React from 'react';
import './Feedback.css'

const Feedback = () => {
    return (
        <div className='d-flex w-full feedback-details-container container justify-content-between p-4'>
            <div>
                <div className='d-flex justify-content-center align-items-center feedback-details ' >
                <h4 className='fw-bold'>1M</h4>
                </div>
                <h3 className='text-center fw-bolder'>Users</h3>
            </div>
            <div>
                <div className='d-flex justify-content-center align-items-center feedback-details ' >
                <h4 className='fw-bold'>4.8</h4>
                </div>
                <h3 className='text-center fw-bolder'>Ratings</h3>
            </div>
            <div>
                <div className='d-flex justify-content-center align-items-center feedback-details ' > 
                <h4 className='fw-bold'> 50K+</h4>
                </div>
                <h3 className='text-center fw-bolder'>Review</h3>
            </div>
        </div>
    );
};

export default Feedback;