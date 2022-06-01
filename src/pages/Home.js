import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../index.css";
import NavBar from "../components/NavBar";

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar />

            <Carousel style={{height: '600px', overflow: 'hidden'}}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src = '/assets/carousel5.png'
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src = '/assets/carousel6.png'
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/assets/post2.png"
                  alt="Third slide"
                />
              </Carousel.Item>

            </Carousel>
      </>
    );
  }
}
