import React, { HTMLProps } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { Layout } from '../components/Layout';
import { formatYMDate } from '../utils';
import {
  GraphqlSite,
  Publication as PublicationType,
} from '../components/Types';
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
          Hi! this is {author}. I'm in the final year of PhD at the University
          of Adelaide, my work focuses on applying machine learning to medical
          images and currently working on survival prediction and weakly
          supervised localization.
        </p>

        <p>
          Things I'm interested in no particular order: machine learning: data
          visualization, optimization, simulation, open source...
        </p>

        <p>
          I'm always up to apply my knowledge on impactful and social projects.
          If you are interested in doing a collaboration, send me a mail:{' '}
          <a href={`mailto:${mail}`}>{mail}</a>.
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
