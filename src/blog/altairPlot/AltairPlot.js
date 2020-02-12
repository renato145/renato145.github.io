import React, { useRef, useEffect } from 'react';
import vegaEmbed from 'vega-embed';
import './AltairPlot.css';

const showError = (el, error) => {
  el.innerHTML = ('<div class="error">'
                  + '<p>JavaScript Error: ' + error.message + '</p>'
                  + "<p>This usually means there's a typo in your chart specification. "
                  + "See the javascript console for the full traceback.</p>"
                  + '</div>');
  throw error;
};

const embed_opt = {"mode": "vega-lite"};

const AltairPlot = ({ data, id }) => {
  const ref = useRef();
  useEffect(() => {
    vegaEmbed(`#${id}`, data, embed_opt)
        .catch(error => showError(ref.current, error));
  }, [ data, id ]);

  return (
    <div className='altair-plot overflow-auto'>
      <div
        id={id}
        ref={ref}
      />
    </div>
  );
};

export default AltairPlot;
