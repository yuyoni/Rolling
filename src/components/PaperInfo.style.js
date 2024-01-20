import { styled, css } from 'styled-components';

export const PaperInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PaperTitle = styled.span`
  height: 36px;
  align-self: stretch;
  overflow: hidden;
  color: var(--gray-900);
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Pretendard-Bold;
  font-size: 24px;
  line-height: 36px;
`;

export const ImageList = styled.div`
  display: flex;
  margin-left: 12px;
`;

export const MessageCount = styled.h3`
  font-size: 16px;
`;

const commonStyles = css`
  width: 28px;
  height: 28px;
  border-radius: 50px;
  border: 1.5px solid var(--white);
  background: var(--white);
  margin-left: -12px; // 12만큼씩 음수 갭 설정
  color: var(--gray-500);
`;

export const Image = styled.img`
  ${commonStyles}
`;

export const RestMessageCount = styled.div`
  ${commonStyles}
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DividedLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.12);
  margin-top: 31px;
  margin-bottom: 4px;
`;

export const EmojiList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const EmojiCount = styled.div`
  display: flex;
  padding: 8px 12px;
  width: 65px;
  height: 36px;
  gap: 10px;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.54);

  p {
    color: var(--white);
    font-size: 16px;
  }
`;
