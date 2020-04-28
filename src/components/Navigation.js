import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';

const Navigation = () => {
  return (
    <>
    <Navbar collapseOnSelect bg="light" expand="lg">
      {/* <Navbar collapseOnSelect bg='dark' expand='lg' variant='dark' fixed='top'> */}
      {/* <Link to={`/`} className='navbar-brand' >Home</Link> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to={`/`} className="nav-link" activeClassName="active">
            Home
          </Link>
          <Link to={`/blog`} className="nav-link" activeClassName="active">
            Blog
          </Link>
          <Link
            to={`/experiments`}
            className="nav-link"
            activeClassName="active"
          >
            Experiments
          </Link>
          <Link to={`/about`} className="nav-link" activeClassName="active">
            About
          </Link>
          <Link to={`/search`} className="nav-link" activeClassName="active">
            Search
          </Link>
          <Link to={`/tags`} className="nav-link" activeClassName="active">
            Tags
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};

export default Navigation;
