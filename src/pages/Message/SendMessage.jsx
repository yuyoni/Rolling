import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Heading from '../../components/Text/Heading';
import InputText from '../../components/Input/InputText';
import SendMessageForm from './SendMessageForm';
import ToggleButton from '../../components/Button/ToggleButton';
import SubmitButton from '../../components/Button/SubmitButton';
import Editor from '../../components/Text/Editor';
import ProfileImagesMain from '../../components/ProfileImages/ProfileImagesMain';
import getProfileImages from '../../apis/profileApis';
import defaultImage from '../../assetes/images/default-profile-image.png';
import postMessage from '../../apis/recipientApis';

const relationship = ['지인', '친구', '동료', '가족'];
const font = ['Noto Sans', 'Pretendard', '나눔명조', '나눔손글씨 손편지체'];

export default function SendMessage() {
  const { id: userId } = useParams();
  const navigate = useNavigate();
  const [profileImages, setProfileImages] = useState([]);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [recipientPostData, setRecipientPostData] = useState({
    team: '3-1',
    recipientId: userId,
    sender: '',
    profileImageURL: defaultImage,
    relationship: '지인',
    content: '',
    font: 'Noto Sans'
  });

  const handleChange = (target, value) => {
    setRecipientPostData(prevrecipientPostData => ({
      ...prevrecipientPostData,
      [target]: value
    }));
  };

  const handleLoad = async () => {
    try {
      const result = await getProfileImages();
      setProfileImages([...result]);
    } catch (error) {
      /* empty */
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsSubmitSuccess(false);
      await postMessage(recipientPostData);
    } catch (error) {
      return;
    } finally {
      setIsSubmitSuccess(true);
    }
  };

  useEffect(() => {
    if (isSubmitSuccess) {
      navigate(`/post/${userId}`);
    }
  }, [isSubmitSuccess, userId]);

  return (
    <SendMessageForm>
      <div className="MessagePage__input">
        <Heading>From.</Heading>
        <InputText
          placeholder="이름을 입력해 주세요"
          onChange={handleChange}
          target="sender"
        />
      </div>
      <div className="MessagePage__profileImg">
        <Heading>프로필 이미지</Heading>
        <ProfileImagesMain
          profileImages={profileImages}
          onChange={handleChange}
          selectedProfileImage={recipientPostData.profileImageURL}
        />
      </div>
      <div className="MessagePage__relationship">
        <Heading>상대와의 관계</Heading>
        <ToggleButton
          listItems={relationship}
          onChange={handleChange}
          target="relationship"
        >
          {recipientPostData.relationship}
        </ToggleButton>
      </div>
      <div className="MessagePage__content">
        <Heading>내용을 입력해 주세요</Heading>
        <Editor onChange={handleChange} />
      </div>
      <div className="MessagePage__font">
        <Heading>폰트 선택</Heading>
        <ToggleButton listItems={font} onChange={handleChange} target="font">
          {recipientPostData.font}
        </ToggleButton>
      </div>
      <div className="MessagePage__submit">
        <SubmitButton
          disabled={!recipientPostData.sender || !recipientPostData.content}
          onClick={handleSubmit}
        >
          생성하기
        </SubmitButton>
      </div>
    </SendMessageForm>
  );
}
