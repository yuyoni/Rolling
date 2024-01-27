import leftArrow from '../../../assets/images/arrow-left.svg';
import rightArrow from '../../../assets/images/arrow-right.svg';
import { SLIDE_CONTAINER_SIZE } from '../../../constants/paperConstants';
import getCarouselIndex from '../../../utils/getCarouselIndex';
import * as S from './ArrowButton.style';

export default function ArrowButton({
  isLeft,
  carouselIndex,
  paperLength = 0,
  setCarouselIndex
}) {
  const lastIndexOfCarousel = getCarouselIndex(paperLength);
  const isVisibleArrow = isLeft
    ? carouselIndex !== 0
    : carouselIndex > lastIndexOfCarousel;

  const handleArrowClick = () => {
    const increment = isLeft ? SLIDE_CONTAINER_SIZE : -SLIDE_CONTAINER_SIZE;
    setCarouselIndex(prev => prev + increment);
  };

  return (
    isVisibleArrow && (
      <S.ArrowBox
        $isLeft={isLeft ? 'left' : 'right'}
        onClick={handleArrowClick}
      >
        <S.Arrow
          src={isLeft ? leftArrow : rightArrow}
          alt={isLeft ? 'left-arrow' : 'right-arrow'}
        />
      </S.ArrowBox>
    )
  );
}
