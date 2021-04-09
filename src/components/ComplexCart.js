import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/rent-1.jpg";
import { Container } from "react-bootstrap";

const Styles = styled.div`
background: #fff;

.complex-slider {
  position: relative;
}

.left-middle{
  width: 580px;
  height: 420px;
  background-color: #4a536b;
  color: #fff;
  margin: 20px 0;
  padding: 30px;
  z-index: 99;
  border-radius: 20px;
  position: absolute;
  margin-left: 20px;
}

.left-middle .sub-title {
  color: #fff;
  padding-bottom: 20px;
  text-align: center;
}

.left-middle .text {
  padding-bottom: 80px;
  text-align: center;
}

.slide {
  margin: 0 41%;
  width: 800px;
  height: 460px;
  background: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
}

.button a {
  background-color: #fff;
  border: 3px solid #ff9a8d;
  color: #ff9a8d;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  padding: 10px 0;
  display: inherit;
}

.button a:hover,
.button a:focus,
.button a:active {
  background-color: #f0f0f0;
  text-decoration: none;
}

@media screen and (max-width:992px){
  .complex-slider .row {
    justify-content: center;
  }

  .complex-slider .left-middle {
    position: unset;
    width: 100%;
    margin: 0;
  }

  .complex-slider .carousel {
    padding: 0;
    width: 92%;
    height: auto;
    margin: 10px 0;
  }

  .left-middle .text {
    padding-bottom: 20%;
  }

  .slide {
    margin: 0;
    top: -40px;
    z-index: 99;
    border-radius: 0 0 20px 20px;
  }
}
`;

export default function ComplexCart() {
  return (
    <Styles>
        <Container>
        <div class="complex-slider container">
          <div class="row">
            <div class="col-lg-5 col-md-12 col-sm-12 left-middle">
              <h5 class="sub-title">Kiralama 1</h5>
              <div class="text">
                Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example. It can be used in publishing and graphic design. It is used to demonstrate the graphics elements of a document, such as font, typography, and layout.
              </div>
              <div className="button"><Link to="/">Kirala</Link></div>
            </div>
            <div class="col-lg-7 col-md-12 col-sm-12 slide">
            </div>
          </div>
        </div>
        </Container>
      </Styles>
  );
}
