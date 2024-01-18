import styled from 'styled-components';
import logoImg from '../../assetes/logoIcon.svg';

function Logo() {
  return (
    <div>
      <LogoStyle>
        <LogoImg>
          <img src={logoImg} alt="Logo" />
        </LogoImg>
        <Logotext>Rolling</Logotext>
      </LogoStyle>
    </div>
  );
}

export default Logo;

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Logotext = styled.div`
  color: var(--gray-light-gray-90, #4a494f);
  text-align: center;
  font-family: Poppins;
  font-size: 19.971px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LogoImg = styled.div`
  width: 27.818px;
  height: 27.658px;
  fill: var(--primary-purple-50, #a64eff);
`;
