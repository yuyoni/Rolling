import styled from 'styled-components';

export const RelationshipWrapper = styled.div`
  display: flex;
  padding: 0 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 0.4rem;
  background: ${props => props.color};
`;
export const Relationship = styled.p`
  color: ${props => props.color};

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: -0.007rem;
`;
