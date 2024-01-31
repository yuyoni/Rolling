import styled from 'styled-components';

export const Wrapper = styled.div`
  &:hover {
    filter: brightness(95%);
  }

  &:active {
    filter: brightness(90%);
  }

  @media (max-width: 360px) {
    display: none;
  }
`;

export const SmallImageWrapper = styled.div`
  &:hover {
    filter: brightness(95%);
  }

  &:active {
    filter: brightness(90%);
  }

  @media (min-width: 359px) {
    display: none;
  }
`;
