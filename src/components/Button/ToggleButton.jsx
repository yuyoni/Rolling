import { useState } from 'react';
import ArrowTop from '../../assetes/images/arrow-top.svg';
import ArrowDown from '../../assetes/images/arrow-down.svg';
import * as S from './ToggleButton.style';

export function ToggleItems({ children, onClick }) {
  return (
    <S.ToggleList>
      <S.Button onClick={onClick}>{children}</S.Button>
    </S.ToggleList>
  );
}

export default function ToggleButton({
  children,
  nav,
  listItems,
  onChange,
  target
}) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleBlur = () => {
    setShow(false);
  };

  const handleChange = event => {
    onChange(target, event.target.dataset.value);
  };

  return (
    <div onBlur={handleBlur}>
      <S.ButtonDown nav={nav} type="button" onClick={handleShow}>
        <span>{children}</span>
        <S.ToggleIcon
          src={show ? ArrowTop : ArrowDown}
          alt="토글 이미지 아이콘"
        />
      </S.ButtonDown>
      {show && (
        <S.ToggleUl>
          {/* airbnb arrow-body-style */}
          {listItems.map(item => (
            <S.ToggleList>
              <S.Button
                key={item}
                onClick={handleShow}
                onMouseOver={handleChange}
                data-value={item}
                type="button"
              >
                {item}
              </S.Button>
            </S.ToggleList>
          ))}
        </S.ToggleUl>
      )}
    </div>
  );
}
