import React from 'react';
import { Layout } from '../components/Layout';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
  className: 'bg-black text-white hover:text-red-500',
})``;

const TestPage = ({ location }) => {
  return (
    <Layout
      location={location}
      title={'A test page'}
      description="internal tests"
      headerConfig={{ title: 'header' }}
    >
      <Wrapper>This is a test</Wrapper>
      <button
        className="text-lg px-8 py-2 mt-3 rounded bg-gray-400 hover:bg-black hover:text-white"
      >
        Success
      </button>
    </Layout>
  );
};

export default TestPage;
