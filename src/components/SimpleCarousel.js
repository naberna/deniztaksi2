import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Cart from "./Cart";

const Styles = styled.div`
  padding: 40px 0; 
  background: #fff;
  
  .rec-arrow-right:hover:enabled,
  .rec-arrow-left:hover:enabled,
  .rec-arrow-right:focus:enabled,
  .rec-arrow-left:focus:enabled {
    background-color: #f6b7b8;
  }

  .rec-dot_active {
    background-color: rgba(246,183,184,.5);
    box-shadow: 0 0 1px 3px rgb(246,183,184);
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
