// import ProfileImageYH from '../../assetes/HomeItem/profile_img_yh.png';
// import ProfileImageSH from '../../assetes/HomeItem/profile_img_sh.png';
// import ProfileImageSY from '../../assetes/HomeItem/profile_img_sy.png';
// import MainItemBox from './MainItemBox';
// import MainItemBasicBox from './MainItemBasicBox';
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

      {/* <S.MainItemContainer>
        <MainItemBox
          profileImage={ProfileImageSH}
          recipientId="신승화"
          relationship="동료"
          content="아맞다 로그아웃🫢"
          createdAt="2024.01.20"
        />
        <MainItemBox
          profileImage={ProfileImageSY}
          recipientId="오설영"
          relationship="동료"
          content="오늘 '결석' 인원 안내드려요🙏🏻"
          createdAt="2024.01.20"
        />
        <MainItemBasicBox />
      </S.MainItemContainer> */}
    </S.MainBoxFirst>
  );
}
