import * as S from './Dropdown.style';

export default function Dropdown({ onClick }) {
  // const [dropdown, setDropdown] = useState('false');

  return (
    <S.Wrapper>
      <S.paragraph>카카오톡 공유</S.paragraph>
      <S.paragraph onClick={onClick}>URL 공유</S.paragraph>
    </S.Wrapper>
  );
}
