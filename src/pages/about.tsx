import React, { HTMLProps } from 'react';
import { graphql, PageProps } from 'gatsby';
import moment from 'moment';
import { Layout } from '../components/Layout';
import { GraphqlSite } from '../components/Types';

const news = [
  { date: '201811', text: 'Started Phd at the University of Adelaide.' },
  {
    date: '201807',
    text:
      'Finished MS in computer science at the Pontificia Universidad Catolica del Perú.',
  },
];

interface PublicationProps extends HTMLProps<HTMLLIElement> {
  authors: string;
  title: string;
  conference: string;
  doi: string;
}

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
          <Publication
            authors="Renato Hermoza and Ivan Sipiran."
            title="3D Reconstruction of Incomplete Archaeological Objects Using a Generative Adversarial Network."
            conference="Proceedings of Computer Graphics International 2018 (CGI 2018). ACM, New York, NY, USA, 5-11."
            doi="10.1145/3208159.3208173"
          />
          <Publication
            authors="E. Garcia, R. Hermoza, C. B. Castanon, L. Cano, M. Castillo and C. Castanñeda."
            title="Automatic Lymphocyte Detection on Gastric Cancer IHC Images Using Deep Learning,"
            conference="2017 IEEE 30th International Symposium on Computer-Based Medical Systems (CBMS), Thessaloniki, 2017, pp. 200-204."
            doi="10.1109/CBMS.2017.94"
          />
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
