import { useEffect, useState } from 'react';
import getCardList from '../../apis/postApis';
import CardContainer from '../../components/Card/CardContainer';
import PaperHeader from '../../components/Card/PaperHeader';
import * as S from './Post.stytle';

export default function Post() {
  // const { questionID } = useParams();
  const recipientId = 2508; // Test

  const [cards, setCards] = useState([]);
  // eslint-disable-next-line
  const [count, setCount] = useState(0);

  const handleInit = async () => {
    const response = await getCardList(recipientId);
    setCards(response.results);
    setCount(response.count);
  };

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
