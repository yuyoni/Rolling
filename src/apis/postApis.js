export default async function getCardList(paperId) {
  const url = `https://rolling-api.vercel.app/3-1/recipients/${paperId}/messages/`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
