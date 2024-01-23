import { styled, css } from 'styled-components';

export const PaperInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const PaperTitle = styled.span`
  height: 3.6rem;
  align-self: stretch;
  overflow: hidden;
  color: var(--gray-900);
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Pretendard-Bold;
  font-size: 2.4rem;
  line-height: 3.6rem;

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

export const ImageList = styled.div`
  display: flex;
  margin-left: 1.2rem;
`;

export const MessageCount = styled.h3`
  font-size: 1.6rem;
  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
`;

const commonStyles = css`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 5rem;
  border: 0.15rem solid var(--white);
  background: var(--white);
  margin-left: -1.2rem; // 12만큼씩 음수 갭 설정
  color: var(--gray-500);
`;

export const Image = styled.img`
  ${commonStyles};
`;

export const RestMessageCount = styled.div`
  ${commonStyles};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DividedLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: rgba(0, 0, 0, 0.12);
  margin-top: 3.1rem;
  margin-bottom: 0.4rem;

  @media (max-width: 360px) {
    margin-top: 2.1rem;
  }
`;

export const EmojiList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;

  @media (max-width: 360px) {
    gap: 0.4rem;
  }
`;

export const EmojiCount = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.2rem;
  width: 6.5rem;
  height: 3.6rem;
  gap: 1rem;
  border-radius: 3.2rem;
  background: rgba(0, 0, 0, 0.54);

  p {
    color: var(--white);
    font-size: 1.6rem;
  }

  @media (max-width: 360px) {
    padding: 0.8rem;
    width: 5.5rem;
    height: 3.2rem;
    gap: 0.4rem;

    p {
      font-size: 1.4rem;
    }
  }
`;
