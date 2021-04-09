import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Cart from "./Cart";

const Styles = styled.div`
  background: #fff;
  padding-bottom: 40px;
  .rec-arrow-right:hover:enabled,
  .rec-arrow-left:hover:enabled,
  .rec-arrow-right:focus:enabled,
  .rec-arrow-left:focus:enabled {
    background-color: #f6b7b8;
  }

  .slick-prev::before,
  .slick-next::before {
    color: #4a536b;
    font-size: 24px;
  }

  @media screen and (max-width:576px){ 
    .slick-prev {
      left: -10px;
    }

    .slick-next {
      right: -5px;
    }
  }
`;

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      rows: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            rows: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1
          },
        },
      ],
    };
    return (
      <Styles>
        <Container>
          <div className="carousel">
            <Slider  {...settings}>
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
              <Cart />
            </Slider >
          </div>
        </Container>
      </Styles>
    );
  }
}
