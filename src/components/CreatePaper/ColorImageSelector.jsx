import { useContext } from 'react';
import styled from 'styled-components';
import basket from '../../assets/images/basket.jpg';
import check from '../../assets/images/checkbgimg.svg';
import desert from '../../assets/images/desert.jpg';
import mokoko from '../../assets/images/mokoko.png';
import sky from '../../assets/images/sky.jpg';
import ColorImageContext from '../../contexts/ColorImageContext';

// 리팩토링 고민중이라 아직 스타일 분리하지않음

const Wrap = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

const ButtonOrigin = styled.button`
  display: flex;
  width: 16.8rem;
  height: 16.8rem;
  padding: 1.2rem 1.6rem;
  border-radius: 1.6rem;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  display: flex;
  width: 4.4rem;
  height: 4.4rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10rem;
`;

const Button = styled(ButtonOrigin)`
  background: ${({ $background }) =>
    $background === 'color' ? `var(--Orange-200, #FFE2AD)` : `url(${desert})`};
  background-size: cover; //오리진으로 올릴시 백그라운드 속성 순위에 밀려서 적용되지않음
`;

const Button2 = styled(ButtonOrigin)`
  background: ${({ $background }) =>
    $background === 'color' ? `var(--Purple-200, #ECD9FF)` : `url(${basket})`};
  background-size: cover;
`;

const Button3 = styled(ButtonOrigin)`
  background: ${({ $background }) =>
    $background === 'color' ? `var( --Blue-200, #B1E4FF)` : `url(${mokoko})`};
  background-size: cover;
`;

const Button4 = styled(ButtonOrigin)`
  background: ${({ $background }) =>
    $background === 'color' ? `var(--Green-200, #D0F5C3)` : `url(${sky})`};
  background-size: cover;
`;

export default function ColorImageSelector() {
  const { color, setColor, background } = useContext(ColorImageContext);
  return (
    <Wrap>
      <Button
        type="button"
        // 버튼의 기본타입은 submit임 button으로 설정해서 서브밋을막음
        onClick={() => {
          setColor('beige');
        }}
        $background={background}
      >
        {color === 'beige' && <Img src={check} alt="check" />}
      </Button>
      <Button2
        type="button"
        onClick={() => {
          setColor('purple');
        }}
        $background={background}
      >
        {color === 'purple' && <Img src={check} alt="check" />}
      </Button2>
      <Button3
        type="button"
        $background={background}
        onClick={() => {
          setColor('blue');
        }}
      >
        {color === 'blue' && <Img src={check} alt="check" />}
      </Button3>
      <Button4
        type="button"
        $background={background}
        onClick={() => {
          setColor('green');
        }}
        // value={color === `green` && `green`}
      >
        {color === 'green' && <Img src={check} alt="check" />}
      </Button4>
      {/* 버튼 서브밋 속성에 함수를 넣어서 제어했어도 괜찮지않았을까? */}
    </Wrap>
  );
}
