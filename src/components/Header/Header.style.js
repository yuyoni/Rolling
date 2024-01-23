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

  // position: fixed;
  // top: 0;
  // background-color: #ffffff;
  // z-index: 20;
`;

export const Navigation = styled.nav`
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

  font-family: 'Pretendard';
  // font-size: 16px;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
  color: var(--gray-900, #181818);
`;
