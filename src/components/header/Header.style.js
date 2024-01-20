import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  width: 1920px;
  height: 64px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  flex-shrink: 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 944px;
`;
export const Button = styled.button`
  display: flex;
  height: 40px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;
