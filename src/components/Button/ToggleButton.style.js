import styled from 'styled-components';

export const ButtonDown = styled.button`
  position: relative;
  width: 32rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.6rem;
  margin-bottom: 0.8rem;
  border-radius: 0.8rem;
  border: ${({ $showError }) =>
    $showError
      ? '0.1rem solid var(--Error, #dc3a3a)'
      : '0.1rem solid var(--gray-300, #ccc)'};
  background: var(--white, #fff);

  &:hover {
    border: 0.1rem solid var(--gray-500, #555);
  }

  &:active {
    border: 0.2rem solid var(--gray-700, #3a3a3a);
    background: var(--white, #fff);
  }

  &:disabled {
    border: 0.1rem solid var(--gray-300, #ccc);
    background: var(--gray-100, #f6f6f6);
  }

  &:focus {
    border: 0.2rem solid var(--gray-500, #555);
    background: var(--white, #fff);
    color: var(--gray-900, #181818);
  }

  @media (max-width: 768px) {
    width: 32rem;
    display: flex;
    align-items: center;
    padding: 1.2rem 1.6rem;
    gap: 1rem;
  }
`;

export const ToggleIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export const ToggleUl = styled.ul`
  position: absolute;
  width: ${({ nav }) => (nav ? 'auto' : '32rem')};
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  padding: 1rem 0.1rem;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  box-shadow: 0rem 0.2rem 1.2rem 0rem rgba(0, 0, 0, 0.08);
`;

export const ToggleList = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.6rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.6rem;
  text-align: start;
  background: none;
  cursor: pointer;
  font-family: ${({ $font }) => `${$font}`};

  &:hover {
    background: var(--gray-100, #f6f6f6);
    outline: none;
  }
`;
