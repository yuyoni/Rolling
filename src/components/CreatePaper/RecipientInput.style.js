import styled from 'styled-components';

export const ErrorStyle = styled.input`
  display: flex;
  width: 100%;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 1rem;
  border: ${({ $showError }) =>
    $showError
      ? '0.1rem solid var(--Error, #dc3a3a)'
      : '0.1rem solid var(--gray-300, #ccc)'};
  background: var(--White, #ffffff);
  border-radius: 0.8rem;
  margin-top: 1.2rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;

  &:disabled {
    background: var(--gray-100, #f6f6f6);
  }

  &:hover {
    border: 0.1rem solid var(--gray-500, #555);
    background: var(--white, #fff);
  }

  &:active {
    border: 0.1rem solid var(--gray-700, #3a3a3a);
    background: var(--white, #fff);
  }

  &:focus {
    outline: 0.1rem solid var(--gray-500, #555);
    background: var(--white, #fff);
    color: var(--gray-900, #181818);
  }

  animation: shake 0.7s ease;
  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translateX(-0.3rem);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translateX(0.3rem);
    }
`;

export const P = styled.p`
  color: var(--Error, #dc3a3a);
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.006rem;
`;

export const Label = styled.label`
  color: var(--gray-900, #181818);
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 4.2rem;
  letter-spacing: -0.024rem;
`;

export const Wrapper = styled.div`
  margin-top: 5.7rem;
`;
