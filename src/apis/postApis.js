import fetchData from './fetchData';

/**
 *
 * @param recipientId
 * @param offset
 * @param limit
 * @returns {Promise<any>}
 * @throws {Error}
 * @description
 * **limit: integer**
 * 리턴받기 원하는 질문 대상 객체 수. 값을 전달하지 않으면 8개의 객체가 리턴됩니다.
 * **offset: integer**
 * 가장 앞 객체부터 건너뛰고 싶은 객체 수. 값을 전달하지 않으면 건너뛰지 않습니다.
 */

export default async function getCardList(
  recipientId,
  { offset = 0, limit = 8 }
) {
  const query = `?limit=${limit}&offset=${offset}`;
  return fetchData(`3-1/recipients/${recipientId}/messages/${query}`);
}
