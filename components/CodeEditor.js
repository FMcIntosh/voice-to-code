import dynamic from 'next/dynamic';
import styled from 'styled-components';

const AceEditor = dynamic(import('react-ace'), { ssr: false });

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export default ({ loaded }) => {
  return (
    <PageWrapper>
      <Wrapper>
        <AceEditor width={window.innerWidth / 2 > 500 ? 500 : window.innerWidth / 2} />
      </Wrapper>
      <Wrapper>
        <AceEditor width={window.innerWidth / 2 > 500 ? 500 : window.innerWidth / 2} />
      </Wrapper>
    </PageWrapper>
  );
};
