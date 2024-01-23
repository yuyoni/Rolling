import * as S from './ProfileImagesOptionList.style';

export default function ProfileImagesOptionList({ profileImages }) {
  return (
    <S.ProfileListContainer>
      <S.Subtitle>프로필 이미지를 선택해주세요!</S.Subtitle>
      <S.ProfileList>
        {profileImages.map((urls, index) => (
          <S.ProfileOptionItem key={urls} $urls={urls} id={index} />
        ))}
      </S.ProfileList>
    </S.ProfileListContainer>
  );
}
