import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";

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

  .navbar-nav .text {
    padding-top: 23px;
  }

  .dropdown {
    font-size: 40px;
  }

  .dropdown-toggle::after {
    font-size: 20px;
  }

  .dropdown-menu.show {
    display: grid;
    padding: 10px;
  }

  .dropdown a:focus {
    background-color: #f0f0f0;
  }
`;

export const NavigationBar = () => {
  const navDropdownTitle = (<CgProfile/>);
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <Styles>
      <Navbar class="shadow-sm p-3 mb-5 bg-white rounded" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
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
              <NavDropdown
                id="collasible-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                title={navDropdownTitle}
                alignRight 
              >
                <NavDropdown.Item href="/signin">
                Giriş Yap
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/register">
                Kayıt Ol
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
};
