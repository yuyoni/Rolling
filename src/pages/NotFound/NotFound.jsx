import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/Button/SubmitButton';
import * as S from './NotFound.style';
import notFound from '../../assets/images/not-found.png';

export default function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <S.MainDiv>
      <S.WrapperDiv>
        <img src={notFound} alt="404 페이지 이미지" />
        <h1>404</h1>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <SubmitButton onClick={handleClick}>돌아가기</SubmitButton>
      </S.WrapperDiv>
    </S.MainDiv>
  );
}
