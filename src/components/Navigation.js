import React from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import { Search } from './Search';

const NavStyle = {
  flexGrow: 0,
};

const searchStyle = {
  flexGrow: 1,
  paddingLeft: '1em',
};

const Navigation = ({ showSearch = true }) => {
  return (
    <>
    <Navbar collapseOnSelect bg="light" expand="lg">
      {/* <Navbar collapseOnSelect bg='dark' expand='lg' variant='dark' fixed='top'> */}
      {/* <Link to={`/`} className='navbar-brand' >Home</Link> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={NavStyle}>
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
          <Link to={`/tags`} className="nav-link" activeClassName="active">
            Tags
          </Link>
          <Link to={`/about`} className="nav-link" activeClassName="active">
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
      {showSearch && <Search style={searchStyle} />}
    </Navbar>
    </>
  );
};

export default Navigation;
