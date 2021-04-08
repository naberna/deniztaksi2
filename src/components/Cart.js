import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/rent-1.jpg";

const Styles = styled.div`
  .cart {
    margin: 0 20px 30px 20px;
    border-radius: 8px;
    background-color: #f0f0f0;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  .content {
    padding: 20px;
  }

  .cart a {
    color: #4a536b;
    text-decotation: none;
    margin: 10px 0;
  }

  .cart a:hover {
    text-decoration: none;
    color: #aed6dc;
  }

  .cart a img {
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0;
  }

  button {
    margin-top: 10px;
  }
`;

export default function Cart() {
  return (
    <Styles>
      <div className="cart">
        <div className="row">
          <div className="col-12 image">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="content">
            <h5 className="col-12 sub-title">
              <Link to="/">Kiralama Paketi 1</Link>
            </h5>
            <div className="col-12 text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </div>
            <div className="col-6 mt-auto">
              <button type="submit" className="btn button-second">
                Kirala
              </button>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
}
