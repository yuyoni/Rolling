import { useState } from 'react';
import * as S from './InputText.style';

export default function InputFrom({ placeholder, onChange, target }) {
  const [showError, setShowError] = useState('');

  const handleBlur = event => {
    if (!event.target.value) {
      setShowError('이름을 입력해 주세요.');
    } else {
      setShowError('');
    }
  };

  const handleFocus = () => {
    setShowError('');
  };

  const handleChange = event => {
    onChange(target, event.target.value);
  };

  return (
    <div>
      <S.ErrorStyle
        placeholder={placeholder}
        $showError={showError}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
      />
      {showError && <S.P>{showError}</S.P>}
    </div>
  );
}
