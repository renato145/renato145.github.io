import React, { HTMLProps } from 'react';
import SEO from '../components/Seo';
import { usePublications } from '../hooks/usePublications';
import { Publication as PublicationType } from '../components/Types';

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

const CV: React.FC = () => {
  const publications = usePublications();

  return (
    <div
      className="mx-auto bg-gray-100 shadow-outline p-8"
      style={{ width: '21cm', height: '29.7cm' }}
    >
      <SEO title="CV" description="My CV" />

      <p>Renato Hermoza Aragonés</p>
      <p>renato.hermoza@pucp.edu.pe</p>
      <p>https://renato145.github.io/</p>

      <div>
        <p>Education</p>
        <p>
          The University of Adelaide 2018 2022 (expected) Australia PhD. in
          Medical Image Analysis, Computer Vision and Machine Learning
        </p>
        <p>
          Pontificia Universidad Católica del Perú 2016 2017 Perú Master in
          Informatics - Mention in Computer Science
        </p>
        <p>
          Universidad San Martín de Porres 2005 2011 Perú Bachelor in Computing
          and Systems Engineering
        </p>
      </div>

      <div>
        <p>Resume</p>
        <p>
          Second year PhD. student at the University of Adelaide with main
          research interests in the fields of computer vision, machine learning
          and data visualization.
        </p>
      </div>

      <div>
        <p>Professional Experience</p>
        <p>
TechStart (Data Scientist)	01/2018 –  06/2018
    • Apply machine learning models to process demographic and business data to aid business in finding optimal locations for their stores.
    • Extract and preprocess business data.
    • Data visualization and build interactive dashboards.
    • Development and validation of machine learning models.

EASY TAXI (Data Scientist)	11/2015 –  08/2017
    • Extract and visualize business data.
    • Develop machine learning models for marketing and operation optimization.

GMD (System Administrator)	04/2012 – 12/2014
Oxinet (IT Consultant)	08/2011 – 03/2012
        </p>
      </div>

      <div>
        <p>Teaching Experience</p>
        <p>
The University of Adelaide	07/2019 –  12/2019
    • Tutor assistance for the course “Foundations of Computer Science”.

Pontificia Universidad Católica del Perú	07/2018 –  10/2018
    • Taught the first 6 weeks of: “Advanced Techniques in Data Mining and Intelligent Systems”, in the Master in Informatics program.
    • Taught: “Deep Learning Training Course”, a two weeks training course.</p>
      </div>

    <div>
      <p>Conferences Attended</p>
      <p>
    • Iberoamerican Congress On Pattern Recognition (CIARP 2016) – Perú, Pontifical Catholic University of Perú.
    • Machine Learning Summer School 2016 – Perú, Catholic University San Pablo.
      </p>
    </div>

    <div>
      <p>Presentations</p>
      <p>
            • Deep Learning Mini-Course. Present at Workshop on Artificial Intelligence and Machine Learning Applications 2017 – Perú, Pontifical Catholic University of Perú.
    • Automatic Lymphocyte Detection on Gastric Cancer IHC Images Using Deep Learning. Poster session presented at the 30th ΙΕΕΕ International Symposium on Computer-Based Medical Systems - Greece, Aristotle University of Thessaloniki.
      </p>
    </div>

<div>
  <p>Publications</p>
        <ol>
          {publications.map((o) => (
            <Publication {...o} />
          ))}
        </ol>
</div>

      <div>
        <p>Knowledge</p>
        <p>
          Knowledge and active research of the current state of the art on deep
          learning and computer vision. Advance skill on Python, building
          reusable APIs, web servers and open software development. Experience
          building data visualization and interactive dashboards using Python
         and JavaScript (React, D3, Threejs). Typescript Rust WebAssembly.
        </p>
      </div>

      <div>
        <p>Language</p>
        <p>Spanish (native)</p>
        <p>English</p>
      </div>
    </div>
  );
};

export default CV;
