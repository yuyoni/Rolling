import ProfileMan from '../../assetes/HomeItem/profile-man.png';
import MainItemBox from './MainItemBox';
import MainItemBasicBox from './MainItemBasicBox';
import MainTextBox from './MainTextBox';

import * as S from './MainBox.style';

export default function MainBoxFirst() {
  return (
    <S.MainBoxFirst>
      <MainTextBox
        number="01"
        text="누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요"
        subText="로그인 없이 자유롭게 만들어요"
      />
      <S.MainItemContainer>
        <MainItemBox
          profileImage={ProfileMan}
          recipientId="김선영"
          relationship="동료"
          content="안녕하세요"
          createdAt="2024.01.20"
        />
        <MainItemBox
          profileImage={ProfileMan}
          recipientId="김선영"
          relationship="동료"
          content="안녕하세요"
          createdAt="2024.01.20"
        />
        <MainItemBasicBox />
      </S.MainItemContainer>
    </S.MainBoxFirst>
  );
}
