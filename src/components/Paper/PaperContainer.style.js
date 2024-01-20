import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const ArrowBox = styled.div`
  position: absolute;
  top: 11rem;
  z-index: 2;

  background-color: white;
  width: 4rem;
  height: 4rem;
  border: 0.1rem solid #dadcdf;
  border-radius: 50%;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftArrowBox = styled(ArrowBox)`
  left: -2rem;
`;
export const RightArrowBox = styled(ArrowBox)`
  right: -2rem;
`;

export const Arrow = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export const SlideContainer = styled.div`
  position: relative;
  max-width: 116rem;
  overflow: hidden;
`;

export const SlideElement = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  transform: ${props => `translateX(${props.$carouselIndex}rem)`};
  transition: transform 0.5s ease;
`;
