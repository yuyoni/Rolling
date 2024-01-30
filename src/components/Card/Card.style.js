import styled from 'styled-components';
import deleteIcon from '../../assets/images/delete-icon.svg';
import plusIcon from '../../assets/images/plus-icon.svg';

export const Card = styled.div`
  position: relative;
  width: 38.4rem;
  height: 28rem;
  flex-shrink: 0;

  border-radius: 1.6rem;
  background: var(--white, #fff);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: 0.2s ease-in-out;
  }
`;

export const AddCard = styled.div`
  display: flex;
  width: 38.4rem;
  height: 28rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 1.6rem;
  background: var(--white, #fff);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.01);
    background-color: var(--gray-200, #eeeeee);
  }
`;

export const AddCardButton = styled.button`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 1rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  padding: 1.6rem;
  align-items: flex-start;
  gap: 1rem;

  border-radius: 10rem;
  background: var(--gray-500, #555);
`;

export const AddIcon = styled.img`
  content: url(${plusIcon});
  width: 2.4rem;
  height: 2.4rem;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;
  border-radius: 1rem;
  background: var(--white, #fff);
`;

export const ProfileImage = styled.img`
  border-radius: 10rem;
  border: 0.1rem solid var(--gray-200, #eee);
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
  line-height: 2.4rem;
`;

export const Sender = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 20rem;

  color: #000;
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.4rem;
`;

export const SenderBox = styled.div`
  position: absolute;
  top: 2.8rem;
  left: 2.4rem;
  font-family: Poppins;
  display: inline-flex;
  align-items: flex-start;
  gap: 1.4rem;
`;

export const Content = styled.div`
  position: absolute;
  top: 11.6rem;
  left: 2.4rem;

  width: 33.6rem;
  height: 10.6rem;
  flex-shrink: 0;

  overflow: hidden;
  color: var(--gray-600, #4a4a4a);
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  font-family: ${props => props.$font || 'Pretendard'};
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.18rem;
`;

export const DateWrapper = styled.p`
  position: absolute;
  left: 2.4rem;
  bottom: 2.4rem;

  color: var(--gray-400, #999);

  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.06rem;
`;

export const CardHeader = styled.div`
  position: relative;
  width: 38.4rem;
  height: 10rem;
  flex-shrink: 0;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 2.8rem;
  right: 2.4rem;
  display: inline-flex;
  padding: 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 0.6rem;
  border: 0.1rem solid var(--gray-300, #ccc);
  background: var(--white, #fff);
`;

export const DeleteIcon = styled.img`
  content: url(${deleteIcon});
  width: 2.4rem;
  height: 2.4rem;
`;

export const HorizonLine = styled.div`
  position: absolute;
  left: 2.4rem;
  width: 33.6rem;
  height: 0.1rem;
  flex-shrink: 0;
  background: var(--gray-200, #eee);
`;
