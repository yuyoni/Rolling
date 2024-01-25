import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 15.25rem;
  height: 2.5rem;
`;

const ButtonOrigin = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  align-items: center;
  justify-content: center;
`;

const ColorButton = styled(ButtonOrigin)`
  ${({ $toggle }) =>
    $toggle === 'color'
      ? `color: var(--purple-600, #9935FF); border: 1px solid var(--purple-600, #9935FF)`
      : `none`}
`;

const ImageButton = styled(ButtonOrigin)`
  ${({ $toggle }) =>
    $toggle === 'image'
      ? `color: var(--purple-600, #9935FF); border: 1px solid var(--purple-600, #9935FF)`
      : `none`}
`;

export default function BackgroundSelector({ toggle, toggleChange }) {
  return (
    <ButtonWrapper>
      <ColorButton
        onClick={() => {
          if (toggle === 'image') toggleChange();
        }}
        $toggle={toggle}
      >
        컬러
      </ColorButton>
      <ImageButton
        onClick={() => {
          if (toggle === 'color') toggleChange();
        }}
        $toggle={toggle}
      >
        이미지
      </ImageButton>
    </ButtonWrapper>
  );
}
