import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { signout } from '../actions/userActions';

const Styles = styled.div`
  .navbar {
    background-color: #fff;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    font-weight: bold;
    color: #4a536b;

    &:hover {
      color: #ff9a8d;
      text-decoration: none;
    }
  }

  img {
    height: 65px;
  }

  .nav-link {
    padding: 0;
  }

  .navbar-nav,
  .navbar-nav a {
    align-items: center;
  }

  .btn{
    color: #fff;
    padding-top: 11px;
  }

  .btn:hover{
    color: #fff;
  }

  .dropdown {
    display: inline-block;
    position: relative;
  }

  .dropdown-content {
    position: absolute;
    display: none;
    right: 0;
    min-width: 12rem;
    padding: 1rem;
    z-index: 1;
    background-color: black;
    margin: 0;
    margin-top: 0.4rem;
    border-radius: 0.5rem;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
`;

export default function NavigationBar() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <Styles>
      <Navbar className="shadow-sm bg-white rounded" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/"><img src={logo} alt="Logo" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item className="text">
                <Nav.Link>
                  <Link to="/">Anasayfa</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text">
                <Nav.Link>
                  <Link to="/about">Hakkımızda</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text">
                <Nav.Link>
                  <Link to="/signin">Duraklar</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text">
                <Nav.Link>
                  <Link to="/contact">İletişim</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text">
                <Nav.Link>
                  {
                    userInfo ? (
                      <div className="dropdown">
                      <Link to="#">{userInfo.ad} <i className="fa fa-caret-down"></i></Link>
                      <ul className="dropdown-content">
                        <Link to="#signout" onClick={signoutHandler}>ÇIKIŞ YAP</Link>
                      </ul>
                      </div>) :
                    (
                    <Link to="/signin" className="btn button-primary">
                      Giriş Yap
                    </Link>
                    )
                  }
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="text">
                <Nav.Link>
                  <Link to="/register" className="btn button-second">
                    Kayıt Ol
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
}
