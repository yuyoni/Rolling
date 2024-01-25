const BASE_URL = 'https://rolling-api.vercel.app/'; // 추후 환경변수로 빼기

/** BASE_URL + param 로 부터 데이터를 fetch해와서 responseBody를 반환하는 함수
 *
 * @param {string} param URL endpoint
 * @param {string} method 'GET', 'POST', 'DELETE' 와 같은 HTTP 메소드
 * @param {string} data POST 요청일 때 body로 보낼 객체
 * @returns 응답받은 Promise 객체
 */
export default async function fetchData(param, method = 'GET', data = null) {
  const url = `${BASE_URL}${param}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    const responseBody = await response.json();
    return responseBody;
  } catch (error) {
    throw new Error(error);
  }
}
