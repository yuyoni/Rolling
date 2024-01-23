import styled from 'styled-components';
import { PAPER_COLOR_MAPPER } from '../../constants/colorMapper';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1920px;
  height: 1080px;
  background-image: ${props =>
    props.$backgroundImageURL ? `url(${props.$backgroundImageURL})` : 'none'};
  background: ${({ $backgroundColor }) =>
    $backgroundColor
      ? PAPER_COLOR_MAPPER[$backgroundColor]
      : 'var(--Orange-200)'};

  overflow-x: hidden;
  overflow-y: auto;
`;

export const PageTemp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;
  background: var(--Purple-100, #f8f0ff);
`;
