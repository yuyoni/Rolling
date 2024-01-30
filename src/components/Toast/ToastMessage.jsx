import * as S from './Toast.style';

export default function ToastMessage({ closeMessage, messages }) {
  return (
    <S.PositionWrapper>
      <S.Liner>
        {Array.isArray(messages) &&
          messages.length > 0 &&
          messages.map(({ messageType, id, message }) => (
            <S.Box $messageType={messageType} key={id}>
              <S.Message>{message}</S.Message>
              <S.CloseButton onClick={() => closeMessage(id)} type="button">
                X
              </S.CloseButton>
              <S.ProgressBar $messageType={messageType} $duration="5" />
            </S.Box>
          ))}
      </S.Liner>
    </S.PositionWrapper>
  );
}
