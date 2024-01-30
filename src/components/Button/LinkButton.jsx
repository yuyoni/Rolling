import { Link } from 'react-router-dom';
import * as S from './LinkButton.style';

function LinkButton({ value, link }) {
  return (
    <S.ButtonArea>
      <Link to={link}>
        <S.Button>{value}</S.Button>
      </Link>
    </S.ButtonArea>
  );
}

export default LinkButton;
