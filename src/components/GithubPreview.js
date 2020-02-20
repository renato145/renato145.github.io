import React, { useState, useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import moment from 'moment';
import TagList from './TagList';
import { unCamelCase, singleSpace, titleCase } from './utils';
import './GithubPreview.css';

const formatName = name => titleCase(singleSpace(unCamelCase(name.replace(/[-_]/g, ' '))));

const sendRequest = ({ url, opts, fallback, onSuccess, onError }) => {
  fetch(url, opts)
    .then(res => ( 
      res.ok
      ? res.json()
      : fallback
    ))
    .then(onSuccess)
    .catch(onError);
};

const GithubPreview = ({ user, repo }) => {
  const [ data, setData ] = useState();
  const gitPath = `${user}/${repo.name}`;
  const [ showImg, setShowImg ] = useState(false);

  useEffect(() => {
    sendRequest({
      url: `https://api.github.com/repos/${gitPath}`,
      onSuccess: d => setData({
        name: repo.showName || formatName(d.name),
        url: d.html_url,
        homepage: d.homepage,
        description: d.description,
        updated_at: d.updated_at,
        language: d.language,
      }),
      fallback: {
        name: repo.showName || formatName(repo.name),
        html_url: `https://github.com/${gitPath}`,
        description: 'Github repository not found.',
      },
    });
  }, [ gitPath, repo ]);

  return (
    <div className='col mb-3'>
      <Card className='experiment-card'>
        { data 
          ? (<>
              <a
                style={{ display : showImg ? 'inherit' : 'none' }}
                href={ data.homepage || data.url }
                target='_black'
              >
                <Card.Img
                  variant='top'
                  src={`https://github.com/${gitPath}/raw/master/img.png`}
                  onLoad={() => setShowImg(true)}
                />
              </a>
              <Card.Body>
                <Card.Title className='experiment-card-title mb-0'>{data.name}</Card.Title>
                <TagList tags={repo.tags} />
                <Card.Text className='mt-2'>{data.description}</Card.Text>
              </Card.Body>
              <div className='experiment-card-links'>
                { data.url && (<Card.Link href={data.url} target='_black'>Go to code</Card.Link>) }
                { data.homepage && (<Card.Link href={data.homepage} target='_black'>View</Card.Link>) }
              </div>
              <Card.Footer>
                { data.updated_at 
                  ? (
                    <small className='text-muted'>
                      Last updated: {moment(data.updated_at).calendar(null, { sameElse: 'DD/MM/YYYY' })}
                    </small>
                  )
                  : <small className='text-muted'>-</small>
                }
              </Card.Footer>
            </>)
          : (
            <>
              <Card.Body>
                <Card.Title className='experiment-card-title mb-0'>{repo.showName || repo.name}</Card.Title>
                <TagList tags={repo.tags} />
                <div className='experiment-card-spinner'>
                  <Spinner animation='border' />
                </div>
              </Card.Body>
              <div className='experiment-card-links'>
                <Card.Link href={`https://github.com/${gitPath}`} target='_black'>Go to code</Card.Link>
              </div>
              <Card.Footer>
                <small className='text-muted'>-</small>
              </Card.Footer>
            </>
          )
        }
      </Card>
    </div>
  );
};

export default GithubPreview;
