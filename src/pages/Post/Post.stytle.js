import styled from 'styled-components';
import { PAPER_COLOR_MAPPER } from '../../constants/colorMapper';

export const Page = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow-x: hidden;
  overflow-y: auto;
`;

export const CardBackgroundWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  min-height: 130rem;
  ${({ $backgroundImageURL, $backgroundColor }) =>
    `${
      $backgroundImageURL
        ? `background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${$backgroundImageURL}); color:white;`
        : `background-color: ${PAPER_COLOR_MAPPER[$backgroundColor]}`
    }`};
  background-repeat: no-repeat;
  background-size: cover;

  overflow-x: auto;
  overflow-y: auto;
`;
