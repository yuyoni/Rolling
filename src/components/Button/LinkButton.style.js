import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  width: 28rem;
  padding: 1.4rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 1.2rem;
  background: var(--Purple-600, #9935ff);

  color: var(--white, #fff);
  text-align: center;

  font-family: Pretendard;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;

  &:hover {
    background: var(--Purple-700);
    transition: all 0.3s;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  padding: 2.4rem 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 2.4rem;
    a {
      width: 100%;
    }
  }
`;
