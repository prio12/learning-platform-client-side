import React from 'react';

const LeftSideNav = ({category}) => {

    const {name} = category;
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default LeftSideNav;