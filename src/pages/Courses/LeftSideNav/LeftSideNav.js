import React from 'react';
import './LeftSideNav.css'

const LeftSideNav = ({category}) => {

    const {name} = category;
    return (
        <div>
            <p className='text-primary mt-3 fw-bold'>{name}</p>
        </div>
    );
};

export default LeftSideNav;