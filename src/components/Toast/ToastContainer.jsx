import * as S from './Toast.style';
import Toast from './Toast';

export default function ToastContainer({ toastList, removeToast }) {
  return (
    <S.PositionWrapper>
      <S.Liner>
        {toastList.map(toast => {
          const id = Math.random() * 100;
          return (
            <Toast
              key={id}
              removeToast={removeToast}
              messageType={toast.messageType}
              message={toast.message}
              id={id}
            />
          );
        })}
      </S.Liner>
    </S.PositionWrapper>
  );
}
