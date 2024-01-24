import styled from 'styled-components';

const ButtonStyle = styled.button`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: -0.18px;
  border-radius: 1.2rem;
  padding: 1.4rem 2.4rem;
  font-style: normal;
  text-align: center;
  color: var(--white, #fff);
  border: none;
  background: var(--purple-600, #9935ff);

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
      outline: 2px solid var(--purple-900, #5603a7);
      background: var(--purple-800, #6e0ad1);
    }
  }
`;

export default ButtonStyle;
