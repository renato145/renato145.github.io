import React from 'react';
import Layout from '../components/Layout';
import tw, { styled } from 'twin.macro';

const Wrapper = styled.div`
  ${tw`bg-black text-white`};
`;

const TestPage = ({ location }) => {
  return (
    <Layout
      location={location}
      title={"A test page"}
      description="internal tests"
      headerConfig={{ title: 'header' }}
    >
      <Wrapper>
        This is a test
      </Wrapper>
      <button tw='text-lg px-8 py-2 mt-3 rounded bg-gray-400 hover:bg-black hover:text-white'>Success</button>
    </Layout>
  );
};

export default TestPage;
