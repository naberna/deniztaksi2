import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiPhoneCall, FiMail, FiMap } from "react-icons/fi";

const Styles = styled.div`
  background-color: #4a536b;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
  }

  .footer-content {
    padding: 20px 0;
    color: #fff;
  }

  .top {
    padding-bottom: 20px;
  }

  .footer-copyright {
    background: #000;
    color: #fff;
    padding: 20px 0;
  }

  .sub-title {
    color: #fff;
  }

  span {
    padding: 0 5px;
  }

  svg {
    height: 40px;
    width: 40px;
  }

  img {
    width: 130px;
    height: 80px;
  }
`;

const FooterPage = () => {
  return (
    <Styles>
      <div className="footer-content">
        <Container>
          <div className="row top">
            <div className="col-12 col-md-3 col-lg-3 col-xl-3">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-12 col-md-3 col-lg-3 col-xl-3 mt-4">
              <div className="row">
                <div className="col-3">
                  <FiPhoneCall />
                </div>
                <div className="col-9">
                  <div className="mark1">Telefon Numarası</div>
                  <div className="info">0850 000 00 00</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 col-xl-3 mt-4">
              <div className="row">
                <div className="col-3">
                  <FiMail />
                </div>
                <div className="col-9">
                  <div className="mark2">E-mail</div>
                  <div className="info">example@deniztaksi.com</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 col-xl-3 mt-4">
              <div className="row">
                <div className="col-3">
                  <FiMap />
                </div>
                <div className="col-9">
                  <div className="mark3">Adres</div>
                  <div className="info">Example Address</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 col-xl-4">
              <h5 className="sub-title">Deniz Taksi</h5>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-4 text-center">
              <h5 className="sub-title">Sub-Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-xl-4 text-right">
              <h5 className="sub-title">Sub-Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="footer-copyright py-3">
        <Container>
          <div className="row">
            <div class="col-6">
              &copy; {new Date().getFullYear()} Copyright{" "}
              <Link href="deniztaksi.com"> deniztaksi.com </Link>
            </div>
            <div class="col-6 text-right">
              <Link href="/">SSS</Link>
              <span>|</span>
              <Link href="/">Güvenlik Sözleşmesi</Link>
            </div>
          </div>
        </Container>
      </div>
    </Styles>
  );
};

export default FooterPage;
