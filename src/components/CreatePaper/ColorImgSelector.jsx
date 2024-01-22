
import { useState } from 'react';
import styled from 'styled-components';
import basket from '../../assetes/images/basket.jpg';
import check from '../../assetes/images/checkbgimg.svg';
import desert from '../../assetes/images/desert.jpg';
import mokoko from '../../assetes/images/mokoko.png';
import sky from '../../assetes/images/sky.jpg';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonOrigin = styled.button`
  display: flex;
  width: 10rem;
  height: 10rem;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  display: flex;
  width: 2.75rem;
  height: 2.75rem;
`;

const Button = styled(ButtonOrigin)`
  background: ${({ $toggle }) =>
    $toggle === 'collor' ? `var(--orange-200, #FFE2AD)` : `url(${desert})`};
  background-size: cover; //오리진으로 올릴시 백그라운드 속성 순위에 밀려서 적용되지않음
`;

const Button2 = styled(ButtonOrigin)`
  background: ${({ $toggle }) =>
    $toggle === 'collor' ? `var(--purple-200, #ECD9FF)` : `url(${basket})`};
  background-size: cover;
`;

const Button3 = styled(ButtonOrigin)`
  background: ${({ $toggle }) =>
    $toggle === 'collor' ? `var( --Blue-200, #B1E4FF)` : `url(${mokoko})`};
  background-size: cover;
`;

const Button4 = styled(ButtonOrigin)`
  background: ${({ $toggle }) =>
    $toggle === 'collor' ? `var(--Green-200, #D0F5C3)` : `url(${sky})`};
  background-size: cover;
`;

export default function ColorImgSelector({ toggle }) {
  const [checkbutton, setcheckbutton] = useState('0');
  return (
    <Wrap>
      <Button
        onClick={() => {
          setcheckbutton('1');
        }}
        $toggle={toggle}
      >
        {checkbutton === '1' && <Img src={check} alt="check" />}
      </Button>
      <Button2
        onClick={() => {
          setcheckbutton('2');
        }}
        $toggle={toggle}
      >
        {checkbutton === '2' && <Img src={check} alt="check" />}
      </Button2>
      <Button3
        $toggle={toggle}
        onClick={() => {
          setcheckbutton('3');
        }}
      >
        {checkbutton === '3' && <Img src={check} alt="check" />}
      </Button3>
      <Button4
        $toggle={toggle}
        onClick={() => {
          setcheckbutton('4');
        }}
      >
        {checkbutton === '4' && <Img src={check} alt="check" />}
      </Button4>
    </Wrap>
  );
}
