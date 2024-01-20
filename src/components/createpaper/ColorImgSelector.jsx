import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
`;

export default function ColorImgSelector() {
  return (
    <>
      <Button />
      <Button />
      <Button />
      <Button />
    </>
  );
}
