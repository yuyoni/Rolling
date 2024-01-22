const BASE_URL = 'https://rolling-api.vercel.app/3-1/'; // 추후 환경변수로 빼기

export default async function fetchData(param) {
  const url = `${BASE_URL}${param}`;
  try {
    const response = await fetch(url);
    const body = await response.json();
    return body;
  } catch (e) {
    throw Error(e);
  }
}
