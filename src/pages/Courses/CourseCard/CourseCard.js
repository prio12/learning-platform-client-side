import React from "react";
import {Image} from "react-bootstrap";
import './CourseCard.css'

const CourseCard = ({ CourseCard }) => {
  const { title, thumbnail_url, details } = CourseCard;
  return (
    <div className="d-flex course-cards justify-content-center align-items-center my-5 cards ">
      <Image  rounded style={{width:'40%'}} src={thumbnail_url}></Image>
      <div className="ms-3">
        <h5>{title}</h5>
        <p>{details.slice(0,200) + '...'}</p>
      </div>
    </div>
  );
};

export default CourseCard;
