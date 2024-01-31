import { createContext, useMemo, useState } from 'react';

export const ColorImageContext = createContext();

export function ColorImageProvider({ children }) {
  const [color, setColor] = useState('beige');
  const [background, setBackground] = useState('color');
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
