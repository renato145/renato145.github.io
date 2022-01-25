import React, { HTMLProps } from 'react';
import { TagList } from './TagList';
import { RepoInfo } from './Types';
import { formatRelativeDate } from '../utils';

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'data'> {
  data: RepoInfo;
}

export const GithubPreview: React.FC<Props> = ({ data, ...props }) => {
  const { homepageUrl, url, imgUrl, name, tags, description, updatedAt } = data;

  return (
    <div {...props}>
      <div className="w-full p-1 rounded border shadow-sm hover:shadow-xl">
        {imgUrl && (
          <a href={homepageUrl || url} target="_black" rel="noopener">
            <img className="" src={imgUrl} alt={name} />
          </a>
        )}

        <div className="mt-0 px-3 pb-2">
          <div>
            {updatedAt && (
              <small className="text-gray-500">
                Last updated:{' '}
                {formatRelativeDate(new Date(updatedAt), 'dd/MM/yyyy')}
              </small>
            )}
          </div>
          <div className="text-xl font-semibold">{name}</div>
          <TagList linkClassName="text-xs" tags={tags} />
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
