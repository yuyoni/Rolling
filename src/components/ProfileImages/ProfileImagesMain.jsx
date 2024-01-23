import * as S from './ProfileImagesMain.style';
import ProfileIamgesOptionList from './ProfileImagesOptionList';

export default function ProfileImgMain({
  profileImages,
  selectedProfileImage
}) {
  return (
    <S.ProfileImageWrapper>
      <S.SelectedProfileImage $selectedImg={selectedProfileImage} />
      <ProfileIamgesOptionList profileImages={profileImages} />
    </S.ProfileImageWrapper>
  );
}
