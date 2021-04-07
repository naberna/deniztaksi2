import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import logo from '../assets/logo.png';
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
    padding-top: 10px;
  }

  .dropdown .icon {
    font-size: 30px;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar class="shadow-sm p-3 mb-5 bg-white rounded" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="Logo" /></Navbar.Brand>
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
                <Link to="/">Duraklar</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="text">
              <Nav.Link>
                <Link to="/contact">İletişim</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Dropdown class="navbar-dropdown">
                  <Dropdown.Toggle id="dropdown-basic">
                    <CgProfile className="icon"/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Styles>
);
