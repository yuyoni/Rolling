import styled from 'styled-components';
import { PAPER_COLOR_MAPPER } from '../../constants/colorMapper';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  overflow-x: hidden;
  overflow-y: auto;
`;

export const CardBackgroundWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  width: 100%;
  min-height: 130rem;
  ${({ $backgroundImageURL, $backgroundColor }) =>
    `${
      $backgroundImageURL
        ? `background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${$backgroundImageURL}); color:white;`
        : `background-color: ${PAPER_COLOR_MAPPER[$backgroundColor]}`
    }`};
  background-repeat: no-repeat;
  background-size: cover;

  overflow-x: hidden;
  overflow-y: auto;
`;

export const EditButton = styled.button`
  position: absolute;
  top: 5%;
  right: 18%;

  img {
    width: 4rem;
    height: 4rem;
  }
`;
