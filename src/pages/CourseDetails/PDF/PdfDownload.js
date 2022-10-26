import React from 'react';
import Pdf from "react-to-pdf";
import { Button } from 'react-bootstrap';
import { HiBookmark } from "react-icons/hi";

const ref = React.createRef();

const PdfDownload = ({pdfDetails}) => {
    return (
        <div>
            <div ref={ref}>
                <div className='text-center'>
                <h4>This course includes:</h4>
                <div className='text-center'>
                <div className='d-flex justify-content-center'>
                <span><HiBookmark/>2.5 hours on-demand video</span><br />
                <span><HiBookmark/>Access on mobile and TV</span><br />
                </div>
                <div className='d-flex justify-content-center'>
                <span><HiBookmark/>1 downloadable resource</span><br />
                <span><HiBookmark/>Certificate of completion</span>
                </div>
                <span><HiBookmark/>Full lifetime access</span><br />
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