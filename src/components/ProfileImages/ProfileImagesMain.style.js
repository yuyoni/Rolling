import styled from 'styled-components';
import defaultImage from '../../assets/images/default-profile-image.png';

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
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  gap: 1rem;
  padding: 2.4rem;
  width: 8rem;
  height: 8rem;
  border-radius: 10rem;
  background: ${({ $selectedImage }) =>
    $selectedImage ? `url(${$selectedImage})` : `url(${defaultImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
