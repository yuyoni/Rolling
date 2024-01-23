import * as S from './ProfileImagesMain.style';
import ProfileIamgesOptionList from './ProfileImagesOptionList';

export default function ProfileImgMain({
  profileImages,
  selectedProfileImage,
  onChange
}) {
  return (
    <S.ProfileImageWrapper>
      <S.SelectedProfileImage $selectedImage={selectedProfileImage} />
      <ProfileIamgesOptionList
        profileImages={profileImages}
        onChange={onChange}
      />
    </S.ProfileImageWrapper>
  );
}
