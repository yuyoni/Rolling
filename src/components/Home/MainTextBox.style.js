import styled from 'styled-components';

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const PointBox = styled.div`
  display: flex;
  padding: 6px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 50px;
  background: var(--Purple-600, #9935ff);

  color: var(--white, #fff);

  /* Font/14 Bold */
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 14px;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.1px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 268px;
  gap: 8px;

  /* 테블릿 */
  @media (max-width: 768px) {
    width: 100%;
  }

  /* 모바일 */
  @media (max-width: 360px) {
    width: 272px;
  }
`;

export const Text = styled.div`
  color: var(--gray-900, #181818);

  /* Font/24 Bold */
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 24px;
  line-height: 36px; /* 150% */
  letter-spacing: -0.3px;

  /* 모바일 */
  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

export const SubText = styled.div`
  color: var(--gray-500, #555);

  /* Font/18 Regular */
  font-family: 'Pretendard';
  font-size: 18px;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.2px;

  /* 모바일 */
  @media (max-width: 360px) {
    font-size: 15px;
  }
`;
