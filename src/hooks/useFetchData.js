import { useEffect, useState } from 'react';
import fetchData from '../apis/getApi';

export default function useFetchData(endpoint) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setIsLoading(true);

      try {
        const result = await fetchData(endpoint);
        setData(result);
      } catch (error) {
        throw new Error(error);
      }
      setIsLoading(false);
    };

    fetchDataAsync();
  }, [endpoint]);

  return { data, isLoading };
}
