import styled from 'styled-components';
import LinkButton from '../components/Button/LinkButton';

export default function Home() {
  return (
    <div>
      <MainArea>
        <MainContainer>
          <div>홈화면1-1</div>
          <div>홈화면1-2</div>
        </MainContainer>
        <div>홈화면2</div>
      </MainArea>

      <LinkButton value="구경해보기" link="/list" />
    </div>
  );
}

const MainArea = styled.div`
  display: flex;
  // width: 1200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

const MainContainer = styled.div`
  display: flex;
  padding: 60px 0px 60px 60px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 152px;

  border-radius: 16px;
  background: var(--Surface, #f6f8ff);
`;
