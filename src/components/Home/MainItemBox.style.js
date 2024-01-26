import styled from 'styled-components';

export const ItemBox = styled.div`
  width: 20.6rem;
  height: 16.2rem;
  flex-shrink: 0;
  border-radius: 1.2rem;
  border: 0.1rem solid #dbd9e9;
  background: #fff;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 11.4rem;
    height: 9rem;
    border-radius: 0.65rem;
    gap: 0.5rem;
  }
`;

export const BasicBox = styled(ItemBox)`
  position: relative;
`;

export const FirstBox = styled.div`
  display: flex;
  width: 100%;
  padding: 0 2.4rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const InfoBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const ProfileImage = styled.img`
  display: flex;
  height: 3.4rem;
  border-radius: 5rem;

  @media (max-width: 768px) {
    height: 2rem;
  }
`;

export const Image = styled.img`
  position: absolute;

  @media (max-width: 768px) {
    height: 20%;
  }
`;

export const MouseImage = styled(Image)`
  right: 4rem;

  @media (max-width: 768px) {
    right: 2rem;
  }
`;

export const WhoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1rem;
`;

export const Name = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.8rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;

export const rel = styled.div`
  color: var(--Purple-700, #861dee);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.4rem;
  border-radius: 0.2rem;
  background: var(--Purple-200, #ecd9ff);

  @media (max-width: 768px) {
    font-size: 0.6rem;
    line-height: 1rem;
  }
`;

export const Line = styled.div`
  width: 18rem;
  height: 0.1rem;
  flex-shrink: 0;
  background: #e1e1e1;

  @media (max-width: 768px) {
    width: 10rem;
  }
`;

export const SecondBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 18rem;
  height: 5.4rem;
  flex-shrink: 0;

  overflow: hidden;
  color: #555;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Pretendard';
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.06rem;

  @media (max-width: 768px) {
    width: 10rem;
    height: 3rem;
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;

export const date = styled.div`
  color: #777;
  font-family: 'Pretendard';
  font-size: 1rem;
  line-height: 1.3rem;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    line-height: 0.7rem;
  }
`;
