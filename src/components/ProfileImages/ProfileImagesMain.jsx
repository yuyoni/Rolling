import * as S from './ProfileImagesMain.style';
import ProfileIamgesOptionList from './ProfileImagesOptionList';

export default function ProfileImgMain({ profileImages, selectedProfileImg }) {
  return (
    <S.ProfileImgContainer>
      <S.SelectedProfileImg $selectedImg={selectedProfileImg} />
      <ProfileIamgesOptionList profileImages={profileImages} />
    </S.ProfileImgContainer>
  );
}
