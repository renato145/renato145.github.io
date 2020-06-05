import React from 'react';
import SEO from './Seo';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';

export const Layout = ({
  location,
  title,
  description,
  children,
  headerConfig,
  tags,
}) => {
  const seo =
    typeof headerConfig === 'undefined'
      ? { title: location.pathname.split('/').reverse()[1] }
      : headerConfig;
  return (
    <div className="container flex flex-col mx-auto pb-2 bg-white border shadow-md min-h-screen-98">
      <header>
        <SEO title={seo.title} description={seo.description} />
        <Navigation />
      </header>

      <main className="flex-1 px-6 mt-2">
        {title && (
          <Header
            location={location}
            title={title}
            description={description}
            tags={tags}
          />
        )}
        <Content children={children} />
      </main>

      <Footer className="my-4" />
    </div>
  );
};
