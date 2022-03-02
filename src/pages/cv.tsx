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
} from '../Types';
import { formatYMDate } from '../utils';
import { Navigation } from '../components/Navigation';

const Page: React.FC<HTMLProps<HTMLDivElement>> = ({ children, ...props }) => (
  <div
    className="mx-auto mb-4 bg-white px-8 py-4 shadow-2xl print:mb-0 print:shadow-none"
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
    <div className="border-b-4 border-slate-300 shadow" />
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
      <p className="text-lg font-medium">{university}</p>
      <p className="text-sm font-medium text-gray-500">{`${yearIn} - ${yearOut}${
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
  country,
  dateIn,
  dateOut,
  details,
  className,
  ...props
}) => (
  <div className={`w-full ${className ?? ''}`} {...props}>
    <div className="flex justify-between">
      <p className="font-medium">
        {place} | {position}{' '}
        <span className="text-sm  text-gray-500">({country})</span>
      </p>
      <p className="text-sm font-medium text-gray-500">
        {formatYMDate(dateIn)} - {formatYMDate(dateOut)}
      </p>
    </div>
    {details.length > 0 && (
      <ul className="ml-4 list-outside list-disc pl-4">
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
      <p className="font-medium">{place}</p>
      <p className="text-sm font-medium text-gray-500">
        {formatYMDate(dateIn)} - {formatYMDate(dateOut)}
      </p>
    </div>
    {details.length > 0 && (
      <ul className="ml-4 list-outside list-disc pl-4">
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
    <div className="bg-slate-400 pb-1 print:pb-0">
      <SEO title="CV" description="My CV" />
      <div className="mx-auto w-[21cm] print:hidden">
        <Navigation />
      </div>
      <Page>
        <div className="mt-7 text-center leading-tight">
          <p className="text-3xl font-semibold">Renato Hermoza Aragonés</p>
          <div className="mt-1 flex justify-center">
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
          <p className="mt-2 px-1 text-justify">
            Final year PhD. student at the University of Adelaide with main
            research interests in the fields of computer vision, machine
            learning, data visualization and data ethics.
          </p>
        </div>

        <div className="mt-8">
          <Section title="Education" />
          {education.map((o, i) => (
            <EducationItem key={i} className="mt-2 px-1 text-justify" {...o} />
          ))}
        </div>

        <div className="mt-8">
          <Section title="Professional Experience" />
          {experience.map((o, i) => (
            <Experience key={i} className="mt-2 px-1 text-justify" {...o} />
          ))}
        </div>

        <div className="mt-8">
          <Section title="Teaching Experience" />
          {teaching.map((o, i) => (
            <Teaching key={i} className="mt-2 px-1 text-justify" {...o} />
          ))}
        </div>
      </Page>

      <Page>
        <div className="mt-8">
          <Section title="Publications" />
          <ul className="mt-2 ml-4 list-outside list-disc px-1">
            {publications.map((o, i) => (
              <Publication key={i} className="mt-1 text-justify" {...o} />
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Section title="Skills" />
          <ul className="mt-1 ml-4 list-outside list-disc px-1 text-justify">
            <li className="mt-1">
              Knowledge and active research of the current state of the art on
              deep learning and computer vision.
            </li>
            <li className="mt-1">
              Advance skill on Python building data pipelines, machine learning
              models, web servers and open software development.
            </li>
            <li className="mt-1">
              Experience using Rust for CLI applications, backend servers, web
              scrapping, WebAssembly, Python bindings and high-performance use
              cases like data pipelines.
            </li>
            <li className="mt-1">
              Experience building data visualization and interactive dashboards
              using Python and JavaScript (React, D3, Threejs).
            </li>
            <li className="mt-1">
              <span className="font-medium">Main programming languages:</span>{' '}
              Python, Rust, Julia and JS/Typescript.
            </li>
            <li className="mt-1">
              <span className="font-medium">Additional skills:</span> message
              queues (Kafka, RabbitMQ, ZeroMQ), spatial data (PostGIS).
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <Section title="Languages" />
          <ul className="mt-2 ml-4 list-outside list-disc">
            <li>Spanish (native)</li>
            <li>English (fluent)</li>
          </ul>
        </div>
      </Page>
    </div>
  );
};

export default CV;
