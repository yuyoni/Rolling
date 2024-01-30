import { useState } from 'react';
import * as S from './RecipientInput.style';

export default function RecipientInput({ placeholder, onChange }) {
  const [showError, setShowError] = useState('');

  const handleBlur = event => {
    if (!event.target.value) {
      setShowError('값을 입력해주세요.');
    } else {
      setShowError('');
    }
  };

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
