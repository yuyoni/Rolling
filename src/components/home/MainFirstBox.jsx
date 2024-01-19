import styled from 'styled-components';
import MainTextBox from './MainTextBox';

function MainFirstBox() {
  return (
    <MainBox>
      <MainTextBox
        num="01"
        text="누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요"
        subText="로그인 없이 자유롭게 만들어요"
      />
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
