import React from 'react';
import { Link } from 'gatsby';

const HeaderLink = ({ children, ...props }) => (
  <Link
    className="mr-6 text-gray-600 hover:text-gray-800"
    activeClassName="text-lg font-bold"
    {...props}
  >
    {children}
  </Link>
);

export const Navigation = () => {
  return (
    <nav className="flex flex-wrap items-baseline px-6 py-3 bg-gray-300">
      <HeaderLink to={`/`}>Home</HeaderLink>
      <HeaderLink to={`/blog`}>Blog</HeaderLink>
      <HeaderLink to={`/experiments`}>Experiments</HeaderLink>
      <HeaderLink to={`/about`}>About</HeaderLink>
      <HeaderLink to={`/search`}>Search</HeaderLink>
      <HeaderLink to={`/tags`}>Tags</HeaderLink>
    </nav>
  );
};

// export const XXXNavigations = () => {
//   return (
//     <>
//     <Navbar collapseOnSelect bg="light" expand="lg">
//       {/* <Navbar collapseOnSelect bg='dark' expand='lg' variant='dark' fixed='top'> */}
//       {/* <Link to={`/`} className='navbar-brand' >Home</Link> */}
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Link to={`/`} className="nav-link" activeClassName="active">
//             Home
//           </Link>
//           <Link to={`/blog`} className="nav-link" activeClassName="active">
//             Blog
//           </Link>
//           <Link
//             to={`/experiments`}
//             className="nav-link"
//             activeClassName="active"
//           >
//             Experiments
//           </Link>
//           <Link to={`/about`} className="nav-link" activeClassName="active">
//             About
//           </Link>
//           <Link to={`/search`} className="nav-link" activeClassName="active">
//             Search
//           </Link>
//           <Link to={`/tags`} className="nav-link" activeClassName="active">
//             Tags
//           </Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//     </>
//   );
// };
