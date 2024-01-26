import styled from 'styled-components';
import { useContext } from 'react';
import ColorImageContext from '../../contexts/ColorImageContext';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 15.25rem;
  height: 2.5rem;
  margin-bottom: 2.18rem;
`;

const ButtonOrigin = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  align-items: center;
  justify-content: center;
  color: var(--Purple-700, #861dee);
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem;
  letter-spacing: -0.01rem;
`;

const ColorButton = styled(ButtonOrigin)`
  ${({ $background }) =>
    $background === 'color'
      ? `color: var(--purple-600, #9935FF); border: 2px solid var(--purple-600, #9935FF); border-radius: 0.375rem;`
      : `background-color: var(--gray-100, #F6F6F6);`}
`;

const ImageButton = styled(ButtonOrigin)`
  ${({ $background }) =>
    $background === 'image'
      ? `color: var(--purple-600, #9935FF); border: 2px solid var(--purple-600, #9935FF); border-radius: 0.375rem;`
      : `background-color: var(--gray-100, #F6F6F6);`}
`;

export default function BackgroundSelector() {
  const { background, setBackground } = useContext(ColorImageContext);

  return (
    <ButtonWrapper>
      <ColorButton
        onClick={() => {
          setBackground('color');
        }}
        $background={background}
        type="button"
      >
        컬러
      </ColorButton>
      <ImageButton
        onClick={() => {
          setBackground('image');
        }}
        $background={background}
        type="button"
      >
        이미지
      </ImageButton>
    </ButtonWrapper>
  );
}
