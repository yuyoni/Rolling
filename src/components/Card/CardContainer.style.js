import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 11.3rem 0;
  max-width: 120rem;
  display: grid;
  gap: 2.4rem 2.8rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);

  @media (max-width: 768px) {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    max-width: calc(100% - 2.4rem);
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 360px) {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    max-width: calc(100% - 2.4rem);
    grid-template-columns: 1fr;
  }
`;

export default CardContainer;
