import styled from 'styled-components';

export const Background = styled.div`
  z-index: 999;
  position: fixed;
  z-index: 3;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgba(0, 0, 0, 0.6);
`;
export const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 10rem;
  height: 10rem;
  align-items: center;
  border-radius: 1rem;
  background: white;
  //background opacity
  opacity: 0.8;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 1rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60rem;
  height: 47.6rem;

  border-radius: 1.6rem;
  background: #fff;
`;
export const ProfileImageWrapper = styled.div`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;
  border-radius: 10rem;
  border: 0.1rem solid var(--gray-200, #eee);
  background: var(--white, #fff);
`;

export const ProfileImage = styled.img`
  border-radius: 10rem;
  border: 0.1rem solid var(--gray-200, #eee);
  background: var(--white, #fff);
  width: 5.6rem;
  height: 5.6rem;
  flex-shrink: 0;
  background: lightgray 50% / cover no-repeat;
`;

export const SenderInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
`;
export const SenderNameWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;

  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`;
export const Sender = styled.span`
  max-width: 20rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 20rem;

  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
`;

export const SenderBox = styled.div`
  position: absolute;
  left: 4rem;
  display: inline-flex;
  align-items: flex-start;
  gap: 1.4rem;
`;

export const DateWrapper = styled.p`
  position: absolute;
  right: 4.5rem;

  color: var(--gray-400, #999);

  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: -0.006rem;
`;

export const Content = styled.div`
  margin-top: 1.6rem;

  width: 50rem;
  height: 24rem;
  flex-shrink: 0;

  overflow: scroll;
  color: #5a5a5a;

  font-family: ${({ $font }) => $font || 'Pretendard'};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.6rem;
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 0.6rem;
  }
`;

export const HorizontalLine = styled.div`
  width: 52rem;
  height: 0.1rem;
  flex-shrink: 0;
  background: var(--gray-200, #eee);
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  height: 11.6rem;
  padding: 0 4rem;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 4rem;

  display: flex;
  width: 12rem;
  padding: 0.7rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 0.6rem;
  background: var(--Purple-600, #9935ff);

  color: var(--white, #fff);
  text-align: center;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
`;
