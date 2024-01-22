import * as S from './ProfileImgMain.style';
import ProfileImgOption from './ProfileImgOption';

export default function ProfileImgMain({ profileImages, selectedProfileImg }) {
  return (
    <S.ProfileImgContainer>
      <S.SelectedProfileImg $selectedImg={selectedProfileImg} />
      <ProfileImgOption profileImages={profileImages} />
    </S.ProfileImgContainer>
  );
}
