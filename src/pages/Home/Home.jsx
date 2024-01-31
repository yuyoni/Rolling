import LinkButton from '../../components/Button/LinkButton';
import MainBoxFirst from '../../components/Home/MainBoxFirst';
import MainBoxSecond from '../../components/Home/MainBoxSecond';
import MetaTag from '../../MetaTag';
import * as S from './Home.style';

export default function Home() {
  return (
    <S.MainArea>
      <MetaTag
        title="Rolling"
        description="추억의 롤링 페이퍼를 웹에서도 즐길 수 있는 플랫폼 'Rolling'"
      />
      <S.MainContainer>
        <MainBoxFirst />
        <MainBoxSecond />
      </S.MainContainer>
      <LinkButton value="구경해보기" link="/list" />
    </S.MainArea>
  );
}
