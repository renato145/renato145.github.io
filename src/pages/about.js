import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import { Layout } from '../components/Layout';

const news = [
  { date: '201811', text: 'Started Phd at the University of Adelaide.' },
  {
    date: '201807',
    text:
      'Finished MS in computer science at the Pontificia Universidad Catolica del Perú.',
  },
];

const ListItem = ({ children, ...props }) => (
  <div {...props}>
    <div className="flex">
      <p className="block mr-1">&bull;</p>
      <div>
        {children}
      </div>
    </div>
  </div>
);

const About = ({ data, location }) => {
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
        <ul>
          {news.map(({ text, date }, i) => (
            <ListItem key={i} className="mt-2 ml-2">
              {moment(date, 'YYYYMM').format('MMM YYYY')}: {text}
            </ListItem>
          ))}
        </ul>

        <h3 className="mt-8 font-medium">Publications</h3>
        <ListItem className="mt-2 ml-2">
          Renato Hermoza and Ivan Sipiran.
          <span className="font-medium">
            {' '}
            “3D Reconstruction of Incomplete Archaeological Objects Using a
            Generative Adversarial Network.”{' '}
          </span>
          Proceedings of Computer Graphics International 2018 (CGI 2018). ACM,
          New York, NY, USA, 5-11. DOI:{' '}
          <a href="https://doi.org/10.1145/3208159.3208173" target="_black">
            10.1145/3208159.3208173
          </a>
        </ListItem>
        <ListItem className="mt-2 ml-2">
          E. Garcia, R. Hermoza, C. B. Castanon, L. Cano, M. Castillo and C.
          Castanñeda,
          <span className="font-medium">
            {' '}
            "Automatic Lymphocyte Detection on Gastric Cancer IHC Images Using
            Deep Learning,"{' '}
          </span>
          2017 IEEE 30th International Symposium on Computer-Based Medical
          Systems (CBMS), Thessaloniki, 2017, pp. 200-204. doi:{' '}
          <a
            href="https://ieeexplore.ieee.org/abstract/document/8104187"
            target="_black"
          >
            10.1109/CBMS.2017.94
          </a>
        </ListItem>

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
