import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Cart from "./Cart";

const Styles = styled.div`
  padding: 40px 0; 
  background: #fff;
  .sc-dkPtyc:hover:enabled,
  .sc-dkPtyc:focus:enabled {
    color: #fff;
    background-color: #F6B7B8;
    box-shadow: 0 0 2px 0 #333
  }

  .gbdxaY {
    box-shadow: 0 0 1px 3px #F6B7B8;
  }

  .sc-furvIG {
    background-color: #fcebed;
  }
  
`;
export const SimpleCarousel = () => (
  <Styles>
    <Container>
      <div className="carousel">
        <h4 className="title">Kiralama Seçenekleri</h4>
        <Carousel itemsToShow={3} focusOnSelect={true}>
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
        </Carousel>
      </div>
    </Container>
  </Styles>
);
