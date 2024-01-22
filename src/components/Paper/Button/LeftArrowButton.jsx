import leftArrow from '../../../assetes/images/arrow-left.svg';
import { SLIDE_CONTAINER_SIZE } from '../../../constants/paperConstants';
import * as S from './ArrowButton.style';

export default function LeftArrowButton({ carouselIndex, handleArrowClick }) {
  const isVisibleLeftArrow = carouselIndex !== 0;

  return (
    isVisibleLeftArrow && (
      <S.LeftArrowBox onClick={() => handleArrowClick(SLIDE_CONTAINER_SIZE)}>
        <S.Arrow src={leftArrow} alt="left-arrow" />
      </S.LeftArrowBox>
    )
  );
}
