import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Cart from "./Cart";

const Styles = styled.div`
  padding: 40px 0; 
  background: #fff;
  
  
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
