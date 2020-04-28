import React, { useState, useCallback, useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Index } from 'elasticlunr';
import { Link } from 'gatsby';
import styled from 'styled-components';
import TagList from './TagList';
import { Form, FormControl } from 'react-bootstrap';

const SearchInput = styled(Form)`
  margin-top: 0.5em;
  margin-bottom: 1em;
`;

const SearchResults = styled.div``;

const OneResult = styled.div`
  padding: 0.75em 1em;
  margin: 0.35em 0em;
  transition: all 0.2s ease-out;

  &:hover {
    background: rgb(233, 244, 255);
  }
`;

const ResultLink = styled.div`
  & a {
    font-size: 1.3em;
  }
`;

const Description = styled.div`
  margin-top: 0.3em;
  transition: all 0.2s ease-out;
  color: #5a5a5a;
  ${OneResult}:hover & {
    color: #1a1a1a;
  }
`;

const Tags = styled.div`
  font-size: 0.75em;
`;

export const Search = () => {
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
  const index = useMemo(() => Index.load(indexQuery), [indexQuery]);

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
      <SearchInput>
        <FormControl type="text" placeholder="Search" onChange={search} />
      </SearchInput>
      <SearchResults>
        {results.map(({ id, title, name, tags, description, slug }) => {
          const isRepo = slug === undefined;
          return (
            <OneResult key={id}>
              <ResultLink>
                {isRepo ? (
                  <a href={`https://github.com/renato145/${name}`}>{title}</a>
                ) : (
                  <Link to={slug}>{title}</Link>
                )}
              </ResultLink>
              <Tags>
                <TagList tags={tags} />
              </Tags>
              <Description>{isRepo ? 'Github repository.' : description}</Description>
            </OneResult>
          );
        })}
      </SearchResults>
    </>
  );
};
