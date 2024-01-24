import { styled } from 'styled-components';

export const InformationBox = styled.div`
  display: flex;
  padding: 13px 360px;
  align-items: center;
  gap: 263px;
`;

export const NameBox = styled.h3`
  width: 227px;

  color: var(--gray-800, #2b2b2b);

  /* Font/28 Bold */
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px; /* 150% */
  letter-spacing: -0.28px;
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: -12px;

  width: 76px;
  height: 28px;
`;

export const ProfileImageItem = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 14rem;
  border: 0.14rem solid var(--white);
  background: var(--white);
  margin-left: -1.2rem; // 12만큼씩 음수 갭 설정
  color: var(--gray-500);
`;

export const SenderNumberText = styled.h3`
  white-space: nowrap;
  color: var(--gray-900, #181818);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 27px;

  & span {
    font-weight: 700;
  }
`;
export const SenderInformationBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 11px;
`;
export const ClearButton = styled.button`
  display: flex;
  width: 36px;
  height: 36px;
  padding: 6px;
  justify-content: center;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  h2 {
    color: var(--gray-900, #181818);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    white-space: nowrap;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 28px;
  background: var(--gray-200, #eee);
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const EmojiBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
`;
