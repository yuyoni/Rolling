import { useEffect, useState } from 'react';
import leftArrow from '../../assetes/images/arrow-left.svg';
import rightArrow from '../../assetes/images/arrow-right.svg';
import Paper from './Paper';
import * as S from './PaperContainer.style';

export default function PaperContainer() {
  const [paperData, setPaperData] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // 상수들도 constants로 분리해야 할 지 생각해보기
  const SLIDE_CONTAINER_SIZE = 118;
  const ITEMS_PER_CONTAINER = 4;
  const TOTAL_ITEMS = paperData ? paperData.results.length : 0;
  const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / ITEMS_PER_CONTAINER) - 1;

  const LAST_INDEX_OF_CAROUSEL = -(TOTAL_PAGES * SLIDE_CONTAINER_SIZE);

  const isVisibleRightArrow = carouselIndex > LAST_INDEX_OF_CAROUSEL;
  const isVisibleLeftArrow = carouselIndex !== 0;

  const handleArrowClick = increment => {
    setCarouselIndex(prev => prev + increment);
  };

  // useEffect를 이용하여 데이터 fetch 해오기
  useEffect(() => {
    async function fetchData(endpoint) {
      const url = `https://rolling-api.vercel.app/3-1/${endpoint}`; // baseURL 환경변수로 빼기
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPaperData(data); // 이 부분 setter를 파라미터로 받는 커스텀 훅으로 수정하기
      } catch (error) {
        throw new Error('Error fetching data');
      }
    }

    fetchData('recipients/'); // 이 부분도 endpoint 매개변수로 바꿔주기
  }, []);

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
