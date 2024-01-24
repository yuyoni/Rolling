import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import {
  // deleteCard,
  getCardList,
  getRecipientInformation
} from '../../apis/postApis';
import CardContainer from '../../components/Card/CardContainer';
import PostPageHeader from '../../components/Card/PostPageHeader';
import * as S from './Post.stytle';

export default function Post() {
  const { id: recipientId } = useParams();

  const [cards, setCards] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);
  const [recipientName, setRecipientName] = useState('');
  const [recentMessage, setRecentMessage] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [topReaction, setTopReaction] = useState([]);
  const [backgroundURL, setBackgroundImageURL] = useState('');
  const [backgroundColors, setBackgroundColors] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [paperCreatedAt, setPaperCreatedAt] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [paperUpdatedAt, setPaperUpdatedAt] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [reactionNum, setReactionNum] = useState(0);

  const handleInit = async () => {
    const cardResponse = await getCardList(recipientId);
    const recipientsResponse = await getRecipientInformation(recipientId);

    const {
      name,
      backgroundImageURL,
      backgroundColor,
      createdAt,
      recentMessages,
      messageCount,
      reactionCount,
      topReactions
    } = recipientsResponse;

    setRecipientName(name);
    setRecentMessage(recentMessages);
    setCardCount(messageCount);
    setTopReaction(topReactions);
    setBackgroundImageURL(backgroundImageURL);
    setBackgroundColors(backgroundColor);
    setPaperCreatedAt(createdAt);
    setReactionNum(reactionCount);

    setCards([{}, ...cardResponse.results]);
    setCount(cardResponse.count);
  };

  // const handleDelete = async () => {
  //   const response = await deleteCard(recipientId);
  // };

  useEffect(() => {
    handleInit();
  }, []);

  return (
    <S.Page
      $backgroundImageURL={backgroundURL}
      $backgroundColor={backgroundColors}
    >
      <PostPageHeader
        recentMessages={recentMessage}
        name={recipientName}
        messageCount={cardCount}
        topReactions={topReaction}
        isVertical={false}
      />
      <CardContainer cards={cards} />
    </S.Page>
  );
}
