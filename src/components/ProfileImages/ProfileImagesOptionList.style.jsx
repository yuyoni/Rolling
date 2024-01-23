import styled from 'styled-components';

export const ProfileImageListWrapper = styled.div`
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

export const ProfileImageList = styled.ul`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const ProfileImageOptionItems = styled.li`
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10rem;
  border: 1px solid var(--gray-200, #eee);
  background: ${({ $urls }) => ($urls ? `url(${$urls})` : '#fff')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
