import styled from 'styled-components';
import logoImg from '../../assetes/logoIcon.svg';

function Logo() {
  return (
    <LogoStyle>
      <LogoImg>
        <img src={logoImg} alt="Logo" />
      </LogoImg>
      <LogoText>Rolling</LogoText>
    </LogoStyle>
  );
}

export default Logo;

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LogoText = styled.div`
  color: var(--gray-light-gray-90, #4a494f);
  text-align: center;
  font-size: 19.971px;
  font-family: 'Pretendard-Bold';
  line-height: normal;
`;

const LogoImg = styled.div`
  width: 28px;
  height: 28px;
  fill: var(--primary-purple-50, #a64eff);
`;
