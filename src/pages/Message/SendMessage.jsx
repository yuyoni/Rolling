import Heading from '../../components/Text/Heading';
import InputText from '../../components/Input/InputText';
import SendMessageForm from './SendMessageForm';
import ToggleButton from '../../components/Button/ToggleButton';
import SubmitButton from '../../components/Button/SubmitButton';
import Editor from '../../components/Text/Editor';
import ProfileImgMain from '../../components/ProfileImg/ProfileImgMain';

const relationship = ['지인', '친구', '동료', '가족'];
const font = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];

export default function SendMessage() {
  return (
    <SendMessageForm>
      <div className="MessagePage__input">
        <Heading>From.</Heading>
        <InputText placeholder="이름을 입력해 주세요" />
      </div>
      <div className="MessagePage__profileImg">
        <Heading>프로필 이미지</Heading>
        <ProfileImgMain />
      </div>
      <div className="MessagePage__relationship">
        <Heading>상대와의 관계</Heading>
        <ToggleButton listItems={relationship} target="relationship" />
      </div>
      <div className="MessagePage__content">
        <Heading>내용을 입력해 주세요</Heading>
        <Editor />
      </div>
      <div className="MessagePage__font">
        <Heading>폰트 선택</Heading>
        <ToggleButton listItems={font} target="font" />
      </div>
      <div className="MessagePage__submit">
        <SubmitButton>생성하기</SubmitButton>
      </div>
    </SendMessageForm>
  );
}
