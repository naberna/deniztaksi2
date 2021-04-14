import React from "react";
import {  Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import { TravelForm } from "../components/forms/TravelForm";
import bgImage from '../assets/bg14.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${bgImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #efefef;
    height: 400px;
    padding: 0;
    position: relative;
    margin: 0;
  }

  .overlay {
    position: absolute;
    top: 60%;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
  }

  @media screen and (max-width:992px){ 
    height: 670px;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay">
        <TravelForm />
      </div>
    </Jumbo>
  </Styles>
);
