import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

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

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 600px;
  height: 476px;

  border-radius: 16px;
  background: #fff;
`;
export const ProfileImageWrapper = styled.div`
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  border-radius: 100px;
  border: 1px solid var(--gray-200, #eee);
  background: var(--white, #fff);
`;

export const ProfileImage = styled.img`
  border-radius: 100px;
  border: 1px solid var(--gray-200, #eee);
  background: var(--white, #fff);
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  background: lightgray 50% / cover no-repeat;
`;

export const SenderInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;
export const SenderNameWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;

  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
`;
export const Sender = styled.span`
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;

  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
`;

export const SenderBox = styled.div`
  position: absolute;
  left: 40px;
  display: inline-flex;
  align-items: flex-start;
  gap: 14px;
`;

export const DateWrapper = styled.p`
  position: absolute;
  right: 45px;

  color: var(--gray-400, #999);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.06px;
`;

export const Content = styled.div`
  margin-top: 16px;

  width: 500px;
  height: 240px;
  flex-shrink: 0;

  overflow: scroll;
  color: #5a5a5a;

  font-family: ${props => props.$font || 'Pretendard'};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
`;

export const HorizontalLine = styled.div`
  width: 520px;
  height: 1px;
  flex-shrink: 0;
  background: var(--gray-200, #eee);
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  height: 116px;
  padding: 0 40px;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 40px;

  display: flex;
  width: 120px;
  padding: 7px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 6px;
  background: var(--Purple-600, #9935ff);

  color: var(--white, #fff);
  text-align: center;

  /* Font/16 Regular */
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.16px;
`;
