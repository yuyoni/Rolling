import { useState } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to={`/post/${paper.id}`} key={paper.id}>
                <Paper data={paper} />
              </Link>
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
