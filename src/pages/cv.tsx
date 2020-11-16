import React, { HTMLProps } from 'react';
import SEO from '../components/Seo';
import { usePublications } from '../hooks/usePublications';
import { useExperience } from '../hooks/useExperience';
import { useEducation } from '../hooks/useEducation';
import { useTeaching } from '../hooks/useTeaching';
import {
  Publication as PublicationType,
  Education as EducationType,
  Experience as ExperienceType,
  Teaching as TeachingType,
} from '../components/Types';
import { formatYMDate } from '../utils';

const Page: React.FC<HTMLProps<HTMLDivElement>> = ({ children, ...props }) => (
  <div
    className="mx-auto bg-gray-100 px-8 py-4"
    style={{
      width: '21cm',
      height: '29.7cm',
      pageBreakAfter: 'always',
      pageBreakInside: 'avoid',
    }}
    {...props}
  >
    {children}
  </div>
);

interface SectionProps extends HTMLProps<HTMLDivElement> {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title, ...props }) => (
  <div {...props}>
    <p className="text-xl font-extrabold">{title}</p>
  </div>
);

interface EducationItemProps extends HTMLProps<HTMLDivElement>, EducationType {}

const EducationItem: React.FC<EducationItemProps> = ({
  university,
  degree,
  yearIn,
  yearOut,
  pending = false,
  className,
  ...props
}) => (
  <div className={`w-full ${className ?? ''}`} {...props}>
    <div className="flex justify-between">
      <p className="font-medium text-lg">{university}</p>
      <p className="text-gray-600">{`${yearIn} - ${yearOut}${
        pending ? ' (expected)' : ''
      }`}</p>
    </div>
    <p>{degree}</p>
  </div>
);

interface ExperienceProps extends HTMLProps<HTMLDivElement>, ExperienceType {}

const Experience: React.FC<ExperienceProps> = ({
  place,
  position,
  dateIn,
  dateOut,
  details,
  className,
  ...props
}) => (
  <div className={`w-full ${className ?? ''}`} {...props}>
    <div className="flex justify-between">
      <p>
        {place} <span>({position})</span>
      </p>
      <p className="text-gray-600">
        {formatYMDate(dateIn)} - {formatYMDate(dateOut)}
      </p>
    </div>
    {details.length > 0 && (
      <ul className="pl-4">
        {details.map((o, i) => (
          <li className="text-sm" key={i}>
            {o}
          </li>
        ))}
      </ul>
    )}
  </div>
);

interface TeachingProps extends HTMLProps<HTMLDivElement>, TeachingType {}

const Teaching: React.FC<TeachingProps> = ({
  place,
  dateIn,
  dateOut,
  details,
  className,
  ...props
}) => (
  <div className={`w-full ${className ?? ''}`} {...props}>
    <div className="flex justify-between">
      <p>{place}</p>
      <p className="text-gray-600">
        {formatYMDate(dateIn)} - {formatYMDate(dateOut)}
      </p>
    </div>
    {details.length > 0 && (
      <ul className="pl-4">
        {details.map((o, i) => (
          <li className="text-sm" key={i}>
            {o}
          </li>
        ))}
      </ul>
    )}
  </div>
);

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
  const experience = useExperience();
  const education = useEducation();
  const teaching = useTeaching();

  return (
    <div className="bg-gray-700">
      <SEO title="CV" description="My CV" />
      <Page>
        <div className="text-center leading-tight">
          <p className="text-2xl font-medium">Renato Hermoza Aragonés</p>
          <a href="renato.hermoza@pucp.edu.pe" target="_black" rel="noopener">
            renato.hermoza@pucp.edu.pe
          </a>
        </div>

        <div className="mt-4">
          <Section title="Resume" />
          <p>
            Final year PhD. student at the University of Adelaide with main
            research interests in the fields of computer vision, machine
            learning and data visualization.
          </p>
        </div>

        <div className="mt-4">
          <Section title="Education" />
          {education.map((o, i) => (
            <EducationItem key={i} className="mt-2" {...o} />
          ))}
        </div>

        <div className="mt-4">
          <Section title="Professional Experience" />
          {experience.map((o, i) => (
            <Experience key={i} className="mt-2" {...o} />
          ))}
        </div>

        <div className="mt-4">
          <Section title="Teaching Experience" />
          {teaching.map((o, i) => (
            <Teaching key={i} className="mt-2" {...o} />
          ))}
        </div>

        <div className="mt-4">
          <Section title="Publications" />
          <ul>
            {publications.map((o, i) => (
              <Publication key={i} className="mt-1 text-sm" {...o} />
            ))}
          </ul>
        </div>
      </Page>

      <Page>
        <div className="mt-4">
          <Section title="Conference Attended" />
        </div>

        <div className="mt-4">
          <Section title="Presentations" />
        </div>

        <div className="mt-4">
          <Section title="Skills" />
        </div>

        <div className="mt-4">
          <Section title="Languages" />
        </div>
      </Page>
    </div>
  );
};

export default CV;

//     <div>
//       <p>Conferences Attended</p>
//       <p>
//     • Iberoamerican Congress On Pattern Recognition (CIARP 2016) – Perú, Pontifical Catholic University of Perú.
//     • Machine Learning Summer School 2016 – Perú, Catholic University San Pablo.
//       </p>
//     </div>

//     <div>
//       <p>Presentations</p>
//       <p>
//             • Deep Learning Mini-Course. Present at Workshop on Artificial Intelligence and Machine Learning Applications 2017 – Perú, Pontifical Catholic University of Perú.
//     • Automatic Lymphocyte Detection on Gastric Cancer IHC Images Using Deep Learning. Poster session presented at the 30th ΙΕΕΕ International Symposium on Computer-Based Medical Systems - Greece, Aristotle University of Thessaloniki.
//       </p>
//     </div>

// <div>
//   <p>Publications</p>
// </div>

//       <div>
//         <p>Knowledge</p>
//         <p>
//           Knowledge and active research of the current state of the art on deep
//           learning and computer vision. Advance skill on Python, building
//           reusable APIs, web servers and open software development. Experience
//           building data visualization and interactive dashboards using Python
//          and JavaScript (React, D3, Threejs). Typescript Rust WebAssembly.
//         </p>
//       </div>

//       <div>
//         <p>Language</p>
//         <p>Spanish (native)</p>
//         <p>English</p>
//       </div>
//     </Page>
