import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import purple from '../../assetes/images/basket.jpg';
import beige from '../../assetes/images/desert.jpg';
import blue from '../../assetes/images/mokoko.png';
import green from '../../assetes/images/sky.jpg';
import BackgroundBox from './BackgroundBox';
import CreateButton from './CreateButton';
import ColorImageContext from '../../contexts/ColorImageContext';
import RecipientInput from './RecipientInput';

const Forms = styled.form`
  width: 45rem;
`;

export default function FormArea() {
  const navigate = useNavigate();
  /* eslint-disable no-console */
  const [color, setColor] = useState('beige');
  const [background, setBackground] = useState('color');
  const memoizedValue = useMemo(
    () => ({ color, setColor, background, setBackground }),
    [color, setColor, background, setBackground]
  );
  // 컨텍스트에 동적인 요소를 사용하면 값이 바뀔때마다 재렌더링이 일어나기때문에 useMemo를 사용하여 최적화를 해준다.
  const submitEvent = async event => {
    event.preventDefault();
    const image = { beige, purple, blue, green };
    const name = event.target[0].value;
    const backgroundColor = color;
    // 백그라운드컬러 값은 null이 안되고 값이 무조건있어야함
    console.log(color, image[color]);
    const backgroundImageURL =
      background === 'image' ? `http://localhost:3000/${image[color]}` : null;
    // 임시주소부여
    const team = `3-1`;
    const data = { name, backgroundColor, backgroundImageURL, team };

    try {
      const response = await fetch(
        'https://rolling-api.vercel.app/3-1/recipients/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );
      const result = await response.json();
      console.log(result);
      // const { id } = result; 임시 주석처리
      navigate(`/post`);
      // navigate(`/post/${id}`); 임시 주석처리
    } catch (error) {
      console.error('오류', error);
    } finally {
      event.target.reset();
      // 필요한지모르겠음
    }

    // const data={
    //   name: e.target[0].value,
    //   backgroundCorlor: e.target
    // }
  };

  return (
    <Forms id="itembox" onSubmit={submitEvent}>
      <ColorImageContext.Provider value={memoizedValue}>
        <RecipientInput placeholder="받는 사람 이름을 입력해주세요" />
        <BackgroundBox />
        <CreateButton>생성하기</CreateButton>
      </ColorImageContext.Provider>
    </Forms>
  );
}
