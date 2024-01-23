import * as S from './ProfileImagesOptionList.style';

export default function ProfileImagesOptionList({ profileImages, onChange }) {
  const handleChange = event => {
    onChange('profileImageURL', profileImages[event.target.id]);
  };
  return (
    <S.ProfileImageListWrapper>
      <S.Subtitle>프로필 이미지를 선택해주세요!</S.Subtitle>
      <S.ProfileImageList>
        {profileImages.map((urls, index) => (
          <S.ProfileImageOptionItems
            key={urls}
            $urls={urls}
            id={index}
            onClick={handleChange}
          />
        ))}
      </S.ProfileImageList>
    </S.ProfileImageListWrapper>
  );
}
