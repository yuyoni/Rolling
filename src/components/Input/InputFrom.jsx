import { useState } from 'react';
import styled from 'styled-components';

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
      <ErrorStyle
        placeholder={placeholder}
        $showError={showError}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {/* {showError ? <P>{showError}</P> : null} */}
      {showError && <P>{showError}</P>}
    </div>
  );
}

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
