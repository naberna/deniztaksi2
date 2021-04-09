import React from "react";
import { Container, Jumbotron as Jumbo } from "react-bootstrap";
import styled from "styled-components";
import { TravelForm } from "../components/forms/TravelForm";

const Styles = styled.div`
  .jumbo {
    background-size: cover;
    color: #efefef;
    height: 400px;
    padding: 0;
    position: relative;
    margin: 0;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
  }

  .top-part {
    background-color: #ffe2f2;
    height: 275px;
  }

  .bottom-part {
    background-color: #235ace;
    height: 125px;
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
        <div className="top-part"></div>
          <div className="bottom-part">
            <Container>
            <div className="boat">
              <div className="wrap">
                <div className="main">
                  <div className="boat-top-layer">
                    <div className="top">
                      <div className="pole"></div>
                      <div className="help">
                        <span></span>
                      </div>
                    </div>
                    <div className="bottom"></div>
                  </div>
                  <div className="boat-mid-layer">
                    <div className="top"></div>
                    <div className="bottom"></div>
                  </div>
                  <div className="boat-bot-layer">
                    <div className="top"></div>
                    <div className="bottom"></div>
                  </div>
                </div>
              </div>
              <div className="water">
                <div className="drops clearfix drops-1">
                  <span className="drop drop-a"></span>
                  <span className="drop drop-b"></span>
                  <span className="drop drop-c"></span>
                  <span className="drop drop-d"></span>
                  <span className="drop drop-e"></span>
                  <span className="drop drop-f"></span>
                  <span className="drop drop-g"></span>
                  <span className="drop drop-h"></span>
                </div>
                <div className="drops clearfix drops-2">
                  <span className="drop drop-a"></span>
                  <span className="drop drop-b"></span>
                  <span className="drop drop-c"></span>
                  <span className="drop drop-d"></span>
                  <span className="drop drop-e"></span>
                  <span className="drop drop-f"></span>
                  <span className="drop drop-g"></span>
                  <span className="drop drop-h"></span>
                </div>
              </div>
            </div>
            </Container>
          </div>
      </div>
    </Jumbo>
  </Styles>
);
