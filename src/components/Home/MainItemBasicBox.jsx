import * as S from './MainItemBox.style';

import MousePointImage from '../../assets/HomeItem/mouse-point.png';
import EllipseImage from '../../assets/HomeItem/ellipse.svg';
import PlusImage from '../../assets/HomeItem/plus.svg';

export default function MainItemBasicBox() {
  return (
    <S.BasicBox>
      <S.Image src={EllipseImage} alt="회색 동그라미 이미지" />
      <S.Image src={PlusImage} alt="더하기 이미지" />
      <S.MouseImage src={MousePointImage} alt="마우스포인터이미지" />
    </S.BasicBox>
  );
}
