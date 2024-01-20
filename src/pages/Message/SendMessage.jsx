import Heading from '../../components/Text/Heading';
import InputFrom from '../../components/Input/InputFrom';
import SendMessageForm from './SendMessageForm';
import ToggleButton from '../../components/Button/ToggleButton';

const relationship = ['지인', '친구', '동료', '가족'];
const font = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];

export default function SendMessage() {
  return (
    <SendMessageForm>
      <div className="MessagePage__input">
        <Heading>From.</Heading>
        <InputFrom />
      </div>
      <div className="MessagePage__profileImg">
        <Heading>프로필 이미지</Heading>
      </div>
      <div className="MessagePage__relationship">
        <Heading>상대와의 관계</Heading>
        <ToggleButton listItems={relationship} target="relationship" />
      </div>
      <div className="MessagePage__content">
        <Heading>내용을 입력해 주세요</Heading>
      </div>
      <div className="MessagePage__font">
        <Heading>폰트 선택</Heading>
        <ToggleButton listItems={font} target="font" />
      </div>
      <div className="MessagePage__submit">생성하기</div>
    </SendMessageForm>
  );
}
