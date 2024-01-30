import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Page = styled.div`
  flex: 1;
  max-width: 192rem;
  @media (max-width: 768px) {
    max-width: 76.8rem;
  }
  @media (max-width: 360px) {
    max-width: 36rem;
  }
`;
