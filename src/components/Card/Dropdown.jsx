import { useEffect } from 'react';
import * as S from './Dropdown.style';
import shareKakao from '../../utils/shareKakaoLink';

export default function Dropdown({ onClick, name }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });

  return (
    <S.Wrapper>
      <S.paragraph
        onClick={() =>
          shareKakao(window.location.href, `${name}님의 롤링페이퍼입니다.`)
        }
      >
        카카오톡 공유
      </S.paragraph>
      <S.paragraph onClick={onClick}>URL 공유</S.paragraph>
    </S.Wrapper>
  );
}
