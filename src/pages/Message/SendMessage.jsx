import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SEOMetatag from '../../SEOMetaTag';
import fetchData from '../../apis/fetchData';
import SubmitButton from '../../components/Button/SubmitButton';
import ToggleButton from '../../components/Button/ToggleButton';
import InputText from '../../components/Input/InputText';
import ProfileImagesMain from '../../components/ProfileImages/ProfileImagesMain';
import { defaultImage } from '../../components/ProfileImages/ProfileImagesMain.style';
import Editor from '../../components/Text/Editor';
import Heading from '../../components/Text/Heading';
import * as S from './SendMessage.style';

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
      const result = await fetchData('profile-images/');
      const imageUrlList = result.imageUrls;
      setProfileImages([...imageUrlList]);
    } catch (error) {
      // eslint-disable-next-line
      alert('프로필 이미지 목록 불러오기 실패');
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsSubmitSuccess(false);
      await fetchData(
        `3-1/recipients/${userId}/messages/`,
        'POST',
        recipientPostData
      );
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
    <S.MessageForm>
      <SEOMetatag title="Rolling - 메세지 보내기" />
      <S.DivStyle>
        <Heading>From.</Heading>
        <InputText
          placeholder="이름을 입력해 주세요"
          onChange={handleChange}
          target="sender"
        />
      </S.DivStyle>
      <S.DivStyle>
        <Heading>프로필 이미지</Heading>
        <ProfileImagesMain
          profileImages={profileImages}
          onChange={handleChange}
          selectedProfileImage={recipientPostData.profileImageURL}
        />
      </S.DivStyle>
      <S.DivStyle>
        <Heading>상대와의 관계</Heading>
        <ToggleButton
          listItems={relationship}
          onChange={handleChange}
          target="relationship"
        >
          {recipientPostData.relationship}
        </ToggleButton>
      </S.DivStyle>
      <S.DivStyle>
        <Heading>내용을 입력해 주세요</Heading>
        <Editor onChange={handleChange} />
      </S.DivStyle>
      <S.FontStyle>
        <Heading>폰트 선택</Heading>
        <ToggleButton listItems={font} onChange={handleChange} target="font">
          {recipientPostData.font}
        </ToggleButton>
      </S.FontStyle>
      <S.SubmitStyle>
        <SubmitButton
          disabled={!recipientPostData.sender || !recipientPostData.content}
          onClick={handleSubmit}
        >
          생성하기
        </SubmitButton>
      </S.SubmitStyle>
    </S.MessageForm>
  );
}
