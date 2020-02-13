import React, { useState, useEffect } from 'react';
import './GithubPreview.css';

const apiUrl = 'https://api.github.com/repos';

const GithubPreview = ({ user, repo }) => {
  const [ data, setData ] = useState();
  useEffect(() => {
    fetch(`${apiUrl}/${user}/${repo}`)
      .then(resolve => resolve.json())
      .then(d => {
        setData({
          name: d.name,
          url: d.html_url,
          homepage: d.homepage,
          description: d.description,
        });
      });
  }, [ user, repo ]);

  return (
    <>
      { data && (
        <>
          <p><b>{data.name}</b></p>
          <p>{data.url}</p>
          <p>{data.homepage}</p>
          <p>{data.description}</p>
        </>
      )}
    </>
  );
};

export default GithubPreview;
