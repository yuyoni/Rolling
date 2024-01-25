import styled from 'styled-components';

const ButtonStyle = styled.button`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: -0.18px;
  padding: 1.4rem 2.4rem;
  border-radius: 1.2rem;
  font-style: normal;
  display: flex;
  text-align: center;
  color: var(--white, #fff);
  border: none;
  background: var(--purple-600, #9935ff);
  cursor: pointer;
  width: 45rem;
  justify-content: center;
  align-items: center;
  &:disabled {
    background: var(--gray-300, #ccc);
  }
`;

export default ButtonStyle;
