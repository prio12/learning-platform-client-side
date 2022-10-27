import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Company1 from "../../../assest/companies/complany1.png";
import Company2 from "../../../assest/companies/company2.jpg";
import { Container } from "react-bootstrap";
import './TrustedCompanies.css'

const TrustedCompanies = () => {
  return (
    <Container>
      <div className="carousel-container">
        <div className="carousel-text">
        <h4 className="fw-bolder">Trusted by the best</h4>
        <p>
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </p>
        </div>
        <div className="d-flex justify-content-center">
        <Carousel className="companies-carousel">
          <Carousel.Item>
            <img className="d-block carousel-img w-100" src={Company1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-img w-100" src={Company2} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default TrustedCompanies;
