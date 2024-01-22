import { useState } from 'react';
import * as S from './InputText.style';

export default function InputFrom({ placeholder }) {
  const [showError, setShowError] = useState('');

  // focus out 이벤트 발생 시
  const handleBlur = e => {
    if (!e.target.value) {
      setShowError('이름을 입력해 주세요.');
    } else {
      setShowError('');
    }
  };

  // focus시 초기화
  const handleFocus = () => {
    setShowError('');
  };

  return (
    <div>
      <S.ErrorStyle
        placeholder={placeholder}
        $showError={showError}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {/* {showError ? <P>{showError}</P> : null} */}
      {showError && <S.P>{showError}</S.P>}
    </div>
  );
}
