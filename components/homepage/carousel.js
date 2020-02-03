import React from "react";
import Carousel from 'react-bootstrap/Carousel'

export function Carousell() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/6AsW8hZ.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome</h3>
          <p>To the guide of essential skincare tips for every skin type.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/dJETvn1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Discover Your Routine</h3>
          <p>Beautiful skin begins with exceptial skin care.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/b0/9b/22/b09b22c3ca43a02c028ddae4255e4dc0.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Know Your Skin Type</h3>
          <p>Learn more about determining yours</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
