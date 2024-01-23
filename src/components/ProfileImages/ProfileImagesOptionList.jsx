import * as S from './ProfileImagesOptionList.style';

export default function ProfileImagesOptionList({ profileImages }) {
  return (
    <S.ProfileImageListWrapper>
      <S.Subtitle>프로필 이미지를 선택해주세요!</S.Subtitle>
      <S.ProfileImageList>
        {profileImages.map((urls, index) => (
          <S.ProfileImageOptionItems key={urls} $urls={urls} id={index} />
        ))}
      </S.ProfileImageList>
    </S.ProfileImageListWrapper>
  );
}
