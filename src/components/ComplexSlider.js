import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import ComplexCart from "./ComplexCart";

const Styles = styled.div`
  background: #fff;

  .rec-arrow-right:hover:enabled,
  .rec-arrow-left:hover:enabled,
  .rec-arrow-right:focus:enabled,
  .rec-arrow-left:focus:enabled {
    background-color: #f6b7b8;
  }

  .slick-prev::before,
  .slick-next::before {
    color: #4a536b;
    font-size: 48px;
  }

  .slick-prev {
    left: -45px;
  }

  @media screen and (max-width:992px){ 
    .slick-prev {
      left: -18px;
      z-index: 99;
      top: 40%;
    }
    .slick-next {
      right: -1px;
      top: 40%;
    }

    .slick-prev::before,
    .slick-next::before {
    font-size: 36px;
  }
  }
`;

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Styles>
        <Container>
          <div className="carousel">
            <Slider  {...settings}>
              <ComplexCart />
              <ComplexCart />
              <ComplexCart />
              <ComplexCart />
              <ComplexCart />
              <ComplexCart />
              <ComplexCart />
              <ComplexCart />
              <ComplexCart />
              <ComplexCart />
              <ComplexCart />
            </Slider >
          </div>
        </Container>
      </Styles>
    );
  }
}
