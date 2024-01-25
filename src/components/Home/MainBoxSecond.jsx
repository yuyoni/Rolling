import MainTextBox from './MainTextBox';
import EmojiMainImage from '../../assets/HomeItem/emoji-main.png';

import * as S from './MainBox.style';

export default function MainBoxSecond() {
  return (
    <S.MainBoxSecond>
      {/* <S.MainImageBox> */}
      <S.Image src={EmojiMainImage} alt="이모지" />
      {/* </S.MainImageBox> */}
      <MainTextBox
        number="02"
        text="서로에게 이모지로 감정을 표현해보세요"
        subText="롤링 페이퍼에 이모지를 추가할 수 있어요."
      />
    </S.MainBoxSecond>
  );
}
