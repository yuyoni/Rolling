import { useEffect } from 'react';
import * as S from './Toast.style';

const DURATION_MS = 5000;
const DURATION_S = DURATION_MS / 1000;

export default function Toast({ removeToast, message, messageType, id }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, DURATION_MS);
    return () => {
      clearTimeout(timer);
    };
  }, [removeToast]);

  const handleClose = () => {
    removeToast(id);
  };

  return (
    <S.Box $messageType={messageType}>
      <S.Message>{message}</S.Message>
      <S.CloseButton onClick={handleClose} type="button">
        X
      </S.CloseButton>
      <S.ProgressBar $messageType={messageType} $duration={DURATION_S} />
    </S.Box>
  );
}
