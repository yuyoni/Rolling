import logoImg from '../../assetes/images/logo-icon.svg';
import * as S from './Logo.style';

export default function Logo() {
  return (
    <S.LogoStyle>
      <S.LogoImg>
        <img src={logoImg} alt="Logo" />
      </S.LogoImg>
      <S.LogoText>Rolling</S.LogoText>
    </S.LogoStyle>
  );
}
