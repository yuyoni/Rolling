import styled from 'styled-components';

const ButtonStyle = styled.button`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;
  padding: 1.4rem 2.4rem;
  border-radius: 1.2rem;
  display: flex;
  text-align: center;
  color: var(--white, #fff);
  background: var(--Purple-600, #9935ff);
  cursor: pointer;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  &:disabled {
    background: var(--gray-300, #ccc);
  }
`;

export default ButtonStyle;
