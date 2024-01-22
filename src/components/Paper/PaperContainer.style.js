import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SlideContainer = styled.div`
  position: relative;
  max-width: 116rem;
  overflow: hidden;

  @media (max-width: 768px) {
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SlideElement = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;

  @media (min-width: 769px) {
    transform: ${props => `translateX(${props.$carouselIndex}rem)`};
    transition: transform 0.5s ease;
  }
  @media (max-width: 768px) {
    & > :first-child {
      margin-left: 2rem;
    }
    & > :last-child {
      margin-right: 2rem;
    }
  }
`;
