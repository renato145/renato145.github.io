import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { navigate } from '@reach/router';
import { Index } from 'elasticlunr';
import { ForceGraph2D } from 'react-force-graph';
import styled from 'styled-components';
import { Form, FormControl } from 'react-bootstrap';
import { max, forceCollide } from 'd3';
import kebabCase from 'lodash/kebabCase';
import { useDimensions } from '../utils/useDimensions';

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
  const { ref: viewRef, width: viewWidth } = useDimensions();
  const ref = useRef();
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [results, setResults] = useState([]);
  const [highlightLinks, setHighlightLinks] = useState([]);
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

  useEffect(() => {
    const { nodes: tmpNodes } = graphData;
    const newNodes = results.map((d) => d.id);
    const newTags = [...new Set(results.map((d) => d.tags).flat())];
    const nodes = tmpNodes.filter(
      (d) => newNodes.includes(d.id) || newTags.includes(d.id)
    );
    const currentNodes = nodes.map((d) => d.id);

    results
      .filter((d) => !currentNodes.includes(d.id))
      .forEach((d) => {
        nodes.push({
          id: d.id,
          name: d.title.replace('-', ' '),
          type: d.slug ? 'blog' : 'repo',
          link: d.slug ?? `https://github.com/renato145/${d.name}`,
        });
      });

    newTags
      .filter((d) => !currentNodes.includes(d))
      .forEach((d) => {
        nodes.push({
          id: d,
          name: d.replace('-', ' '),
          type: 'tag',
          link: `/tags/${kebabCase(d)}`,
        });
      });

    const links = [];
    results.forEach((d) => {
      d.tags.forEach((tag) => {
        links.push({
          source: tag,
          target: d.id,
        });
      });
    });

    setGraphData({ nodes, links });
  }, [results]);

  const handleNodeHover = (node) => {
    if (node) {
      const links = graphData.links
        .filter((d) => d.source.id === node.id || d.target.id === node.id)
        .map((d) => d.index);
      setHighlightLinks(links);
    } else {
      setHighlightLinks([]);
    }
  };

  return (
    <div ref={viewRef}>
      <SearchInput>
        <Link to="/search" style={{fontSize: '0.8em'}}>Go back to normal search</Link>
        <FormControl type="text" placeholder="Search" onChange={search} />
      </SearchInput>
      <ForceGraph2D
        ref={ref}
        width={viewWidth}
        height={viewWidth * 0.5}
        backgroundColor="#eee"
        graphData={graphData}
        linkCurvature={0.25}
        onNodeClick={(node) => {
          if (node.type === 'repo') window.open(node.link);
          else navigate(node.link);
        }}
        onNodeHover={handleNodeHover}
        linkHoverPrecision={15}
        linkWidth={(d) => (highlightLinks.includes(d.index) ? 3 : 2)}
        linkColor={(d) => (highlightLinks.includes(d.index) ? '#888' : '#ccc')}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const { x, y, name, type } = node;
          const maxWidth = 60;
          const fontSize = (type === 'tag' ? 14 : 16) / globalScale;
          const padding = (type === 'tag' ? 0.6 : 0.5) * fontSize;
          const linePadding = 0.1 * fontSize;
          ctx.font =
            (type === 'tag' ? 'bold ' : '') + `${fontSize}px Sans-Serif`; // This needs to be set before calculating measures
          const { lines, measures } = getTextWithMeasures(
            name,
            ctx,
            maxWidth,
            fontSize,
            padding,
            linePadding
          );

          ctx.fillStyle =
            type === 'tag' ? 'rgba(147, 0, 58, 0.7)' : 'rgba(0, 66, 157, 0.7)';
          ctx.fillRect(x - measures[0] / 2, y - measures[1] / 2, ...measures);

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#fff';
          lines.forEach((line, i) =>
            ctx.fillText(
              line,
              x,
              y + padding * 2 + i * (linePadding + fontSize) - measures[1] / 2
            )
          );
        }}
        enableZoomPanInteraction={true}
      />
    </div>
  );
};
