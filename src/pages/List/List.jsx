import { Link } from 'react-router-dom';
import PaperBox from '../../components/Paper/PaperBox';
import Skeleton from '../../components/Paper/Skeleton/Skeleton';
import useFetchData from '../../hooks/useFetchData';
import * as S from './List.style';
import Error from '../Error/Error';

export default function List() {
  const {
    data: dataOrderByMessageCount,
    isLoading: isLoadingMessageCount,
    isError: isErrorMessageCount
  } = useFetchData('3-1/recipients/?sort=like', 'GET');
  const {
    data: dataOrderByCreatedAt,
    isLoading: isLoadingCreatedAt,
    isError: isErrorCreatedAt
  } = useFetchData('3-1/recipients/', 'GET');

  if (isLoadingMessageCount || isLoadingCreatedAt) {
    return <Skeleton />;
  }

  if (isErrorMessageCount || isErrorCreatedAt) {
    return <Error />;
  }

  return (
    <S.Wrapper>
      <S.Container>
        <PaperBox
          orderBy="messageCount"
          paperData={dataOrderByMessageCount.results}
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
