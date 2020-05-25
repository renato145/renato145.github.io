import React from 'react';
import SEO from './Seo';
import Navigation from './Navigation';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { Container, Row } from 'react-bootstrap';
import "twin.macro";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';

const Layout = ({ location, title, description, children, headerConfig, tags }) => {
  const seo = typeof headerConfig === 'undefined'
    ? { title: location.pathname.split('/').reverse()[1] }
    : headerConfig;
  return (
    <Container className='main-container' tw="mb-2">
      <SEO
        title={seo.title}
        description={seo.description}
      />
      <Row className='navigation-top-bar'>
        <Navigation />
      </Row>
      <Row className='main-content'>
        { title && (
          <Header
            location={location}
            title={title}
            description={description}
            tags={tags}
          />
        )}
        <Content
          children={children}
        />
      </Row>
      <Row className='main-footer align-items-end'>
        <Footer />
      </Row>
    </Container>
  );
};

export default Layout;
