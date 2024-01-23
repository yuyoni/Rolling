import { useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import ArrowButton from './Button/ArrowButton';
import Paper from './Paper';
import * as S from './PaperContainer.style';

export default function PaperContainer() {
  const paperData = useFetchData('recipients/');
  const paperLength = paperData ? paperData.results.length : 0;
  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <S.Wrapper>
      <ArrowButton
        isLeft
        carouselIndex={carouselIndex}
        setCarouselIndex={setCarouselIndex}
      />
      <S.SlideContainer>
        <S.SlideElement $carouselIndex={carouselIndex}>
          {paperData &&
            paperData.results.map(paper => (
              <Paper key={paper.id} data={paper} />
            ))}
        </S.SlideElement>
      </S.SlideContainer>
      <ArrowButton
        carouselIndex={carouselIndex}
        paperLength={paperLength}
        setCarouselIndex={setCarouselIndex}
      />
    </S.Wrapper>
  );
}
