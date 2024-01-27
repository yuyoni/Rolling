import styled from 'styled-components';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
`;

export const PointBox = styled.div`
  display: flex;
  padding: 0.6rem 1.2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 5rem;
  background: var(--Purple-600, #9935ff);
  color: var(--white, #fff);

  font-family: Pretendard;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.01rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 28.8rem;
  gap: 0.8rem;

  @media (max-width: 1248px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 27.2rem;
  }
`;

export const Text = styled.div`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.6rem;
  letter-spacing: -0.03rem;

  @media (max-width: 1248px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const SubText = styled.div`
  color: var(--gray-500, #555);
  font-family: Pretendard;
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.02rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
