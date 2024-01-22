import styled from 'styled-components';

export const ButtonDown = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 32rem;
  padding: 1.2rem 1.6rem;
  margin-bottom: 0.8rem;
  border-radius: 0.8rem;
  border: ${({ $showError }) =>
    $showError
      ? '1px solid var(--Error, #dc3a3a)'
      : '1px solid var(--gray-300, #ccc)'};
  background: var(--white, #fff);
`;

export const ToggleIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export const ToggleUl = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  width: ${({ nav }) => (nav ? 'auto' : '32rem')};
  padding: 1rem 0.1rem;
  border-radius: 0.8rem;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

export const ToggleList = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  font-size: 1.6rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.6rem;
  background: none;
  cursor: pointer;
  text-align: start;
`;
