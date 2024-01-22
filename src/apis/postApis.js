// TODO: Error 처리.
// TODO: API 주소를 환경변수로 빼기.

export async function getCardList(recipientId) {
  const url = `https://rolling-api.vercel.app/3-1/recipients/${recipientId}/messages/`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function deleteCard(cardId) {
  const url = `https://rolling-api.vercel.app/3-1/recipients/${cardId}/messages/`;
  const response = await fetch(url, { method: 'DELETE' });
  const data = await response.json();
  return data;
}
