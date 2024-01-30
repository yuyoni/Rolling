import styled from 'styled-components';
import { PAPER_COLOR_MAPPER } from '../../constants/colorMapper';

export const Wrapper = styled.div`
  position: relative;
  display: flex;

  width: 27.5rem;
  height: 26rem;
  flex-shrink: 0;
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  ${({ $backgroundImageURL, $backgroundColor }) =>
    `${
      $backgroundImageURL
        ? `background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${$backgroundImageURL}); color:white;`
        : `background-color: ${PAPER_COLOR_MAPPER[$backgroundColor]}`
    }`};
  background-repeat: no-repeat;
  background-size: cover;

  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  padding: 2.4rem;

  @media (min-width: 768px) {
    &:hover {
      filter: brightness(90%);
      transition: all 0.2s;
    }
  }

  @media (max-width: 360px) {
    width: 20.8rem;
    height: 23.2rem;
  }
`;

export const ColorPattern = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  z-index: 1;
`;

export const PaperTitle = styled.span`
  height: 3.6rem;
  align-self: stretch;
  overflow: hidden;
  color: var(--gray-900);
  text-overflow: ellipsis;
  white-space: nowrap;

  font-family: Poppins;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.6rem;
  ${({ $isWhite }) => $isWhite && 'color: white;'}

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

export const HorizonLine = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: rgba(0, 0, 0, 0.12);
  margin-top: 3.1rem;
  margin-bottom: 0.4rem;

  @media (max-width: 360px) {
    margin-top: 2.1rem;
  }
`;
