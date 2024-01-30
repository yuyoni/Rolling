import styled from 'styled-components';

export const ArrowBox = styled.div`
  position: absolute;
  top: 11rem;
  z-index: 1;

  background-color: rgba(255, 255, 255, 0.5);
  width: 4rem;
  height: 4rem;
  border: 0.1rem solid #dadcdf;
  border-radius: 50%;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  ${props => `${props.$isLeft} : -2rem`};

  &:hover {
    transition: all 0.3s;
    transform: scale(1.1);
    background-color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Arrow = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;
