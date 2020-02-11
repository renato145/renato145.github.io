import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg'>
      {/* <Link to={`/`} className='navbar-brand' >Home</Link> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='mr-auto'>
          <Link to={`/`} className='nav-link' activeClassName='active'>Home</Link>
          <Link to={`/blog`} className='nav-link' activeClassName='active'>Blog</Link>
          <Link to={`/experiments`} className='nav-link' activeClassName='active'>Experiments</Link>
          <Link to={`/about`} className='nav-link' activeClassName='active'>About</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
