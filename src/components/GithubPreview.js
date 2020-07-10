import React from 'react';
import moment from 'moment';
import { TagList } from './TagList';

export const GithubPreview = ({ data, ...props }) => {
  const { homepageUrl, url, imgUrl, name, tags, description, updatedAt } = data;

  return (
    <div {...props}>
      <div className="w-full p-1 transition duration-150 rounded border shadow-sm hover:shadow-md">
        {imgUrl && (
          <a href={homepageUrl || url} target="_black" rel="noopener">
            <img className="" src={imgUrl} alt={name} />
          </a>
        )}

        <div className="mt-0 px-3 pb-2">
          <div>
            {updatedAt && (
              <small className="text-gray-600">
                Last updated:{' '}
                {moment(updatedAt).calendar(null, {
                  sameElse: 'DD/MM/YYYY',
                })}
              </small>
            )}
          </div>
          <div className="text-xl font-semibold">{name}</div>
          <TagList className="text-xs" tags={tags} />
          <div className="mt-1">{description}</div>
          <div className="mt-4 flex flex-wrap justify-between">
            {url && (
              <a href={url} target="_black" rel="noopener">
                Go to code
              </a>
            )}
            {homepageUrl && (
              <a href={homepageUrl} target="_black" rel="noopener">
                View
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
