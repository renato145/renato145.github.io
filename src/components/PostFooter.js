import React from 'react';
import { Nav as _Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Nav = styled(_Nav)`
  justify-content: ${({previous}) => previous ? "space-between" : "flex-end"};
  margin-top: 2.5rem;
`;


const PostFooter = ({ previous, next }) => {
  return (
    <Nav previous={previous}>
      {previous && (
        <Nav.Item>
          <Link to={previous.fields.slug} rel='prev'>
            ← {previous.frontmatter.title}
          </Link>
        </Nav.Item>
      )}
      {next && (
        <Nav.Item>
          <Link to={next.fields.slug} rel='next'>
            {next.frontmatter.title} →
          </Link>
        </Nav.Item>
      )}
    </Nav>
  );
};

export default PostFooter;
