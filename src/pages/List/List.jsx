import MetaTag from '../../MetaTag';
import LinkButton from '../../components/Button/LinkButton';
import PaperBox from '../../components/Paper/PaperBox';
import Skeleton from '../../components/Paper/Skeleton/Skeleton';
import useFetchData from '../../hooks/useFetchData';
import NotFound from '../NotFound/NotFound';
import * as S from './List.style';

export default function List() {
  const {
    data: dataOrderByReactionCount,
    isLoading: isLoadingReactionCount,
    isError: isErrorReactionCount
  } = useFetchData('3-1/recipients/?sort=like&limit=50', 'GET');
  const {
    data: dataOrderByCreatedAt,
    isLoading: isLoadingCreatedAt,
    isError: isErrorCreatedAt
  } = useFetchData('3-1/recipients/?limit=50', 'GET');

  if (isLoadingReactionCount || isLoadingCreatedAt) {
    return <Skeleton />;
  }

  if (isErrorReactionCount || isErrorCreatedAt) {
    return <NotFound />;
  }

  return (
    <S.Wrapper>
      <MetaTag
        title="Rolling - 롤링 페이퍼 구경하기"
        description="다른사람들의 롤링페이퍼를 구경해보고 메시지를 남겨보세요!"
      />
      <S.Container>
        <PaperBox
          orderBy="ReactionCount"
          paperData={dataOrderByReactionCount.results}
        />
        <PaperBox
          orderBy="createdAt"
          paperData={dataOrderByCreatedAt.results}
        />
      </S.Container>
      <LinkButton value="나도 만들어 보기" link="/post" />
    </S.Wrapper>
  );
}
