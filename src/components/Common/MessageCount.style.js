import styled from 'styled-components';

export const MessageCount = styled.h3`
  font-size: 1.6rem;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
`;

export const Count = styled.span`
  font-weight: 700;
`;
