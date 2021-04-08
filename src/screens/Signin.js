import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Styles = styled.div`
  padding: 20px 0 40px 0;

  .signin {
    justify-content: center;
  }

  form {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 30px;
    background-color: #fff;
  }

  input[type="text"],
  input[type="password"] {
    margin-bottom: 10px;
  }

  span {
    margin-bottom: 5px;
  }

  .social {
    text-align: center;
    margin-top: 10px;
    width: 50px;
    height: 50px;
  }

  .social svg {
    font-size: 50px;
    margin: 0 5px;
    border-radius: 4px;
    padding: 10px 5px;
  }

  .social .gmail svg {
    background: #dd4b39;
    color: #fff;
  }

  .social .youtube svg {
    background: #bb0000;
    color: #fff;
  }

  .social .facebook svg {
    background: #3b5998;
    color: #fff;
  }

  .social .instagram svg {
    background: #f09433;
    background: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    color: #fff;
  }

  a {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
  }

  a:hover,
  a:focus,
  a:active {
    transform: scale(1.1);
  }
`;
export const Signin = () => (
  <Styles>
    <Container>
      <div className="row signin">
        <div className="col-12 col-md-7 col-lg-7 col-xl-7">
          <form>
            <h4 className="title">GİRİŞ YAP</h4>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eposta"
                  required
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Şifre"
                />
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-6">
                    <button type="button" className="btn button-second register">
                      GİRİŞ YAP
                    </button>
                    <span className="info">Şifremi Unuttum?</span>
                  </div>
                </div>
              </div>
              <div className="col-12 social">
                <Link href="/" className="facebook">
                  <AiOutlineFacebook />
                </Link>
                <Link href="/" className="youtube">
                  <AiOutlineYoutube />
                </Link>
                <Link href="/" className="instagram">
                  <AiOutlineInstagram />
                </Link>
                <Link href="/" className="gmail">
                  <SiGmail />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  </Styles>
);