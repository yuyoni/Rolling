import { createContext, useMemo, useState } from 'react';

export const ColorImageContext = createContext();

export function ColorImageProvider({ children }) {
  const [color, setColor] = useState('beige');
  const [background, setBackground] = useState('color');
  // 컨텍스트에 동적인 요소를 사용하면 값이 바뀔때마다 재렌더링이 일어나기때문에 useMemo를 사용하여 최적화를 해준다.
  const memoizedValue = useMemo(
    () => ({ color, setColor, background, setBackground }),
    [color, setColor, background, setBackground]
  );
  return (
    <ColorImageContext.Provider value={memoizedValue}>
      {children}
    </ColorImageContext.Provider>
  );
}
