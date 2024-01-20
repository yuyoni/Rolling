import { useState } from 'react';
import styled from 'styled-components';
import ArrowTop from '../../assetes/ArrowTop.svg';
import ArrowDown from '../../assetes/ArrowDown.svg';

export function ToggleItems({ children, onClick }) {
  return (
    <ToggleList>
      <Button onClick={onClick}>{children}</Button>
    </ToggleList>
  );
}

export default function ToggleButton({ children, nav, listItems }) {
  const [show, setShow] = useState(false);

  // Toggle 클릭 시 보여주기
  const handleShow = () => {
    setShow(!show);
  };

  // Toggle 내용 숨기기
  const handleBlur = () => {
    setShow(false);
  };

  return (
    <div onBlur={handleBlur}>
      <ButtonDown nav={nav} type="button" onClick={handleShow}>
        <span>{children}</span>
        {show ? <ToggleIcon src={ArrowTop} /> : <ToggleIcon src={ArrowDown} />}
      </ButtonDown>
      {show ? (
        <ToggleUl>
          {/* airbnb arrow-body-style */}
          {listItems.map(item => (
            <ToggleList>
              <Button
                key={item}
                onClick={handleShow}
                data-value={item}
                type="button"
              >
                {item}
              </Button>
            </ToggleList>
          ))}
        </ToggleUl>
      ) : null}
    </div>
  );
}

const ButtonDown = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 32rem;
  padding: 1.2rem 1.6rem;
  margin-bottom: 0.8rem;
  border-radius: 0.8rem;
  border: ${({ $showError }) =>
    $showError
      ? '1px solid var(--Error, #dc3a3a)'
      : '1px solid var(--gray-300, #ccc)'};
  background: var(--white, #fff);
`;

const ToggleIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const ToggleUl = styled.ul`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;
  width: ${({ nav }) => (nav ? 'auto' : '32rem')};
  padding: 1rem 0.1rem;
  border-radius: 0.8rem;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const ToggleList = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  font-size: 1.6rem;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.6rem;
  background: none;
  cursor: pointer;
  text-align: start;
`;
