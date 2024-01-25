const ROOT_URL = 'https://rolling-api.vercel.app/3-1/recipients';

export default async function postMessage(data) {
  const { recipientId } = data;
  const response = await fetch(`${ROOT_URL}/${recipientId}/messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    throw new Error('메세지 생성에 실패하셨습니다.');
  }
  const body = await response.json();

  return body;
}
