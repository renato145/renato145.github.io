import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  const { mail, social } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            mail
            social {
              github
              twitter
            }
          }
        }
      }
    `
  ).site.siteMetadata;

  return (
    <footer className='main-footer'>
      <hr />
      <Nav className='justify-content-center'>
        <Nav.Item>
          <Nav.Link href={`mailto:${mail}`}>{mail}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={`https://twitter.com/${social.twitter}`} target='_black'>Twitter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={`https://github.com/${social.github}`} target='_black'>GitHub</Nav.Link>
        </Nav.Item>
      </Nav>
    </footer>
  );
};

export default Footer;
