import styled from 'styled-components';

const ButtonStyle = styled.button`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: -0.18px;
  padding: 0.875rem 1.5rem;
  border-radius: 0.75rem;
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
  gap: 0.625rem;
  margin-top: 1.5rem;
  &:disabled {
    background: var(--gray-300, #ccc);
  }
`;

export default ButtonStyle;
