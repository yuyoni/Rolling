import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundBox from './BackgroundBox';
import CreateButton from './CreateButton';
import LocaleContext from './LocaleContext';
import RecipientInput from './RecipientInput';

const Forms = styled.form`
  width: 45rem;
`;

export default function FormArea() {
  const navigate = useNavigate();
  /* eslint-disable no-console */
  const [color, setColor] = useState('');
  const memoizedValue = useMemo(() => ({ color, setColor }), [color, setColor]);
  // 컨텍스트에 동적인 요소를 사용하면 값이 바뀔때마다 재렌더링이 일어나기때문에 useMemo를 사용하여 최적화를 해준다.
  const event1 = async e => {
    e.preventDefault();
    const name = e.target[0].value;
    const backgroundColor = color;
    const id = Date.now();
    const data = { id, name, backgroundColor };

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
    } catch (error) {
      console.error('오류', error);
    } finally {
      e.target.reset();
      // 필요한지모르겠음
      navigate(`/post/${id}`);
    }

    // const data={
    //   name: e.target[0].value,
    //   backgroundCorlor: e.target
    // }
  };

  return (
    <Forms id="push" onSubmit={event1}>
      <LocaleContext.Provider value={memoizedValue}>
        <RecipientInput placeholder="받는 사람 이름을 입력해주세요" />
        <BackgroundBox />
        <CreateButton>생성하기</CreateButton>
      </LocaleContext.Provider>
    </Forms>
  );
}
