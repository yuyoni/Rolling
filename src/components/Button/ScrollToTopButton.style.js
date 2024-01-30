import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 8rem;
  right: 8rem;
  z-index: 1;

  background-color: rgba(255, 255, 255, 0.5);
  width: 6rem;
  height: 6rem;
  border: 0.1rem solid #dadcdf;
  border-radius: 50%;
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.1);
    background-color: white;
  }
`;

export const Arrow = styled.img`
  width: 2rem;
  height: 2rem;
`;
