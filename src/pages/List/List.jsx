import { Link } from 'react-router-dom';
import PaperBox from '../../components/Paper/PaperBox';
import Skeleton from '../../components/Paper/Skeleton/Skeleton';
import useFetchData from '../../hooks/useFetchData';
import * as S from './List.style';
import Error from '../Error/Error';

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
    return <Error />;
  }

  return (
    <S.Wrapper>
      <S.Container>
        <PaperBox
          orderBy="ReactionCount"
          paperData={dataOrderByReactionCount.results}
        />
        <PaperBox
          orderBy="createdAt"
          paperData={dataOrderByCreatedAt.results}
        />
        <Link to="/post">
          <S.Button>나도 만들어 보기</S.Button>
        </Link>
      </S.Container>
    </S.Wrapper>
  );
}
