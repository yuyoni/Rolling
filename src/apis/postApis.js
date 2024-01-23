// TODO: Error 처리.
// TODO: API 주소를 환경변수로 빼기.

/**
 *
 * @param recipientId
 * @queryParam limit, offset
 * @returns {Promise<any>}
 * @throws {Error}
 * @description
 * **limit: integer**
 * 리턴받기 원하는 질문 대상 객체 수. 값을 전달하지 않으면 8개의 객체가 리턴됩니다.
 * **offset: integer**
 * 가장 앞 객체부터 건너뛰고 싶은 객체 수. 값을 전달하지 않으면 건너뛰지 않습니다.
 */

export async function getCardList(recipientId) {
  const url = `https://rolling-api.vercel.app/3-1/recipients/${recipientId}/messages/`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getRecipientInformation(recipientId) {
  const url = `https://rolling-api.vercel.app/3-1/recipients/${recipientId}/`;
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

/**
 *
 * @param recipientId
 * @queryParam limit, offset
 * @returns {Promise<any>}
 * @throws {Error}
 *
 * @description
 * **limit: integer**
 * 리턴받기 원하는 질문 대상 객체 수. 값을 전달하지 않으면 8개의 객체가 리턴됩니다.
 *
 * **offset: integer**
 * 가장 앞 객체부터 건너뛰고 싶은 객체 수. 값을 전달하지 않으면 건너뛰지 않습니다.
 */
export async function getReactions(recipientId) {
  const url = `https://rolling-api.vercel.app/3-1/recipients/${recipientId}/reactions/`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
