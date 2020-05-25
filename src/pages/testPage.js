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
    </Layout>
  );
};

export default TestPage;
