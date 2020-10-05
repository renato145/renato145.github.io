import React, { useEffect, forwardRef, useState } from 'react';

interface Props {
  repo: string;
}

const Utterances = forwardRef<HTMLDivElement, Props>(
  ({ repo }, ref: any ) => {
    const [status, setStatus] = useState('pending');

    useEffect(() => {
      const script = document.createElement('script');
      script.onload = () => setStatus('success');
      script.onerror = () => setStatus('failed');
      script.async = true;
      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', repo);
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('label', 'blog');
      script.setAttribute('theme', 'github-light');
      script.setAttribute('crossorigin', 'anonymous');
      const elem = ref.current;
      elem.appendChild(script);

      return () => {
        while (elem.firstChild) {
          elem.removeChild(elem.firstChild);
        }
      };
    }, [ref, repo]);

    return (
      <div>
        {status === 'failed' && <div>Error. Please try again.</div>}
        {status === 'pending' && <div>Loading script...</div>}
        <div ref={ref} />
      </div>
    );
  }
);

export default Utterances;
