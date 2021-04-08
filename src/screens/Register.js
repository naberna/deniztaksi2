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

  .register {
    justify-content: center;
  }

  form {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 30px;
    background-color: #fff;
  }

  input[type="text"],
  input[type="password"],
  input[type="checkbox"] {
    margin-bottom: 10px;
  }

  input[type="checkbox"] {
    margin-right: 5px;
  }

  .check-box {
    margin: 0;
    display: flex;
  }

  .link {
    font-weight: bold;
    color: #000;
  }

  .link:hover {
    color: #ff9a8d;
    text-decoration: none;
  }

  span {
    display: flex;
    justify-content: flex-end;
    padding-right: 22px;
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
export const Register = () => (
  <Styles>
    <Container>
      <div className="row register">
        <div className="col-12 col-md-7 col-lg-7 col-xl-7">
          <form>
            <h4 className="title">ÜYE OL</h4>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Adınız Soyadınız *"
                  required
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="TC Kimlik No *"
                  required
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Eposta Adresiniz *"
                  required
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Adres Bilgisi"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Şifre *"
                  required
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Şifre Tekrar *"
                  required
                />
              </div>
              <div className="col-12 check-box">
                <input
                  type="checkbox"
                  className="form-control"
                  id="clarification"
                  name="clarification"
                  value="clarification"
                />
                <span for="clarification">
                  <Link to="/" className="link">
                    Aydınlatma Metni
                  </Link>{" "}
                  Kabul Ediyorum.
                </span>
              </div>
              <div className="col-12 check-box">
                <input
                  type="checkbox"
                  className="form-control"
                  id="kvkk"
                  name="kvkk"
                  value="kvkk"
                />
                <span for="kvkk">
                  <Link to="/" className="link">
                    KVKK
                  </Link>{" "}
                  kapsamında bilgilerimin kullanılmasını onaylıyorum. *
                </span>
              </div>
              <div className="col-12">
                <span className="info">Daha önceden hesap oluşturduysanız</span>
                <div className="row">
                  <div className="col-6">
                    <button type="button" className="btn button-primary register">
                      ÜYE OL
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn button-second register">
                      GİRİŞ YAP
                    </button>
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
