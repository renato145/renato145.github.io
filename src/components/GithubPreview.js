import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';
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
          updated_at: d.updated_at,
          language: d.language,
        });
      });
  }, [ user, repo ]);

  return (
    <>
      { data && (
        <div className='col mb-3'>
          <Card className='experiment-card'>
            {/* <Card.Img variant='top' src='...' /> */}
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
            </Card.Body>
            <div className='experiment-card-links'>
              <Card.Link href={data.url} target='_black'>Go to code</Card.Link>
              { data.homepage && (<Card.Link href={data.homepage} target='_black'>View</Card.Link>) }
            </div>
            <Card.Footer>
              <small className='text-muted'>Last updated: {moment(data.updated_at).calendar()}</small>
            </Card.Footer>
          </Card>
        </div>
      )}
    </>
  );
};

export default GithubPreview;
