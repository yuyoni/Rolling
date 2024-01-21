import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  background-img: ${({ $toggle }) => {
    $toggle === 'collor' ? `assets/createpaper/bluecolorchip.svg` : `none`;
  }};
`;

export default function ColorImgSelector({ toggle, toggleChange }) {
  return (
    <>
      <Button $toggle={toggle} />
      <Button />
      <Button />
      <Button />
    </>
  );
}
