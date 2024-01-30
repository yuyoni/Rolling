import styled from 'styled-components';

export const ProfileImageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Subtitle = styled.p`
  color: var(--gray-500, #555);
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
`;

export const ProfileImageList = styled.ul`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const ProfileImageOptionItems = styled.li`
  width: 5.6rem;
  height: 5.6rem;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  border-radius: 10rem;
  border: 0.1rem solid var(--gray-200, #eee);
  background: ${({ $urls }) => ($urls ? `url(${$urls})` : '#fff')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  &:hover {
    border: 0.1rem solid var(--gray-500, #555);
  }

  &:active {
    border: 0.2rem solid var(--gray-700, #3a3a3a);
  }
`;
