import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchData from '../../apis/fetchData';
import purple from '../../assets/images/basket.jpg';
import beige from '../../assets/images/desert.jpg';
import green from '../../assets/images/sky.jpg';
import blue from '../../assets/images/voldaik.jpg';
import { ColorImageContext } from '../../contexts/ColorImageContext';
import BackgroundBox from './BackgroundBox';
import CreateButton from './CreateButton';
import Forms from './FormArea.style';
import RecipientInput from './RecipientInput';

export default function FormArea() {
  const { color, background } = useContext(ColorImageContext);
  const navigate = useNavigate();
  const [abled, setAbled] = useState(true);
  // 컨텍스트에 동적인 요소를 사용하면 값이 바뀔때마다 재렌더링이 일어나기때문에 useMemo를 사용하여 최적화를 해준다.
  const submitEvent = async event => {
    event.preventDefault();
    const image = { beige, purple, blue, green };
    const name = event.target[0].value;
    const backgroundColor = color;
    // 백그라운드컬러 값은 null이 안되고 값이 무조건있어야함
    const backgroundImageURL =
      background === 'image'
        ? `https://rolling-team1.netlify.app${image[color]}`
        : null;
    const team = `3-1`;
    const data = { name, backgroundColor, backgroundImageURL, team };

    try {
      const result = await fetchData('3-1/recipients/', 'POST', data);
      const { id } = result;
      navigate(`/post/${id}`);
    } catch (error) {
      throw new Error(error);
    } finally {
      event.target.reset();
    }
  };

  const handleInput = e => {
    if (e.target.value) {
      setAbled(false);
    } else {
      setAbled(true);
    }
  };

  return (
    <Forms id="itembox" onSubmit={submitEvent}>
      <RecipientInput
        placeholder="받는 사람 이름을 입력해주세요"
        onChange={handleInput}
      />
      <BackgroundBox />
      <CreateButton abled={abled}>생성하기</CreateButton>
    </Forms>
  );
}
