import React from 'react';
import { Link } from 'gatsby-plugin-i18next';
import { Navbar, Nav } from 'react-bootstrap';
import Switcher from './switcher';

const Header = ({ siteTitle, listOfArch, about }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Link to="/" className="navbar-brand">
      {siteTitle}
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/directors-list/" className="nav-link">{listOfArch}</Link>
        <Link to="/about/" className="nav-link">{about}</Link>
      </Nav>
    </Navbar.Collapse>
    <Switcher />
  </Navbar>
);

export default Header;
