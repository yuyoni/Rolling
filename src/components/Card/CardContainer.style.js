import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 11.3rem 0;
  width: 100%;
  max-width: 120rem;
  display: grid;
  gap: 2.4rem 2.8rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);

  @media (max-width: 768px) {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    max-width: 76.8rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 360px) {
    max-width: 36rem;
    grid-template-columns: 1fr;
  }
`;

export default CardContainer;
