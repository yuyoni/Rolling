import styled from 'styled-components';
import LinkButton from '../components/Button/LinkButton';
import MainFirstBox from '../components/home/MainFirstBox';
import MainSecondBox from '../components/home/MainSecondBox';

export default function Home() {
  return (
    <MainArea>
      <MainContainer>
        <MainFirstBox />

        <MainSecondBox />

        <div>홈화면2</div>
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
  align-items: flex-start;
  gap: 30px;
`;
