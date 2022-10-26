import React from 'react';

const CourseCard = ({CourseCard}) => {

    const {title,thumbnail_url,details} = CourseCard;
    return (
        <div>
            <h5>{title}</h5>
        </div>
    );
};

export default CourseCard;