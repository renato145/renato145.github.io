import React from 'react';

const Footer = () => {
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org"> Gatsby</a>
    </footer>
  );
};

export default Footer;

      // <p>
      //   Written by <strong>{author}</strong> some info.
      //   {` `}
      //   <a href={`https://twitter.com/${social.twitter}`}>
      //     Follow me
      //   </a>
      // </p>