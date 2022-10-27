import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='w-full d-flex align-items-center justify-content-between footer p-5'>
            <div>
                <h4>Services</h4>
                <p>Design</p>
                <p>Marketing</p>
                <p>Advertisement</p>
            </div>
            <div>
                <h4>Legal</h4>
                <p>Terms of use</p>
                <p>Privacy policy</p>
                <p>Cookie policy</p>
            </div>
            <div>
                <h4>Company</h4>
                <p>About us</p>
                <p>Contact</p>
                <p>Jobs</p>
            </div>
        </div>
    );
};

export default Footer;