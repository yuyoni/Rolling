import styled from 'styled-components';

export const ProfileListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Subtitle = styled.p`
  color: var(--gray-500, #555);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem; /* 162.5% */
  letter-spacing: -0.016rem;
`;

export const ProfileList = styled.ul`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 0.4rem;
`;
