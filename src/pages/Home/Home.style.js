import styled from 'styled-components';

export const MainArea = styled.div`
  width: 100%;
  height: 108rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const MainContainer = styled.div`
  display: flex;
  width: 120rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 0 0;
  gap: 3rem;

  @media (max-width: 1248px) {
    width: 100%;
    padding: 4.9rem 2.4rem 0 2.4rem;
  }

  @media (max-width: 768px) {
    padding: 4.2rem 2rem 0 2rem;
  }
`;
