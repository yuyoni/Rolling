import styled from 'styled-components';

export const MainBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 1.6rem;
  background: var(--Surface, #f6f8ff);
  width: 100%;

  @media (max-width: 1248px) {
    min-width: 70rem;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    min-width: 32rem;
  }
`;

export const MainBoxFirst = styled(MainBox)`
  padding: 6rem 0 6rem 6rem;
  justify-content: flex-end;
  width: 100%;
  gap: 15.2rem;

  @media (max-width: 1248px) {
    flex-direction: column;
    padding: 4rem;
    gap: 3.6rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const MainBoxSecond = styled(MainBox)`
  padding: 6rem 19.2rem 6rem 0;
  width: 100%;

  @media (max-width: 1248px) {
    flex-direction: column-reverse;
    padding: 4rem;
    gap: 3.6rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

// 메인 첫번째 박스 구역
export const MainItemContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 20.4rem;
  padding: 2.1rem 4rem 2.1rem 4rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1248px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

// 메인 두번째 박스 구역
export const Image = styled.img`
  max-width: 100%;
`;
