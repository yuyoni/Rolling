import styled from 'styled-components';

const ToastTheme = {
  success: '#2BA600',
  error: '#f50400',
  warning: '#fff200',
  info: '#0800ff'
};

export const PositionWrapper = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const VerticalLiner = styled.div`
  top: 20%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HorizontalLiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  width: 52.4rem;
  height: 6.4rem;
  border-radius: 1rem;
  padding: 0.7em;

  background-color: black;
`;

export const Message = styled.p`
  padding-left: 1.2rem;
  width: 50rem;
  text-align: left;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
  color: white;
`;

export const CloseButton = styled.button`
  size: 6rem;
  color: white;
`;

export const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1rem;
  background-color: ${({ $messageType }) =>
    $messageType ? ToastTheme[$messageType] : ToastTheme.success};
  animation: progressBar ${({ $duration }) => $duration}s linear;
  border-radius: 1rem;

  @keyframes progressBar {
    0% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
`;
