// import React from 'react';
import React from "react";
import { Carousel } from "react-bootstrap";


import "./Slider.css";

function Slider() {
  return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 img_control"
      src="https://image.shutterstock.com/image-photo/food-background-banner-website-selection-260nw-1753925045.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Dhamaka shopinng</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img_control"
      src="http://sme.net.in/img/banner-grains.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="">Friday shopinng</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block img_control"
      src="https://img.freepik.com/free-vector/healthy-food-menu-promotion-social-media-facebook-cover-banner-template_225928-81.jpg?size=626&ext=jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
}

export default Slider;
