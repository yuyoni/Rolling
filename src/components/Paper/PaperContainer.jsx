import { useState } from 'react';
import leftArrow from '../../assetes/arrow_left.svg';
import rightArrow from '../../assetes/arrow_right.svg';
import Paper from './Paper';
import * as S from './PaperContainer.style';

export default function PaperContainer() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const slideContainerSize = 1180;

  // 마지막 순서일 때는 우측 버튼이 안보이는 기능을 테스트하기 위한 임시 상수들
  const itemsPerPage = 4;
  const totalItems = 15;
  const totalPages = Math.ceil(totalItems / itemsPerPage) - 1;
  const lastIndexOfCarousel = -totalPages * slideContainerSize;

  const handleArrowClick = increment => {
    setCarouselIndex(prev => prev + increment);
  };

  const mock = {
    id: 1,
    name: '강영훈',
    backgroundColor: 'green',
    backgroundImageURL: null,
    createdAt: '2023-10-26T13:19:31.401765Z',
    messageCount: 4,
    recentMessages: [
      {
        id: 32,
        recipientId: 2,
        sender: '김하은',
        profileImageURL:
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
        relationship: '가족',
        content: '열심히 일하는 모습 멋있습니다.',
        font: 'Pretendard',
        createdAt: '2023-11-01T08:05:25.399056Z'
      },
      {
        id: 30,
        recipientId: 2,
        sender: '이영준',
        profileImageURL:
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
        relationship: '지인',
        content: '항상 응원합니다',
        font: 'Noto Sans',
        createdAt: '2023-11-01T08:04:12.852691Z'
      },
      {
        id: 33,
        recipientId: 2,
        sender: '이영준',
        profileImageURL:
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
        relationship: '지인',
        content: '항상 응원합니다',
        font: 'Noto Sans',
        createdAt: '2023-11-01T08:04:12.852691Z'
      },
      {
        id: 34,
        recipientId: 2,
        sender: '이영준',
        profileImageURL:
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
        relationship: '지인',
        content: '항상 응원합니다',
        font: 'Noto Sans',
        createdAt: '2023-11-01T08:04:12.852691Z'
      }
    ],
    reactionCount: 48,
    topReactions: [
      {
        id: 27,
        emoji: '😀',
        count: 14
      },
      {
        id: 31,
        emoji: '🥹',
        count: 11
      },
      {
        id: 34,
        emoji: '😄',
        count: 17
      }
    ]
  };

  return (
    <S.Wrapper>
      {carouselIndex ? (
        <S.LeftArrowBox onClick={() => handleArrowClick(slideContainerSize)}>
          <S.Arrow src={leftArrow} alt="left-arrow" />
        </S.LeftArrowBox>
      ) : null}
      <S.SlideContainer>
        <S.SlideElement $carouselIndex={carouselIndex}>
          {/* 임시로 길이 totalItems인 배열 생성해서 직접 15개 불러와봄 */}
          {Array.from({ length: totalItems }).map(() => (
            <Paper data={mock} />
          ))}
        </S.SlideElement>
      </S.SlideContainer>
      {carouselIndex > lastIndexOfCarousel ? (
        <S.RightArrowBox onClick={() => handleArrowClick(-slideContainerSize)}>
          <S.Arrow src={rightArrow} alt="right-arrow" />
        </S.RightArrowBox>
      ) : null}
    </S.Wrapper>
  );
}
