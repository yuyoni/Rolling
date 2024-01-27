import { useState } from 'react';
import * as S from './RecipientInput.style';

export default function RecipientInput({ placeholder, onChange }) {
  const [showError, setShowError] = useState('');

  // focus out 이벤트 발생 시
  const handleBlur = e => {
    if (!e.target.value) {
      setShowError('값을 입력해주세요.');
    } else {
      setShowError('');
    }
  };

  // focus시 초기화
  const handleFocus = () => {
    setShowError('');
  };

  return (
    <S.Wrapper>
      <S.Label htmlFor="recipient">To.</S.Label>
      <S.ErrorStyle
        type="text"
        placeholder={placeholder}
        $showError={showError}
        onBlur={handleBlur}
        onFocus={handleFocus}
        id="recipient"
        name="name"
        autoComplete="username"
        onChange={onChange}
      />
      {showError && <S.P>{showError}</S.P>}
    </S.Wrapper>
  );
}
