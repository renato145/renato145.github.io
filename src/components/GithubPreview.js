import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import TagList from './TagList';
import './GithubPreview.css';

const GithubPreview = ({ data }) => {
  const { homepageUrl, url, imgUrl, name, tags, description, updatedAt } = data;

  return (
    <div className="col mb-3">
      <Card className="experiment-card">
        {imgUrl && (
          <a href={homepageUrl || url} target="_black">
            <Card.Img variant="top" className="github-image" src={imgUrl} />
          </a>
        )}
        <Card.Body>
          <Card.Title className="experiment-card-title mb-0">{name}</Card.Title>
          <TagList tags={tags} />
          <Card.Text className="mt-2">{description}</Card.Text>
        </Card.Body>
        <div className="experiment-card-links">
          {url && (
            <Card.Link href={url} target="_black">
              Go to code
            </Card.Link>
          )}
          {homepageUrl && (
            <Card.Link href={homepageUrl} target="_black">
              View
            </Card.Link>
          )}
        </div>
        <Card.Footer>
          {updatedAt ? (
            <small className="text-muted">
              Last updated:{' '}
              {moment(updatedAt).calendar(null, {
                sameElse: 'DD/MM/YYYY',
              })}
            </small>
          ) : (
            <small className="text-muted">-</small>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default GithubPreview;
