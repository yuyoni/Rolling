import { useEffect } from 'react';

export default function useClickOutside(reference, setState) {
  useEffect(() => {
    const handleClickOutside = event => {
      if (reference.current && !reference.current.contains(event.target)) {
        setState(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
}
