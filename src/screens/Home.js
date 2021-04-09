import React from "react";
import { Link } from "react-router-dom";
import MiddleCarts from "../components/MiddleCarts";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { About } from "./About";
import { FAQ } from "../components/FAQ";
import SimpleSlider from "../components/SimpleSlider";
import ComplexSlider from "../components/ComplexSlider";

const Styles = styled.div`
  .middle {
    background-color: #fff;
    padding: 40px 0 0 0;
  }

  .middle-links a {
    background-color: #fff;
    border: 3px solid #ff9a8d;
    color: #ff9a8d;
    font-weight: bold;
    border-radius: 8px;
    text-align: center;
    padding: 10px 0;
    display: inherit;
  }

  .middle-links a:hover,
  .middle-links a:focus,
  .middle-links a:active {
    background-color: #f0f0f0;
    text-decoration: none;
  }

  @media screen and (max-width:768px){ 
    .middle-link:nth-child(1),
    .middle-link:nth-child(2) {
      padding-bottom: 10px;
    }

    .middle-links:nth-child(1) {
      padding-top: 0;
    }
  }
`;

export const Home = () => (
  <Styles>
    <MiddleCarts />
    <div className="middle">
      <Container>
        <div className="middle-links">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 col-xl-4 middle-link">
              <Link to="/">Hakkımızda</Link>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-4 middle-link">
              <Link to="/">Duraklarımız</Link>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-4 middle-link">
              <Link to="/">Sıkça Sorulan Sorular</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <SimpleSlider/>
    <About/>
    <ComplexSlider/>
    <FAQ/>
  </Styles>
);
