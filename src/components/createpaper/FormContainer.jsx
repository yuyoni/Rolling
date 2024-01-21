import BackgroundBox from './BackgroundBox';
import CreateButton from './CreateButton';
import RecipientInput from './RecipientInput';

function FormContainer() {
  return (
    <div>
      <RecipientInput placeholder="받는 사람 이름을 입력해주세요" />
      <BackgroundBox />
      <CreateButton />
    </div>
  );
}

export default FormContainer;
