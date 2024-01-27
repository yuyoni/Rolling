import styled from 'styled-components';

const ToastTheme = {
  success: {
    backgroundColor: '#3e9a4f',
    color: '#ffffff',
    progressBarColor: '#b8f6c2'
  },
  error: {
    backgroundColor: '#b60411',
    color: '#ffffff',
    progressBarColor: '#ff929b'
  },
  warning: {
    backgroundColor: '#d0a200',
    color: '#ffffff',
    progressBarColor: '#ffe7a2'
  },
  info: {
    backgroundColor: '#0021a1',
    color: '#ffffff',
    progressBarColor: '#d0daff'
  },
  default: {
    backgroundColor: '#570385',
    color: '#ffffff',
    progressBarColor: '#f3d7ff'
  }
};

export const PositionWrapper = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Liner = styled.div`
  position: fixed;
  top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: 50rem;
  height: 10rem;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 0.7em;

  background-color: ${({ $messageType }) =>
    $messageType ? ToastTheme[$messageType].backgroundColor : 'black'};

  & > svg {
    fill: ${({ $messageType }) =>
      $messageType ? ToastTheme[$messageType].color : 'var(--Orange-200)'};
    margin-right: 0.5em;
  }
`;
export const IconContainer = styled.div`
  & > svg {
  }
`;

export const Message = styled.p`
  width: 50rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${({ $messageType }) =>
    $messageType ? ToastTheme[$messageType].color : 'var(--Orange-200)'};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 0.5rem;

  size: 6rem;
  color: white;
`;

export const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1rem;
  background-color: ${({ $messageType }) =>
    $messageType ? ToastTheme[$messageType].progressBarColor : 'white'};
  animation: progressBar ${({ $duration }) => $duration}s linear;

  @keyframes progressBar {
    0% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
`;
