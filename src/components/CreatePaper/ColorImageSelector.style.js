import styled from 'styled-components';
import desert from '../../assets/images/desert.jpg';
import mokoko from '../../assets/images/mokoko.png';
import sky from '../../assets/images/sky.jpg';
import basket from '../../assets/images/basket.jpg';

export const Wrap = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 1.6rem;
  flex-wrap: wrap;
`;

export const ButtonOrigin = styled.button`
  display: flex;
  width: 16.8rem;
  height: 16.8rem;
  padding: 1.2rem 1.6rem;
  border-radius: 1.6rem;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  display: flex;
  width: 4.4rem;
  height: 4.4rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10rem;
`;

export const Button = styled(ButtonOrigin)`
  background: ${({ $background }) =>
    $background === 'color' ? `var(--Orange-200, #FFE2AD)` : `url(${desert})`};
  background-size: cover; //오리진으로 올릴시 백그라운드 속성 순위에 밀려서 적용되지않음
`;

export const Button2 = styled(ButtonOrigin)`
  background: ${({ $background }) =>
    $background === 'color' ? `var(--Purple-200, #ECD9FF)` : `url(${basket})`};
  background-size: cover;
`;

export const Button3 = styled(ButtonOrigin)`
  background: ${({ $background }) =>
    $background === 'color' ? `var( --Blue-200, #B1E4FF)` : `url(${mokoko})`};
  background-size: cover;
`;

export const Button4 = styled(ButtonOrigin)`
  background: ${({ $background }) =>
    $background === 'color' ? `var(--Green-200, #D0F5C3)` : `url(${sky})`};
  background-size: cover;
`;
