import * as S from './MainItemBox.style';

import MousePointImage from '../../assetes/HomeItem/mouse-point.png';
import EllipseImage from '../../assetes/HomeItem/ellipse .svg';
import PlusImage from '../../assetes/HomeItem/plus.svg';

export default function MainItemBasicBox() {
  return (
    <S.BasicBox>
      <S.Image src={EllipseImage} alt="회색 동그라미 이미지" />
      <S.Image src={PlusImage} alt="더하기 이미지" />
      <S.MouseImage src={MousePointImage} alt="마우스포인터이미지" />
    </S.BasicBox>
  );
}
