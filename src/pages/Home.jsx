import styled from 'styled-components';
import LinkButton from '../components/Button/LinkButton';

export default function Home() {
  return (
    <MainArea>
      <MainContainer>
        <MainFirstBox>
          <div>홈화면1-1</div>
          <div>홈화면1-2</div>
        </MainFirstBox>
        <MainSecondBox>
          <div>홈화면2</div>
        </MainSecondBox>
      </MainContainer>

      <LinkButton value="구경해보기" link="/list" />
    </MainArea>
  );
}

const MainArea = styled.div`
  width: 1920px;
  height: 1080px;
  background: #fff;
`;

const MainContainer = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-ite ms: flex-start;
  gap: 30px;   
  margin: 100px 360px 0 360px
`;

const MainFirstBox = styled.div`
  display: flex;
  padding: 60px 0px 60px 60px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 152px;

  border-radius: 16px;
  background: var(--Surface, #f6f8ff);
`;

const MainSecondBox = styled.div`
  display: flex;
  padding: 60px 192px 60px 0px;
  align-items: flex-start;

  border-radius: 16px;
  background: var(--Surface, #f6f8ff);
`;
