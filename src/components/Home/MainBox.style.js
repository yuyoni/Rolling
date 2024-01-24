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
  width: 100%;
  gap: 152px;

  /* 테블릿 */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px;
    gap: 36px;
  }

  /* 모바일 */
  @media (max-width: 360px) {
    flex-direction: column;
    padding: 40px;
    /* justify-content: center; */
    /* align-items: center; */
  }
`;

export const MainBoxSecond = styled(MainBox)`
  padding: 60px 192px 60px 0px;
  width: 100%;

  /* 테블릿 */
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 40px;
    gap: 36px;
  }

  /* 모바일 */
  @media (max-width: 360px) {
    flex-direction: column-reverse;
    padding: 40px;

    /* justify-content: center; */
    /* align-items: center; */
  }
`;

// 메인 첫번째 박스 구역
export const MainItemContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 204px;
  padding: 21px 40px 21px 40px;
  justify-content: center;
  align-items: center;
`;

// 메인 두번째 박스 구역

export const Image = styled.img`
  width: 100%;
`;
