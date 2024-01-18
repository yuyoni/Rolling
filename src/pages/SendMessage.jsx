import Header from '../components/Header';
import Heading from '../components/Heading';
import InputFrom from '../components/InputFrom';

export default function SendMessage() {
  return (
    <>
      <Header />
      <div className="MessagePage__input">
        <Heading>From.</Heading>
        <InputFrom />
      </div>
      <div className="MessagePage__proflieImg">
        <Heading>프로필 이미지</Heading>
      </div>
      <div className="MessagePage__relationship">
        <Heading>상대와의 관계</Heading>
      </div>
      <div className="MessagePage__content">
        <Heading>내용을 입력해 주세요</Heading>
      </div>
      <div className="MessagePage__font">
        <Heading>폰트 선택</Heading>
      </div>
      <div className="MessagePage__submit">생성하기</div>
    </>
  );
}
