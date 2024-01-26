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
  border: ${({ $showError }) =>
    $showError
      ? '1px solid var(--Error, #dc3a3a)'
      : '1px solid var(--gray-300, #ccc)'};
  background: var(--White, #ffffff);
  border-radius: 0.8rem;
  margin-top: 1.2rem;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.016rem;
`;

const P = styled.p`
  color: var(--Error, #dc3a3a);
  font-family: Pretendard;
  font-size: 1.6rem;
  line-height: 1.8rem;
  margin-top: 0.8rem;
`;

const Label = styled.label`
  color: var(--gray-900, #181818);
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4.2rem;
  letter-spacing: -0.024rem;
`;

const Wrapper = styled.div`
  margin-top: 5.7rem;
`;

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
    <Wrapper>
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
        onChange={onChange}
      />
      {showError && <P>{showError}</P>}
    </Wrapper>
  );
}
