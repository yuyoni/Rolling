import styled from 'styled-components';

export const InputDiv = styled.div`
  position: relative;
`;

export const ErrorStyle = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
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
`;

export const P = styled.p`
  color: var(--Error, #dc3a3a);
  font-family: Pretendard;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.006rem;
`;
