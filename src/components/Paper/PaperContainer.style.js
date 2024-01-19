import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const ArrowBox = styled.div`
  position: absolute;
  top: 110px;
  z-index: 2;

  background-color: white;
  width: 40px;
  height: 40px;
  border: 1px solid #dadcdf;
  border-radius: 50%;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftArrowBox = styled(ArrowBox)`
  left: -20px;
`;
export const RightArrowBox = styled(ArrowBox)`
  right: -20px;
`;

export const Arrow = styled.img`
  width: 16px;
  height: 16px;
`;

export const SlideContainer = styled.div`
  position: relative;
  max-width: 1160px;
  overflow: hidden;
`;

export const SlideElement = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  transform: ${props => `translateX(${props.$carouselIndex}px)`};
  transition: transform 0.5s ease;
`;
