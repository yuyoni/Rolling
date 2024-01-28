import { useCallback, useState } from 'react';

function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const wrappedFunction = useCallback(
    async (...args) => {
      try {
        setPending(true);
        setError(null);
        const result = await asyncFunction(...args);
        return result;
      } catch (errors) {
        setError(errors);
        return null;
      } finally {
        setTimeout(() => {
          setPending(false);
        }, 3000);
      }
    },
    [asyncFunction]
  );
  return [pending, error, wrappedFunction];
}

export default useAsync;
