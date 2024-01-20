import LinkButton from '../../components/Button/LinkButton';
import MainBoxFirst from '../../components/home/MainBoxFirst';
import MainBoxSecond from '../../components/home/MainBoxSecond';
import * as S from './Home.style';

export default function Home() {
  return (
    <S.MainArea>
      <S.MainContainer>
        <MainBoxFirst />
        <MainBoxSecond />
      </S.MainContainer>
      <LinkButton value="구경해보기" link="/list" />
    </S.MainArea>
  );
}
