import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { navigate } from '@reach/router'
import { Index } from 'elasticlunr';
import { ForceGraph2D } from 'react-force-graph';
import styled from 'styled-components';
import { Form, FormControl } from 'react-bootstrap';
import { max, forceCollide } from 'd3';
import kebabCase from 'lodash/kebabCase';
import {useDimensions} from '../utils/useDimensions';

const SearchInput = styled(Form)`
  margin-top: 0.5em;
  margin-bottom: 1em;
`;

const getTextWithMeasures = (
  text,
  ctx,
  maxWidth,
  fontSize = 12,
  padding = 0,
  linePadding = 0,
  wrap = true
) => {
  const words = text.split(' ');
  const widths = words.map((d) => ctx.measureText(d).width);
  let lines = [];
  let width = 0;
  let line = '';
  widths.forEach((w, i) => {
    const word = words[i];
    width += w;
    if (width > maxWidth) {
      lines.push(line);
      line = word;
      width = w;
    } else {
      line += (line.length === 0 ? '' : ' ') + word;
    }
  });
  lines.push(line);
  lines = lines.filter((d) => d.length > 0);

  const finalWidth = wrap
    ? max(lines.map((d) => ctx.measureText(d).width))
    : maxWidth;

  let height = lines.length * fontSize;
  if (lines.length > 1) height += linePadding * (lines.length - 1);

  const measures = [finalWidth, height].map((d) => d + 2 * padding);
  return { lines, measures };
};

export const SearchGraph = () => {
  const indexQuery = useStaticQuery(
    graphql`
      query SearchGraphIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `
  ).siteSearchIndex.index;
  const { ref: viewRef, width: viewWidth, height: viewHeight } = useDimensions();
  const ref = useRef();
  const [results, setResults] = useState([]);
  const index = useMemo(() => Index.load(indexQuery), [indexQuery]);

  useEffect(() => {
    ref.current.d3Force('collide', forceCollide(35));
  }, []);

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

  const graphData = useMemo(() => {
    const nodes = [];
    const links = [];
    results.forEach((d) => {
      nodes.push({
        id: d.id,
        name: d.title.replace('-', ' '),
        type: d.slug ? 'blog' : 'repo',
        link: d.slug ?? `https://github.com/renato145/${d.name}`,
      });
      d.tags.forEach((tag) => {
        links.push({
          source: tag,
          target: d.id,
        });
      });
    });
    const tags = new Set(results.map((d) => d.tags).flat());
    tags.forEach((d) => {
      nodes.push({
        id: d,
        name: d.replace('-', ' '),
        type: 'tag',
        link: `/tags/${kebabCase(d)}`,
      });
    });

    return { nodes, links };
  }, [results]);

  return (
    <div ref={viewRef}>
      <SearchInput>
        <FormControl type="text" placeholder="Search" onChange={search} />
      </SearchInput>
      <ForceGraph2D
        ref={ref}
        width={viewWidth}
        height={viewWidth*0.5}
        backgroundColor="#eee"
        graphData={graphData}
        linkCurvature={0.25}
        onNodeClick={(node) => {
          if (node.type === 'repo') window.open(node.link);
          else navigate(node.link);
        }}
        linkHoverPrecision={15}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const { x, y, name, type } = node;
          const maxWidth = 60;
          const fontSize = (type === 'tag' ? 14 : 16) / globalScale;
          const padding = 0.5 * fontSize;
          const linePadding = 0.1 * fontSize;
          ctx.font = (type==='tag' ? 'bold ' : '') + `${fontSize}px Sans-Serif`; // This needs to be set before calculating measures
          const { lines, measures } = getTextWithMeasures(
            name,
            ctx,
            maxWidth,
            fontSize,
            padding,
            linePadding
          );

          ctx.fillStyle =
            type === 'tag'
              ? 'rgba(147, 0, 58, 0.7)'
              : 'rgba(0, 66, 157, 0.7)';
          ctx.fillRect(
            x - measures[0] / 2,
            y - measures[1] / 2,
            ...measures
          );

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#fff';
          lines.forEach((line, i) =>
            ctx.fillText(line, x, y + padding*2 + i * (linePadding + fontSize) - measures[1]/2)
          );
        }}
        enableZoomPanInteraction={false}
      />
    </div>
  );
};
