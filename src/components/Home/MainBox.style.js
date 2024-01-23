import styled from 'styled-components';

export const MainBox = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 16px;
  background: var(--Surface, #f6f8ff);
`;

export const MainBoxFirst = styled(MainBox)`
  padding: 60px 0px 60px 60px;
  justify-content: flex-end;
  gap: 152px;

  /* 모바일 */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px;
    /* justify-content: center; */
    /* align-items: center; */
  }

  /* 테블릿 */
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 40px;
    gap: 36px;
  }
`;

export const MainBoxSecond = styled(MainBox)`
  padding: 60px 192px 60px 0px;

  /* 모바일 */
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 40px;

    /* justify-content: center; */
    /* align-items: center; */
  }

  /* 테블릿 */
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    padding: 40px;
    gap: 36px;
  }
`;

// 메인 첫번째 박스 구역
export const MainItemContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 720px;
  height: 204px;
  padding: 21px 40px 21px 40px;
  justify-content: center;
  align-items: center;
`;
