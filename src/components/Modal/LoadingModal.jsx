import { useEffect } from 'react';
import * as S from './CardModal.style';
import spinner from '../../assets/images/loading-spinner.gif';

export default function LoadingModal({ onLoaded, isLoading }) {
  useEffect(() => {
    if (!isLoading) {
      onLoaded();
    }
  }, [isLoading]);

  return (
    <S.Background>
      <S.ModalBody>
        <S.ImageWrapper>
          <img src={spinner} alt="loading-spinner" />
        </S.ImageWrapper>
      </S.ModalBody>
    </S.Background>
  );
}
