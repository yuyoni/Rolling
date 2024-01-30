import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 998;
  position: absolute;
  top: 4.5rem;
  right: 0;

  display: inline-flex;
  padding: 1rem 0.1rem;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
`;

export const paragraph = styled.p`
  display: flex;
  width: 13.8rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 1rem;

  &:hover {
    cursor: pointer;
    background: var(--gray-100, #f6f6f6);
  }
`;
