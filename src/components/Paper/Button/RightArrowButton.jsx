import { SLIDE_CONTAINER_SIZE } from '../../../constants/paperConstants';
import getCarouselIndex from '../../../utils/getCarouselIndex';
import rightArrow from '../../../assetes/images/arrow-right.svg';
import * as S from './ArrowButton.style';

export default function RightArrowButton({
  carouselIndex,
  paperLength,
  handleArrowClick
}) {
  const lastIndexOfCarousel = getCarouselIndex(paperLength);
  const isVisibleRightArrow = carouselIndex > lastIndexOfCarousel;

  return (
    isVisibleRightArrow && (
      <S.RightArrowBox onClick={() => handleArrowClick(-SLIDE_CONTAINER_SIZE)}>
        <S.Arrow src={rightArrow} alt="right-arrow" />
      </S.RightArrowBox>
    )
  );
}
