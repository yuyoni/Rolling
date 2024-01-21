import { useState } from 'react';
import styled from 'styled-components';
import check from '../../assetes/createpaper/checkbgimg.svg';
import desert from '../../assetes/createpaper/desert.jpg';
import basket from '../../assetes/createpaper/basket.jpg';
import mokoko from '../../assetes/createpaper/mokoko.png';
import sky from '../../assetes/createpaper/sky.jpg';

const ButtonOrigin = styled.button`
  display: flex;
  width: 10rem;
  height: 10rem;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
`;

const Button = styled(ButtonOrigin)`
  background: ${({ $toggle }) =>
    $toggle === 'collor' ? `var(--orange-400, #ff922b)` : `url(${desert})`};
`;

const Button2 = styled(ButtonOrigin)`
  background: ${({ $toggle }) =>
    $toggle === 'collor' ? `var(--purple-200, #ECD9FF)` : `url(${basket})`};
`;

const Button3 = styled(ButtonOrigin)`
  background: ${({ $toggle }) =>
    $toggle === 'collor' ? `var( --Blue-200, #B1E4FF)` : `url(${mokoko})`};
`;

const Button4 = styled(ButtonOrigin)`
  background: ${({ $toggle }) =>
    $toggle === 'collor' ? `var(--Green-200, #D0F5C3)` : `url(${sky})`};
`;

export default function ColorImgSelector({ toggle }) {
  const [checkbutton, setcheckbutton] = useState('0');
  return (
    <>
      <Button
        onClick={() => {
          setcheckbutton('1');
        }}
        $toggle={toggle}
      >
        {checkbutton === '1' ? <img src={check} alt="check" /> : null}
      </Button>
      <Button2
        onClick={() => {
          setcheckbutton('2');
        }}
        $toggle={toggle}
      >
        {checkbutton === '2' ? <img src={check} alt="check" /> : null}
      </Button2>
      <Button3
        $toggle={toggle}
        onClick={() => {
          setcheckbutton('3');
        }}
      >
        {checkbutton === '3' ? <img src={check} alt="check" /> : null}
      </Button3>
      <Button4
        $toggle={toggle}
        onClick={() => {
          setcheckbutton('4');
        }}
      >
        {checkbutton === '4' ? <img src={check} alt="check" /> : null}
      </Button4>
    </>
  );
}
