import * as S from './Skeleton.style';
import SkeletonElement from './SkeletonElement';

export default function Skeleton() {
  return (
    <S.Wrapper>
      <S.Container>
        <SkeletonElement />
        <SkeletonElement />
      </S.Container>
    </S.Wrapper>
  );
}
