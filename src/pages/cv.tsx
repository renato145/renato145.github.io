import React from 'react';
import SEO from '../components/Seo';

const CV: React.FC = () => {
  return (
    <div
      className="mx-auto bg-white p-8"
      style={{ width: '21cm', height: '29.7cm' }}
    >
      <SEO title="CV" description="My CV" />

      <p>Renato Hermoza Aragonés</p>
      <div>mail / location / git</div>

      <div>
        <p>Education</p>
        <p>...</p>
      </div>

      <div>
        <p>Resume</p>
        <p>...</p>
      </div>

      <div>
        <p>Experience</p>
        <p>...</p>
      </div>

      <div>
        <p>Knowledge</p>
        <p>...</p>
      </div>

      <div>
        <p>More things</p>
        <p>...</p>
      </div>
    </div>
  );
};

export default CV;
