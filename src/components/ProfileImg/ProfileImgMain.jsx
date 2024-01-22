import * as S from './ProfileImgMain.style';
import ProfileImgList from './ProfileImgList';

export default function ProfileImgMain({ selectedProfileImg }) {
  return (
    <S.ProfileImgContainer>
      <S.SelectedProfileImg $selectedImg={selectedProfileImg} />
      <ProfileImgList />
    </S.ProfileImgContainer>
  );
}
