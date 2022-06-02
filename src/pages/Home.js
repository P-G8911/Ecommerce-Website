import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../index.css";
import NavBar from "../components/NavBar";

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar />

        <Carousel style={{ height: "600px", overflow: "hidden" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/carousel5.png"
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/carousel6.png"
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

        <section className="white-section" id="features">
          <div className="container-fluid">
            <div className="row">
              <div className="feature-box col-lg-4">
                <i className="icon fa fa-solid fa-user-shield fa-5x"></i>
                <h3 className="feature-title">User Protection</h3>
              </div>

              <div className="feature-box col-lg-4">
                <i className="icon fa fa-solid fa-truck fa-5x"></i>
                <h3 className="feature-title">Fast Delivery</h3>
              </div>

              <div className="feature-box col-lg-4">
                <i className="icon fa fa-solid fa-exchange-alt fa-5x"></i>
                <h3 className="feature-title">Easy Returns</h3>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
