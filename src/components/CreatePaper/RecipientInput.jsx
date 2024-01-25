import { useState } from 'react';
import styled from 'styled-components';

// 나중에 따로 분리
// 변수 선언 후 에러 상태 스타일링
const ErrorStyle = styled.input`
  display: flex;
  width: 100%;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  border: ${({ $showError }) =>
    $showError
      ? '1px solid var(--Error, #dc3a3a)'
      : '1px solid var(--gray-300, #ccc)'};
  background: var(--white, #fff);
`;

const P = styled.p`
  color: var(--Error, #dc3a3a);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.06px;
`;

const Label = styled.label``;

export default function RecipientInput({ placeholder }) {
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
    <>
      <Label htmlFor="recipient">To.</Label>
      <ErrorStyle
        type="text"
        placeholder={placeholder}
        $showError={showError}
        onBlur={handleBlur}
        onFocus={handleFocus}
        id="recipient"
        name="name"
        autoComplete="username"
      />
      {showError ? <P>{showError}</P> : null}
    </>
  );
}
