import styled from 'styled-components';
import deleteIcon from '../../assetes/deleteIcon.svg';

export const Card = styled.div`
  position: relative;
  width: 384px;
  height: 280px;
  flex-shrink: 0;

  border-radius: 16px;
  background: var(--white, #fff);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
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

  & span {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 120% */
  }
`;
export const Sender = styled.span`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
export const RelationshipWrapper = styled.div`
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  background: var(--Purple-100, #f8f0ff);
`;
export const Relationship = styled.p`
  color: var(--Purple-600, #9935ff);

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
`;

export const SenderBox = styled.div`
  position: absolute;
  top: 28px;
  left: 24px;
  display: inline-flex;
  align-items: flex-start;
  gap: 14px;
`;

export const Content = styled.div`
  width: 336px;
  height: 106px;
  flex-shrink: 0;

  overflow: hidden;
  color: var(--gray-600, #4a4a4a);
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: ${props => props.font || 'Pretendard'};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.18px;
`;

export const DateWrapper = styled.p`
  color: var(--gray-400, #999);

  /* Font/12 Regular */
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.06px;
`;

export const CardHeader = styled.div`
  position: relative;
  width: 384px;
  height: 100px;
  flex-shrink: 0;
`;
export const DeleteButton = styled.button`
  position: absolute;
  top: 28px;
  right: 24px;
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 6px;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;

export const DeleteIcon = styled.img`
  content: url(${deleteIcon});
  width: 24px;
  height: 24px;
`;

export const HorizonLine = styled.div`
  width: 336px;
  height: 1px;
  flex-shrink: 0;
  background: var(--gray-200, #eee);
`;
