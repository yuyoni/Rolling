import styled from 'styled-components';

export const MainArea = styled.div`
  width: 100%;
  height: 1080px;
  background: #fff;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: flex-start;
  padding: 60px 0 0 0;
  gap: 30px;

  /* 테블릿 */
  @media (max-width: 768px) {
    width: 720px;
  }

  /* 모바일 */
  @media (max-width: 360px) {
    width: 320px;
  }
`;
