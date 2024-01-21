import styled from 'styled-components';

const ButtonOrigin = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
`;

const CollorButton = styled(ButtonOrigin)`
  border: ${({ $toggle }) =>
    $toggle === 'collor' ? '1px solid var(--purple-600, #9935FF)' : 'none'};
`;
const ImgButton = styled(ButtonOrigin)`
  border: ${({ $toggle }) =>
    $toggle === 'img' ? '1px solid var(--purple-600, #9935FF)' : 'none'};
`;

export default function BackgroundSelector({ toggle, toggleChange }) {
  return (
    <>
      <CollorButton
        onClick={() => {
          if (toggle === 'img') toggleChange();
        }}
        $toggle={toggle}
      >
        컬러
      </CollorButton>
      <ImgButton
        onClick={() => {
          if (toggle === 'collor') toggleChange();
        }}
        $toggle={toggle}
      >
        이미지
      </ImgButton>
    </>
  );
}
