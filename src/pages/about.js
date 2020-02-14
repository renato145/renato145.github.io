import React from 'react';
import { graphql } from 'gatsby';
import moment from 'moment';
import Layout from '../components/Layout';

const news = [
  { date: '201811', text: 'Started Phd at the University of Adelaide.' },
  { date: '201807', text: 'Finished MS in computer science at the Pontificia Universidad Catolica del Perú.' },
];

const DefaultPage = ({ data, location }) => {
  const title = 'About';
  const { author, mail } = data.site.siteMetadata;

  return (
    <Layout
      location={location}
      title="About me"
      // description={title}
      headerConfig={{ title }}
    >
      <p>
        Hi! this is {author}. I'm a second year PhD student at the University of
        Adelaide, my work focuses on applying machine learning to medical
        images. I am currently working on weakly supervised localization.
      </p>
      <p>
        Things I'm interested, in no particular order: machine learning, data
        visualization, optimization, simulation, open source...
      </p>
      <p>
        I'm always up to apply my knowledge on impactful and social projects, if
        you are interested in doing a collaboration, send me a mail to:{' '}
        <a href={`mailto:${mail}`}>{mail}</a>.
      </p>

      <h4>News</h4>
      <ul>
        { news.map(({ text, date }, i) => <li key={i}>{moment(date, 'YYYYMM').format('MMM YYYY')}: {text}</li>)}
      </ul>
      
      <h4>Publications</h4>
      <ul>
        <li>
          Renato Hermoza and Ivan Sipiran.
          <b> “3D Reconstruction of Incomplete Archaeological Objects Using a Generative Adversarial Network.” </b>
          Proceedings of Computer Graphics International 2018 (CGI 2018). ACM, New York, NY, USA, 5-11. DOI: 
          <a href='https://doi.org/10.1145/3208159.3208173' target='_black'>10.1145/3208159.3208173</a>
        </li>
        <li>
          E. Garcia, R. Hermoza, C. B. Castanon, L. Cano, M. Castillo and C. Castanñeda,
          <b> "Automatic Lymphocyte Detection on Gastric Cancer IHC Images Using Deep Learning," </b>
          2017 IEEE 30th International Symposium on Computer-Based Medical Systems (CBMS), Thessaloniki, 2017, pp. 200-204. doi: 
          <a href='https://ieeexplore.ieee.org/abstract/document/8104187' target='_black'>10.1109/CBMS.2017.94</a>
        </li>
      </ul>

    </Layout>
  );
};

export default DefaultPage;

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
