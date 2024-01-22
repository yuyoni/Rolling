import * as S from './ProfileImg.style';

export default function ProfileImgMain({ selectedProfileImg }) {
  return (
    <S.ProfileImgContainer>
      <S.SelectedProfileImg $selectedImg={selectedProfileImg} />
      <ProfileImgList />
    </S.ProfileImgContainer>
  );
}
