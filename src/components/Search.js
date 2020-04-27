import React, { useState, useCallback, useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Index } from 'elasticlunr';
import { Link } from 'gatsby';
import styled from 'styled-components';
import TagList from './TagList';
import { Form, FormControl } from 'react-bootstrap';

const SearchResults = styled.div`
  position: absolute;
  z-index: 1;

  & > div {
    background: rgba(241, 248, 255, 0.9);
    padding: 0.5em 1em;
  }

  & > div:hover {
    background: rgb(190, 222, 255);
  }

  & > div:last-child {
    border-radius: 0em 0em 0.5em 0.5em;
  }

`;

const Tags = styled.div`
  font-size: 1em;
`;

export const Search = (props) => {
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
    <div {...props}>
      <Form>
        <FormControl
          type="text"
          placeholder="Search"
          onChange={search}
          className="mr-sm-2"
        />
      </Form>
      {results.length > 0 && (
        <SearchResults>
          {results.map((page) => (
            <div key={page.id}>
              <Link to={'/' + page.path}>{page.title}</Link>
              <Tags>
                <TagList tags={page.tags} />
              </Tags>
            </div>
          ))}
        </SearchResults>
      )}
    </div>
  );
};
