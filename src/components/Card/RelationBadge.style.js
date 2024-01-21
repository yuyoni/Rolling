import styled from 'styled-components';

export const RelationshipWrapper = styled.div`
  display: flex;
  padding: 0 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 4px;
  background: ${props => props.color};
`;
export const Relationship = styled.p`
  color: ${props => props.color};

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.07px;
`;
