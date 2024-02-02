import * as S from './Toast.style';
import closeIcon from '../../assets/images/close-icon.svg';
import completeBlue from '../../assets/images/complete-icon-blue.svg';
import completeGreen from '../../assets/images/complete-icon-green.svg';
import completeRed from '../../assets/images/complete-icon-red.svg';
import completeYellow from '../../assets/images/complete-icon-yellow.svg';

const ICONS = {
  error: completeRed,
  info: completeBlue,
  success: completeGreen,
  warning: completeYellow
};

export default function ToastMessage({ closeMessage, messages }) {
  return (
    <S.PositionWrapper>
      <S.VerticalLiner>
        {Array.isArray(messages) &&
          messages.length > 0 &&
          messages.map(({ messageType, id, message }) => (
            <S.Box $messageType={messageType} key={id}>
              <S.HorizontalLiner>
                <img src={ICONS[messageType]} alt="icon" />
                <S.Message>{message}</S.Message>
                <S.CloseButton onClick={() => closeMessage(id)} type="button">
                  <img src={closeIcon} alt="close-icon" />
                </S.CloseButton>
              </S.HorizontalLiner>
              <S.ProgressBar $messageType={messageType} $duration="5" />
            </S.Box>
          ))}
      </S.VerticalLiner>
    </S.PositionWrapper>
  );
}
