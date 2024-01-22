import { useState } from 'react';
import leftArrow from '../../assetes/images/arrow-left.svg';
import rightArrow from '../../assetes/images/arrow-right.svg';
import { SLIDE_CONTAINER_SIZE } from '../../constants/paperConstants';
import useFetchData from '../../hooks/useFetchData';
import getCarouselIndex from '../../utils/getCarouselIndex';
import Paper from './Paper';
import * as S from './PaperContainer.style';

export default function PaperContainer() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const paperData = useFetchData('recipients/');

  const lastIndexOfCarousel = getCarouselIndex(paperData);

  const isVisibleRightArrow = carouselIndex > lastIndexOfCarousel;
  const isVisibleLeftArrow = carouselIndex !== 0;

  const handleArrowClick = increment => {
    setCarouselIndex(prev => prev + increment);
  };

  return (
    <S.Wrapper>
      {isVisibleLeftArrow && (
        <S.LeftArrowBox onClick={() => handleArrowClick(SLIDE_CONTAINER_SIZE)}>
          <S.Arrow src={leftArrow} alt="left-arrow" />
        </S.LeftArrowBox>
      )}
      <S.SlideContainer>
        <S.SlideElement $carouselIndex={carouselIndex}>
          {paperData &&
            paperData.results.map(paper => (
              <Paper key={paper.id} data={paper} />
            ))}
        </S.SlideElement>
      </S.SlideContainer>
      {isVisibleRightArrow && (
        <S.RightArrowBox
          onClick={() => handleArrowClick(-SLIDE_CONTAINER_SIZE)}
        >
          <S.Arrow src={rightArrow} alt="right-arrow" />
        </S.RightArrowBox>
      )}
    </S.Wrapper>
  );
}
