import { useEffect, useState } from 'react';
import { deleteCard, getCardList } from '../../apis/postApis';
import CardContainer from '../../components/Card/CardContainer';
import PaperHeader from '../../components/Card/PaperHeader';
import * as S from './Post.stytle';

export default function Post() {
  // const { recipientId } = useParams();
  const recipientId = 2508; // Test

  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0);

  const handleInit = async () => {
    const response = await getCardList(recipientId);
    setCards([{}, ...response.results]);
    setCount(response.count);
  };

  // const handleDelete = async () => {
  //   const response = await deleteCard(recipientId);
  // };

  useEffect(() => {
    handleInit();
  }, []);

  return (
    <S.Page>
      <PaperHeader count={count} />
      <CardContainer cards={cards} />
    </S.Page>
  );
}
