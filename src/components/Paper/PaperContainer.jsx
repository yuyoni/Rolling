import { useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import LeftArrowButton from './Button/LeftArrowButton';
import RightArrowButton from './Button/RightArrowButton';
import Paper from './Paper';
import * as S from './PaperContainer.style';

export default function PaperContainer() {
  const paperData = useFetchData('recipients/');
  const paperLength = paperData ? paperData.results.length : 0;
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleArrowClick = increment => {
    setCarouselIndex(prev => prev + increment);
  };

  return (
    <S.Wrapper>
      <LeftArrowButton
        carouselIndex={carouselIndex}
        handleArrowClick={handleArrowClick}
      />
      <S.SlideContainer>
        <S.SlideElement $carouselIndex={carouselIndex}>
          {paperData &&
            paperData.results.map(paper => (
              <Paper key={paper.id} data={paper} />
            ))}
        </S.SlideElement>
      </S.SlideContainer>
      <RightArrowButton
        carouselIndex={carouselIndex}
        paperLength={paperLength}
        handleArrowClick={handleArrowClick}
      />
    </S.Wrapper>
  );
}
