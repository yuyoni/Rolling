import * as S from './ProfileImgMain.style';
import ProfileImgOption from './ProfileImgOption';

export default function ProfileImgMain({ selectedProfileImg }) {
  return (
    <S.ProfileImgContainer>
      <S.SelectedProfileImg $selectedImg={selectedProfileImg} />
      <ProfileImgOption />
    </S.ProfileImgContainer>
  );
}
