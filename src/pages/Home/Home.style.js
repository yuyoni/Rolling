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
  width: 1200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0 0 0;
  gap: 30px;

  /* 수정중 */

  /* 테블릿 */
  @media (max-width: 1248px) {
    /* width: 720px; */
    width: 100%;
    /* max-width: 720px; */
    padding: 49px 24px 0 24px;
    /* margin: 24px; */
  }

  /* 모바일 */
  @media (max-width: 768px) {
    /* width: 320px; */
    padding: 42px 20px 0 20px;
  }
`;
