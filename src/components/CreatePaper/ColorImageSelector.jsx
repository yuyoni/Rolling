import { useContext } from 'react';
import check from '../../assets/images/checkbgimg.svg';
import { ColorImageContext } from '../../contexts/ColorImageContext';
import * as S from './ColorImageSelector.style';

export default function ColorImageSelector() {
  const { color, setColor, background } = useContext(ColorImageContext);
  return (
    <S.Wrap>
      <S.Button
        type="button"
        // 버튼의 기본타입은 submit임 button으로 설정해서 서브밋을막음
        onClick={() => {
          setColor('beige');
        }}
        $background={background}
      >
        {color === 'beige' && <S.Img src={check} alt="check" />}
      </S.Button>
      <S.Button2
        type="button"
        onClick={() => {
          setColor('purple');
        }}
        $background={background}
      >
        {color === 'purple' && <S.Img src={check} alt="check" />}
      </S.Button2>
      <S.Button3
        type="button"
        $background={background}
        onClick={() => {
          setColor('blue');
        }}
      >
        {color === 'blue' && <S.Img src={check} alt="check" />}
      </S.Button3>
      <S.Button4
        type="button"
        $background={background}
        onClick={() => {
          setColor('green');
        }}
      >
        {color === 'green' && <S.Img src={check} alt="check" />}
      </S.Button4>
    </S.Wrap>
  );
}
