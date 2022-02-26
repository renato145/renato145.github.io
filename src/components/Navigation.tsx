import React, { Fragment } from 'react';
import { GatsbyLinkProps, Link } from 'gatsby';
import { Menu, Transition } from '@headlessui/react';

export enum URL {
  Home = '/',
  Blog = '/blog',
  Experiments = '/experiments',
  About = '/about',
  Search = '/search',
  Tags = '/tags',
}

interface HeaderLinkProps extends Omit<GatsbyLinkProps<{}>, 'ref' | 'to'> {
  url: URL;
  text: string;
  className?: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
  url,
  text,
  className,
  ...props
}) => (
  <Link
    className={className}
    activeClassName="font-semibold bg-slate-50"
    to={url}
    {...props}
  >
    {text}
  </Link>
);

const LINKS: [URL, string][] = [
  [URL.Home, 'Home'],
  [URL.Blog, 'Blog'],
  [URL.Experiments, 'Experiments'],
  [URL.About, 'About'],
  [URL.Search, 'Search'],
  [URL.Tags, 'Tags'],
];

export const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-wrap bg-slate-200">
      <div className="hidden md:flex">
        {LINKS.map(([url, text], i) => (
          <HeaderLink
            key={i}
            url={url}
            text={text}
            className="px-6 py-2 text-gray-500 hover:bg-slate-300 hover:text-slate-700"
          />
        ))}
      </div>
      <Menu as="div" className="relative ml-2 md:hidden">
        {({ open }) => (
          <>
            <Menu.Button
              className={`px-2 py-3 ${
                open
                  ? 'bg-slate-300 text-gray-800'
                  : 'bg-slate-200 text-gray-500'
              } hover:bg-slate-300 hover:text-gray-800 focus:shadow-none focus:ring-0 active:bg-slate-300`}
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </Menu.Button>
            {open ? (
              <div className="fixed top-0 bottom-0 left-0 right-0 h-full w-full bg-black/20" />
            ) : null}
            <Transition
              show={open}
              as={Fragment}
              enter="transform transition duration-100 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items
                className="absolute left-0 z-10 flex w-48 flex-col border border-gray-400 bg-slate-200 shadow-xl outline-none"
                static
              >
                {LINKS.map(([url, text], i) => (
                  <HeaderLink
                    key={i}
                    url={url}
                    text={text}
                    className="flex-1 px-6 py-3 text-gray-500 hover:bg-slate-300 hover:text-gray-800"
                  />
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </nav>
  );
};
