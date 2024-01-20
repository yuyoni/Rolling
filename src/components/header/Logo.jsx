import styled from 'styled-components';
import logoImg from '../../assetes/logoIcon.svg';
import * as S from './MainBox.style';

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
