import React, { HTMLProps } from 'react';
import { graphql, PageProps } from 'gatsby';
import moment from 'moment';
import { Layout } from '../components/Layout';
import {
  GraphqlSite,
  Publication as PublicationType,
} from '../components/Types';
import { usePublications } from '../hooks/usePublications';

const news = [
  { date: '201811', text: 'Started Phd at the University of Adelaide.' },
  {
    date: '201807',
    text:
      'Finished MS in computer science at the Pontificia Universidad Catolica del Perú.',
  },
];

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
  const publications = usePublications();

  return (
    <Layout
      location={location}
      title="About me"
      // description={title}
      headerConfig={{ title }}
    >
      <div className="px-2 leading-relaxed">
        <p className="mt-8">
          Hi! this is {author}. I'm a second year PhD student at the University
          of Adelaide, my work focuses on applying machine learning to medical
          images and currently working on weakly supervised localization.
        </p>

        <p className="mt-4">
          Things I'm interested in no particular order: machine learning: data
          visualization, optimization, simulation, open source...
        </p>

        <p className="mt-4">
          I'm always up to apply my knowledge on impactful and social projects.
          If you are interested in doing a collaboration, send me a mail:{' '}
          <a href={`mailto:${mail}`}>{mail}</a>.
        </p>

        <h3 className="mt-8 font-medium">News</h3>

        <ul className="mt-2">
          {news.map(({ text, date }, i) => (
            <li key={i}>
              {moment(date, 'YYYYMM').format('MMM YYYY')}: {text}
            </li>
          ))}
        </ul>

        <h3 className="mt-8 font-medium">Publications</h3>

        <ol className="mt-2">
          {publications.map((o,i) => (
            <Publication key={i} {...o} />
          ))}
        </ol>
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
