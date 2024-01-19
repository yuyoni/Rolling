import styled from 'styled-components';
import MainTextBox from './MainTextBox';
import MainItemBox from './MainItemBox';
import ProfileMen from '../../assetes/HomeItem/profile1.png';

function MainFirstBox() {
  const FirstProfile = ProfileMen;
  return (
    <MainBox>
      <MainTextBox
        num="01"
        text="누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요"
        subText="로그인 없이 자유롭게 만들어요"
      />
      <MainItemContainer>
        <MainItemBox
          img={FirstProfile}
          name="김선영"
          rel="동료"
          content="안녕하세요"
          date="2024.01.20"
        />
        <MainItemBox
          img={FirstProfile}
          name="김선영"
          rel="동료"
          content="안녕하세요"
          date="2024.01.20"
        />
      </MainItemContainer>
    </MainBox>
  );
}

export default MainFirstBox;

const MainBox = styled.div`
  display: flex;
  padding: 60px 0px 60px 60px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 152px;

  border-radius: 16px;
  background: var(--Surface, #f6f8ff);
`;

const MainItemContainer = styled.div`
  display: flex;
  gap: 10px;
`;
