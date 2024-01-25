import { Link } from 'react-router-dom';
import PaperBox from '../../components/Paper/PaperBox';
import Skeleton from '../../components/Paper/Skeleton/Skeleton';
import useFetchData from '../../hooks/useFetchData';
import * as S from './List.style';
import Error from '../Error/Error';

export default function List() {
  const { data, isLoading, isError } = useFetchData('recipients/', 'GET');

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <S.Wrapper>
      <S.Container>
        <PaperBox orderBy="messageCount" paperData={data.results} />
        <PaperBox orderBy="createdAt" paperData={data.results} />
        <Link to="/post">
          <S.Button>나도 만들어 보기</S.Button>
        </Link>
      </S.Container>
    </S.Wrapper>
  );
}
