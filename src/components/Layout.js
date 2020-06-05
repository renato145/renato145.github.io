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
    <div className="container mx-auto pb-2 bg-white border shadow-md">
      <header>
        <SEO title={seo.title} description={seo.description} />
        <Navigation />
      </header>

      <main className="px-4 mt-2 mb-0">
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

      <Footer />
    </div>
  );
};
