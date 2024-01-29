import * as S from './Skeleton.style';

export default function SkeletonElement() {
  return (
    <S.SkeletonBox>
      <S.SkeletonTitle />
      <S.SkeletonList>
        <S.SkeletonItem />
        <S.SkeletonItem />
        <S.SkeletonItem />
        <S.SkeletonItem />
      </S.SkeletonList>
    </S.SkeletonBox>
  );
}
