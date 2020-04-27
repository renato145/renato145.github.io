import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'gatsby';
import './PostFooter.css';

const PostFooter = ({ previous, next }) => {
  return (
    <Nav className={`post-footer ${previous ? '' : 'text-right'}`}>
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
