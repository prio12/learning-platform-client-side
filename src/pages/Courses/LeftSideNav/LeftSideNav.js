import React from 'react';
import { Link } from 'react-router-dom';
import './LeftSideNav.css'

const LeftSideNav = ({category}) => {

    const {name,_id} = category;
    return (
        <div>
            <p className='text-primary mt-3 fw-bold'><Link to={`/courses/${_id}`}>{name}</Link></p>
        </div>
    );
};

export default LeftSideNav;