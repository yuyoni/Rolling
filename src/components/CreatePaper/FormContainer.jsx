
import styled from 'styled-components';
import BackgroundBox from './BackgroundBox';
import CreateButton from './CreateButton';
import RecipientInput from './RecipientInput';

const Wrap = styled.div`
  width: 45rem;
`;

function FormContainer() {
  return (
    <Wrap>
      <RecipientInput placeholder="받는 사람 이름을 입력해주세요" />
      <BackgroundBox />
      <CreateButton />
    </Wrap>
  );
}

export default FormContainer;
