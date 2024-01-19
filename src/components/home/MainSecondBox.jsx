import styled from 'styled-components';
import MainTextBox from './MainTextBox';

function MainSecondBox() {
  return (
    <div>
      <MainBox>
        <div>
          <h2>세컨드 박스</h2>
        </div>
        <MainTextBox
          num="02"
          text="서로에게 이모지로 감정을 표현해보세요"
          subText="롤링 페이퍼에 이모지를 추가할 수 있어요."
        />
      </MainBox>
    </div>
  );
}

export default MainSecondBox;

const MainBox = styled.div`
  display: flex;
  padding: 60px 192px 60px 0px;
  align-items: flex-start;

  border-radius: 16px;
  background: var(--Surface, #f6f8ff);
`;
