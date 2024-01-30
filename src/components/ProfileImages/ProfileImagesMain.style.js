import styled from 'styled-components';

export const defaultImage =
  'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png';

export const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  @media screen and (min-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 71.7rem;
  }
`;

export const SelectedProfileImage = styled.span`
  width: 8rem;
  height: 8rem;
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  padding: 2.4rem;
  gap: 1rem;
  border-radius: 10rem;
  background: ${({ $selectedImage }) =>
    $selectedImage ? `url(${$selectedImage})` : `url(${defaultImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
