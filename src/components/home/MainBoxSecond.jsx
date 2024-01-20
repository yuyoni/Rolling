import MainTextBox from './MainTextBox';

import * as S from './MainBox.style';

function MainBoxSecond() {
  return (
    <div>
      <S.MainSecondBox>
        <div>
          <h2>세컨드 박스</h2>
        </div>
        <MainTextBox
          num="02"
          text="서로에게 이모지로 감정을 표현해보세요"
          subText="롤링 페이퍼에 이모지를 추가할 수 있어요."
        />
      </S.MainSecondBox>
    </div>
  );
}

export default MainBoxSecond;
