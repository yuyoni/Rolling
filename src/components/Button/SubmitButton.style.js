import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 45rem;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 2.4rem;
  border-radius: 1.2rem;
  border: none;
  text-align: center;
  color: var(--white, #fff);
  background: var(--Purple-600, #9935ff);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;

  &:disabled {
    background: var(--gray-300, #ccc);
    cursor: auto;
  }

  &:not(:disabled) {
    &:hover {
      background: var(--purple-700, #861dee);
      outline: none;
    }

    &:active {
      background: var(--purple-800, #6e0ad1);
      outline: none;
    }

    &:focus {
      outline: 0.2rem solid var(--purple-900, #5603a7);
      background: var(--purple-800, #6e0ad1);
    }
  }

  @media screen and (min-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1248px) {
    width: 100%;
  }
`;

export default ButtonStyle;
