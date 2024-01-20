import ProfileMen from '../../assetes/HomeItem/profile1.png';
import MainImgItemBox from './MainImgItemBox';
import MainImgBox from './MainImgBox';
import MainTextBox from './MainTextBox';

import * as S from './MainBox.style';

function MainBoxFirst() {
  const FirstProfile = ProfileMen;
  return (
    <S.MainFirstBox>
      <MainTextBox
        num="01"
        text="누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요"
        subText="로그인 없이 자유롭게 만들어요"
      />
      <S.MainItemContainer>
        <MainImgItemBox
          img={FirstProfile}
          name="김선영"
          rel="동료"
          content="안녕하세요"
          date="2024.01.20"
        />
        <MainImgItemBox
          img={FirstProfile}
          name="김선영"
          rel="동료"
          content="안녕하세요"
          date="2024.01.20"
        />
        <MainImgBox />
      </S.MainItemContainer>
    </S.MainFirstBox>
  );
}

export default MainBoxFirst;
