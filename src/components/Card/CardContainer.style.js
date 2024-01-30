import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 11.3rem 0;
  width: 120rem;
  display: grid;
  gap: 2.4rem 2.8rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(28rem, 28rem));
`;

export default CardContainer;
