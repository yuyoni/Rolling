import { useEffect, useState } from 'react';
import fetchData from '../apis/fetchData';

export default function useFetchData(endpoint, method, body = null) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await fetchData(endpoint, method, body);
        setData(result);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAsync();
  }, [endpoint]);

  return { data, isLoading, isError };
}
