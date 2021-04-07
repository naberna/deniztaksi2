import React from "react";
import { Link } from "react-router-dom";
import MiddleCarts from "../components/MiddleCarts";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { About } from "./About";
import FAQ from "../components/FAQ";

const Styles = styled.div`
  .middle {
    background-color: #fff;
    padding: 40px 0;
  }

  .middle-links a {
    background-color: #fff;
    border: 1px solid #ff9a8d;
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
`;

export const Home = () => (
  <Styles>
    <MiddleCarts />
    <div className="middle">
      <Container>
        <div className="middle-links">
          <div className="row">
            <div className="col-4">
              <Link to="/">Hakkımızda</Link>
            </div>
            <div className="col-4 middle-links">
              <Link to="/">Sıkça Sorulan Sorular</Link>
            </div>
            <div className="col-4 middle-links">
              <Link to="/">Duraklar</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <About/>
    <FAQ/>
  </Styles>
);
