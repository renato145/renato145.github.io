import React from 'react';
import SEO from './Seo';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { Content } from './Content';
import { Footer } from './Footer';
import { UpArrow } from './UpArrow';
import { PageProps } from 'gatsby';

interface Props extends Pick<PageProps, 'location'> {
  title: string;
  description?: string;
  headerConfig?: {
    title: string;
    description?: string;
  };
  tags?: string[];
}

export const Layout: React.FC<Props> = ({
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
    <div className="container mx-auto flex min-h-[98vh] flex-col bg-white pb-2 shadow-md xl:max-w-screen-xl">
      <header>
        <SEO title={seo.title} description={seo.description} />
        <Navigation />
      </header>

      <main className="mt-2 flex-1 px-6">
        {title && (
          <Header title={title} description={description} tags={tags} />
        )}
        <Content children={children} />
      </main>

      <UpArrow />
      <Footer className="my-4" />
    </div>
  );
};
