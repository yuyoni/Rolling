import logoImage from '../../assetes/images/logo-icon.svg';
import * as S from './Logo.style';

export default function Logo() {
  return (
    <S.LogoStyle>
      <S.LogoImage>
        <img src={logoImage} alt="Logo" />
      </S.LogoImage>
      <S.LogoText>Rolling</S.LogoText>
    </S.LogoStyle>
  );
}
