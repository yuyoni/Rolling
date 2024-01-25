import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  /* width: 1920px; */
  height: 64px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* gap: 1px; */
  /* flex-shrink: 0; */

  /* 수정중 */
  width: 100%;
  /* padding: 0 360px; */
  // position: fixed;
  // top: 0;
  // background-color: #ffffff;
  // z-index: 20;

  /* 테블릿 */
  @media (max-width: 768px) {
    padding: 11px 24px;
  }

  /* 모바일 */
  @media (max-width: 360px) {
    padding: 12px 20px;
  }
`;

export const Navigation = styled.div`
  display: flex;

  align-items: center;
  /* justify-content: center; */
  min-width: 1200px;
  padding: 11px 0px;
  /* gap: 944px; */

  /* 수정중 */
  height: 62px;
  justify-content: space-between;
  /* width: 100%; */

  /* 테블릿 */
  @media (max-width: 1248px) {
    /* max-width: 100%; */
    min-width: 700px;
    width: 100%;
    padding: 0 24px;
    transition: max-width 0.5s ease;
  }

  /* 모바일 */
  @media (max-width: 768px) {
    min-width: 327px;
    width: 100%;
    padding: 0;
    /* max-width: 100%; */

    /* gap: 79px; */

    transition: max-width 0.5s ease;
  }
`;

export const Button = styled.button`
  display: flex;
  height: 40px;
  padding: 8px 16px;
  /* justify-content: center; */
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
