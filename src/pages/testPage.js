import React from 'react';
import { Layout } from '../components/Layout';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
  className: 'tw-bg-black tw-text-white hover:tw-text-red-500',
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
      <button className="tw-text-lg tw-px-8 tw-py-2 tw-mt-3 tw-rounded tw-bg-gray-400 hover:tw-bg-black hover:tw-text-white">
        Success
      </button>
    </Layout>
  );
};

export default TestPage;
