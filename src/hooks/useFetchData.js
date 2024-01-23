import { useEffect, useState } from 'react';
import fetchData from '../apis/getApi';

export default function useFetchData(endpoint) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData(endpoint);
        setData(result);
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchDataAsync();
  }, [endpoint]);

  return data;
}
