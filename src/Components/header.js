import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from './icon.png';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
function header() {
  return (
    <header>
      <div class="header-limiter">
        <Navbar class="navbar">
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={Logo}
              className="d-inline-block align-top"
              width="70"
              height="70"
            />
          </Navbar.Brand>
          <Nav className="mr-auto" class="brandText">
            Chat WhatEver You Want...
          </Nav>
        </Navbar>
      </div>
    </header>
  );
}
export default header;
