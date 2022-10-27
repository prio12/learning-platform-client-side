import React from 'react';
import Pdf from "react-to-pdf";
import { Button } from 'react-bootstrap';
import { HiBookmark } from "react-icons/hi";
import './PdfDownload.css'

const ref = React.createRef();

const PdfDownload = ({pdfDetails}) => {
    return (
        <div>
            <div ref={ref}>
                <div className='text-center'>
                <h4 className='course-includes-title'>This course includes:</h4>
                <div className='text-center course-includes'>
                <div className='d-flex justify-content-center'>
                <span className='course-includes'><HiBookmark/>2.5 hours on-demand video</span><br />
                <span className='course-includes'><HiBookmark/>Access on mobile and TV</span><br />
                </div>
                <div className='d-flex justify-content-center'>
                <span className='course-includes'><HiBookmark/>1 downloadable resource</span><br />
                <span className='course-includes'><HiBookmark/>Certificate of completion</span>
                </div>
                <span className='course-includes'><HiBookmark/>Full lifetime access</span><br />
                </div>
                </div>
      </div>
            <div className='text-center mt-3'>
            <Pdf  targetRef={ref} filename="./Instruction.pdf">
        {({ toPdf }) => <Button variant="outline-light" onClick={toPdf}>Download Pdf</Button>}
      </Pdf>
            </div>
      
        </div>
    );
};

export default PdfDownload;