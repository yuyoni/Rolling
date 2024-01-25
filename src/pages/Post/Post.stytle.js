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
  background-image: ${props =>
    props.$backgroundImageURL ? `url(${props.$backgroundImageURL})` : 'none'};
  background: ${({ $backgroundColor }) =>
    $backgroundColor
      ? PAPER_COLOR_MAPPER[$backgroundColor]
      : 'var(--Orange-200)'};

  overflow-x: hidden;
  overflow-y: auto;
`;

export const EditButton = styled.button`
  position: absolute;
  top: 5%;
  right: 18%;

  img {
    width: 40px;
    height: 40px;
  }
`;
