import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"

const Navigation = () => {
  const shortName = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            shortName
          }
        }
      }
    `
  ).site.siteMetadata.shortName;

  return (
    <Navbar bg='light' expand='lg'>
      <Link to={`/`} className='navbar-brand' >{shortName}</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='mr-auto'>
          <Link to={`/`} className='nav-link' >Home</Link>
          <Link to={`/blog`} className='nav-link' >Blog</Link>
          <Link to={`/projects`} className='nav-link' >Projects</Link>
          <Link to={`/publications`} className='nav-link' >Publications</Link>
          <Link to={`/about`} className='nav-link' >About</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
