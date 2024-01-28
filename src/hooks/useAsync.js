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
        //fixme: this is a hack to make sure the loading indicator is visible
        setTimeout(() => {
          setPending(false);
        }, 1500);
      }
    },
    [asyncFunction]
  );
  return [pending, error, wrappedFunction];
}

export default useAsync;
