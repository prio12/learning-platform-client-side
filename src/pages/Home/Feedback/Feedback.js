import React from 'react';
import './Feedback.css'

const Feedback = () => {
    return (
        <div className='d-flex w-full feedback-container container justify-content-between  p-4'>
            <div>
                <h4 className='feedback text-center'>1M</h4>
                <h3>Users</h3>
            </div>
            <div className='w-100%'>
                <h4 className='feedback text-center'>4.8</h4>
                <h3>Ratings</h3>
            </div>
            <div>
                <h4 className='feedback text-center'>50K+</h4>
                <h3>Review</h3>
            </div>
        </div>
    );
};

export default Feedback;