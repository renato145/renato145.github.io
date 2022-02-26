import React, { useState, useCallback, useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Index } from 'elasticlunr';
import { Link } from 'gatsby';
import { ascending } from 'd3';
import { TagList } from './TagList';

export const Search: React.FC = () => {
  const indexQuery = useStaticQuery(
    graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `
  ).siteSearchIndex.index;
  const [results, setResults] = useState([]);
  const index = useMemo(() => Index.load<any>(indexQuery), [indexQuery]);

  const search = useCallback(
    (event) => {
      const query = event.target.value;
      setResults(
        index
          .search(query, { expand: true })
          .map(({ ref }) => index.documentStore.getDoc(ref))
      );
    },
    [index]
  );

  return (
    <>
      <input
        className="mt-1 mb-2 block w-full appearance-none rounded border border-gray-300 bg-white py-2 px-4 leading-normal focus:outline-none focus:ring"
        type="text"
        placeholder="Search something"
        onChange={search}
      />
      <div className="flex flex-wrap">
        {results
          .sort((a, b) =>
            ascending(a.title.toLowerCase(), b.title.toLowerCase())
          )
          .map(({ id, title, name, tags, description, slug }) => {
            const isRepo = slug === undefined;
            return (
              <div
                key={id}
                className="w-full rounded px-4 py-3 hover:bg-blue-100 lg:w-1/2 xl:w-1/3"
              >
                <div>
                  {isRepo ? (
                    <a
                      href={`https://github.com/renato145/${name}`}
                      className="text-xl"
                    >
                      {title}
                    </a>
                  ) : (
                    <Link to={slug} className="text-xl">
                      {title}
                    </Link>
                  )}
                </div>
                <TagList tags={tags} linkClassName="text-xs" />
                <p className="mt-1 text-gray-700 transition duration-200 ease-out hover:text-gray-900">
                  {isRepo ? 'Github repository.' : description}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};
