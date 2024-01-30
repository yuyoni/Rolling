import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 24.4rem;
  height: 4rem;
  margin-bottom: 4.5rem;
`;

export const ButtonOrigin = styled.button`
  display: flex;
  width: 12.2rem;
  height: 100%;
  padding: 0.7rem 1.6rem;
  border-radius: 0.6rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
`;

export const ColorButton = styled(ButtonOrigin)`
  ${({ $background }) =>
    $background === 'color'
      ? `color: var(--purple-600, #9935FF); border: 0.2rem solid var(--purple-600, #9935FF); border-radius: 0.375rem;`
      : `background-color: var(--gray-100, #F6F6F6);`}
`;

export const ImageButton = styled(ButtonOrigin)`
  ${({ $background }) =>
    $background === 'image'
      ? `color: var(--purple-600, #9935FF); border: 0.2rem solid var(--purple-600, #9935FF); border-radius: 0.375rem;`
      : `background-color: var(--gray-100, #F6F6F6);`}
`;
