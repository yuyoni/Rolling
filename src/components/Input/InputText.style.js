import styled from 'styled-components';

export const InputDiv = styled.div`
  position: relative;
`;

export const ErrorStyle = styled.input`
  display: flex;
  width: 100%;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  border: ${({ $showError }) =>
    $showError
      ? '1px solid var(--Error, #dc3a3a)'
      : '1px solid var(--gray-300, #ccc)'};
  background: var(--white, #fff);

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
