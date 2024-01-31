import { useContext } from 'react';
import { ColorImageContext } from '../../contexts/ColorImageContext';
import * as S from './BackgroundSelector.style';

export default function BackgroundSelector() {
  const { background, setBackground } = useContext(ColorImageContext);

  return (
    <S.ButtonWrapper>
      <S.ColorButton
        onClick={() => {
          setBackground('color');
        }}
        $background={background}
        type="button"
      >
        컬러
      </S.ColorButton>
      <S.ImageButton
        onClick={() => {
          setBackground('image');
        }}
        $background={background}
        type="button"
      >
        이미지
      </S.ImageButton>
    </S.ButtonWrapper>
  );
}
