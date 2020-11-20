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
import { Navigation } from '../components/Navigation';

const Page: React.FC<HTMLProps<HTMLDivElement>> = ({ children, ...props }) => (
  <div
    className="mx-auto mb-4 print:mb-0 px-8 py-4 bg-gray-100 shadow-2xl print:shadow-none"
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
    <p className="text-2xl font-extrabold">{title}</p>
    <div className="border-b-4 border-gray-400" />
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
      <p className="text-gray-600 text-sm">{`${yearIn} - ${yearOut}${
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
      <p className="text-gray-600 text-sm">
        {formatYMDate(dateIn)} - {formatYMDate(dateOut)}
      </p>
    </div>
    {details.length > 0 && (
      <ul className="pl-4 list-outside ml-4 list-disc">
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
      <p className="text-gray-600 text-sm">
        {formatYMDate(dateIn)} - {formatYMDate(dateOut)}
      </p>
    </div>
    {details.length > 0 && (
      <ul className="pl-4 list-outside ml-4 list-disc">
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
    <div className="bg-gray-500 pb-1 print:pb-0">
      <SEO title="CV" description="My CV" />
      <div style={{ width: '21cm' }} className="mx-auto print:hidden">
        <Navigation />
      </div>
      <Page>
        <div className="mt-8 text-center leading-tight">
          <p className="text-3xl font-semibold">Renato Hermoza Aragonés</p>
          <div className="flex mt-1 justify-center">
            <a
              href="https://renato145.github.io/"
              target="_black"
              rel="noopener"
            >
              renato145.github.io
            </a>
            <p className="mx-2">•</p>
            <a href="renato.hermoza@pucp.edu.pe" target="_black" rel="noopener">
              renato.hermoza@pucp.edu.pe
            </a>
          </div>
        </div>

        <div className="mt-10">
          <Section title="Resume" />
          <p className="mt-2">
            Final year PhD. student at the University of Adelaide with main
            research interests in the fields of computer vision, machine
            learning and data visualization.
          </p>
        </div>

        <div className="mt-8">
          <Section title="Education" />
          {education.map((o, i) => (
            <EducationItem key={i} className="mt-2" {...o} />
          ))}
        </div>

        <div className="mt-8">
          <Section title="Professional Experience" />
          {experience.map((o, i) => (
            <Experience key={i} className="mt-2" {...o} />
          ))}
        </div>

        <div className="mt-8">
          <Section title="Teaching Experience" />
          {teaching.map((o, i) => (
            <Teaching key={i} className="mt-2" {...o} />
          ))}
        </div>
      </Page>

      <Page>
        <div className="mt-8">
          <Section title="Publications" />
          <ul className="mt-2 list-outside ml-4 list-disc">
            {publications.map((o, i) => (
              <Publication key={i} className="mt-1" {...o} />
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Section title="Skills" />
          <p className="mt-2">
            Knowledge and active research of the current state of the art on
            deep learning and computer vision.
          </p>
          <p className="mt-1">
            Advance skill on Python, building reusable APIs, web servers and
            open software development.
          </p>
          <p className="mt-1">
            Experience building data visualization and interactive dashboards
            using Python and JavaScript (React, D3, Threejs).
          </p>
          <p className="mt-1">
            Programming languages: Python, JS/Typescript, Rust and Julia.
          </p>
        </div>

        <div className="mt-8">
          <Section title="Languages" />
          <ul className="mt-2 list-outside ml-4 list-disc">
            <li>Spanish (native)</li>
            <li>English (fluent)</li>
          </ul>
        </div>
      </Page>
    </div>
  );
};

export default CV;
