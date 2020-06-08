import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'gatsby';

const HeaderLink = ({ children, ...props }) => (
  <Link
    className="flex-1 px-6 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-400"
    activeClassName="font-semibold bg-gray-100"
    {...props}
  >
    {children}
  </Link>
);

export const Navigation = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="flex flex-wrap items-baseline bg-gray-300">
      <div className="hidden md:block py-2 flex items-stretch">
        <HeaderLink to={`/`}>Home</HeaderLink>
        <HeaderLink to={`/blog`}>Blog</HeaderLink>
        <HeaderLink to={`/experiments`}>Experiments</HeaderLink>
        <HeaderLink to={`/about`}>About</HeaderLink>
        <HeaderLink to={`/search`}>Search</HeaderLink>
        <HeaderLink to={`/tags`}>Tags</HeaderLink>
      </div>
      <div className="relative md:hidden ml-2">
        <button
          className="px-2 py-3 bg-opacity-0 hover:bg-opacity-0 active:bg-opacity-0 focus:shadow-none text-gray-600 hover:text-gray-800"
          onClick={() => setShow((v) => !v)}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        {show && (
          <>
            <button
              className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black hover:bg-black active:bg-black focus:shadow-none opacity-25"
              onClick={() => setShow(false)}
            />
            <div className="absolute z-10 left-0 flex flex-col w-48 bg-gray-300 border border-gray-400 shadow-xl">
              <HeaderLink to={`/`} onClick={() => setShow(false)}>Home</HeaderLink>
              <HeaderLink to={`/blog`} onClick={() => setShow(false)}>Blog</HeaderLink>
              <HeaderLink to={`/experiments`} onClick={() => setShow(false)}>Experiments</HeaderLink>
              <HeaderLink to={`/about`} onClick={() => setShow(false)}>About</HeaderLink>
              <HeaderLink to={`/search`} onClick={() => setShow(false)}>Search</HeaderLink>
              <HeaderLink to={`/tags`} onClick={() => setShow(false)}>Tags</HeaderLink>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
