import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../index.css";
import NavBar from "../components/NavBar";
// import CategoryCard from "../components/CategoryCard";
// import { Container } from "react-bootstrap";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <NavBar />

        {/* Carousel Section */}
        <Carousel style={{ height: "600px", overflow: "hidden" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/assets/My Post.png"
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


        <section
          className="white-section"
          id="features"
          style={{ marginTop: "30px" }}
        >
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

        <img id="diya" src="/assets/diyas.jpg" />
        <footer className="white-section" id="footer">
          <div className="container-fluid">
            <i className="footer-icons fa-brands fa-facebook"></i>
            <i className="footer-icons fa-brands fa-twitter"></i>
            <i className="footer-icons fa-brands fa-instagram"></i>
            <i className="footer-icons fa-solid fa-envelope"></i>
            <p id="toll">Toll-Free No 1800 XXXXXX</p>
            <p>© Copyright Ordering Simplified</p>
          </div>
        </footer>
      </>
    );
  }
}

