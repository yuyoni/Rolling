import styled from 'styled-components';

export const ErrorStyle = styled.input`
  display: flex;
  width: 100%;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 1rem;
  border: ${({ $showError }) =>
    $showError
      ? '1px solid var(--Error, #dc3a3a)'
      : '1px solid var(--gray-300, #ccc)'};
  background: var(--White, #ffffff);
  border-radius: 0.8rem;
  margin-top: 1.2rem;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
  &:disabled {
    background: var(--gray-100, #f6f6f6);
  }

  &:hover {
    border: 1px solid var(--gray-500, #555);
    background: var(--white, #fff);
  }

  &:active {
    border: 1px solid var(--gray-700, #3a3a3a);
    background: var(--white, #fff);
  }

  &:focus {
    outline: 1px solid var(--gray-500, #555);
    background: var(--white, #fff);
    color: var(--gray-900, #181818);
  }
`;

export const P = styled.p`
  color: var(--Error, #dc3a3a);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.06px;
`;

export const Label = styled.label`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.2rem;
  letter-spacing: -0.024rem;
`;

export const Wrapper = styled.div`
  margin-top: 5.7rem;
`;
