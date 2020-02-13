import React, { useState, useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import moment from 'moment';
import { unCamelCase, singleSpace, titleCase } from './utils';
import './GithubPreview.css';

const formatName = name => titleCase(singleSpace(unCamelCase(name.replace(/[-_]/g, ' '))));

const apiUrl = 'https://api.github.com/repos';

const GithubPreview = ({ user, repo }) => {
  const [ data, setData ] = useState();
  useEffect(() => {
    fetch(`${apiUrl}/${user}/${repo}`)
      .then(resolve => resolve.json())
      .then(d => {
        setData({
          name: formatName(d.name),
          url: d.html_url,
          homepage: d.homepage,
          description: d.description,
          updated_at: d.updated_at,
          language: d.language,
        });
      });
  }, [ user, repo ]);

  return (
    <div className='col mb-3'>
      <Card className='experiment-card'>
        {/* <Card.Img variant='top' src='...' /> */}
        { data 
          ? (<>
              <Card.Body>
                <Card.Title className='experiment-card-title'>{data.name}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
              </Card.Body>
              <div className='experiment-card-links'>
                <Card.Link href={data.url} target='_black'>Go to code</Card.Link>
                { data.homepage && (<Card.Link href={data.homepage} target='_black'>View</Card.Link>) }
              </div>
              <Card.Footer>
                <small className='text-muted'>
                  Last updated: {moment(data.updated_at).calendar(null, { sameElse: 'DD/MM/YYYY' })}
                </small>
              </Card.Footer>
            </>)
          : <Card.Body className='experiment-card-spinner'><Spinner animation='border' /></Card.Body>
        }
      </Card>
    </div>
  );
};

export default GithubPreview;
