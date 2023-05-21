import React, { HTMLProps } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { Layout } from '../components/Layout';
import { formatYMDate } from '../utils';
import { GraphqlSite, Publication as PublicationType } from '../Types';
import { usePublications } from '../hooks/usePublications';
import { useNews } from '../hooks/useNews';
import { usePresentations } from '../hooks/usePresentations';

interface PublicationProps
  extends Omit<HTMLProps<HTMLLIElement>, 'title'>,
    PublicationType {}

const Publication: React.FC<PublicationProps> = ({
  authors,
  title,
  conference,
  doi,
  ...props
}) => (
  <li {...props}>
    {authors} <span className="font-medium">“{title}”</span> {conference}
    {doi && (
      <>
        {' DOI: '}
        <a href={`https://doi.org/${doi}`} target="_black" rel="noopener">
          {doi}
        </a>
      </>
    )}
  </li>
);

interface Props extends PageProps {
  data: GraphqlSite;
}

const About: React.FC<Props> = ({ data, location }) => {
  const title = 'About';
  const { author, mail } = data.site.siteMetadata;
  const news = useNews();
  const publications = usePublications();
  const presentations = usePresentations();

  return (
    <Layout
      location={location}
      title="About me"
      // description={title}
      headerConfig={{ title }}
    >
      <div className="prose max-w-none">
        <p>
          Hi! this is {author}. I have PhD on Machine Learning from the
          University of Adelaide, my work focused on applying machine learning
          to medical images, survival prediction and weakly supervised
          localization. My main research interests are in the fields of machine
          learning, optimization, simulation and data visualization. I enjoy
          building interactive systems for domain experts to explore complex
          machine learning and optimization systems.
        </p>
        <p>
          Would you like to talk about Python, Rust adoption, machine learning?
          You can schedule 30 min talk{' '}
          <a href="https://calendly.com/renato_hermoza/30min" target="_black" rel="noopener">
            here
          </a>{' '}
          or send me a mail to <a href={`mailto:${mail}`}>{mail}</a>.
        </p>
        <p>
          You can find my CV <Link to={`/cv`}>here</Link>.
        </p>
        <h2>News</h2>
        <ul>
          {news.map(({ text, date }, i) => (
            <li key={i}>
              {formatYMDate(date, 'MMMM yyyy')}: {text}
            </li>
          ))}
        </ul>
        <h2>Publications</h2>
        <ul>
          {publications.map((o, i) => (
            <Publication key={i} {...o} />
          ))}
        </ul>
        <h2>Presentations</h2>
        <ul>
          {presentations.map(({ text }, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        mail
      }
    }
  }
`;
