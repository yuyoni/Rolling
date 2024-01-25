import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  deleteCard,
  getCardList,
  getRecipientInformation
} from '../../apis/postApis';
import CardContainer from '../../components/Card/CardContainer';
import PostPageHeader from '../../components/Card/PostPageHeader';
import editButton from '../../assetes/images/edit-button.svg';
import * as S from './Post.stytle';
import ModalPortal from '../../components/Modal/ModalPortal';
import CardModal from '../../components/Modal/CardModal';

export default function Post() {
  const { id: recipientId } = useParams();

  const [cards, setCards] = useState([]);
  const [recipientName, setRecipientName] = useState('');
  const [recentMessage, setRecentMessage] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [topReaction, setTopReaction] = useState([]);
  const [backgroundURL, setBackgroundImageURL] = useState('');
  const [backgroundColors, setBackgroundColors] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [reactionNum, setReactionNum] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedCard, setSelectedCard] = useState({});

  const handleInit = async () => {
    const cardResponse = await getCardList(recipientId);
    const recipientsResponse = await getRecipientInformation(recipientId);

    const {
      name,
      backgroundImageURL,
      backgroundColor,
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
    setReactionNum(reactionCount);

    setCards([{}, ...cardResponse.results]);
  };

  useEffect(() => {
    handleInit();
  }, []);

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = async cardId => {
    await deleteCard(cardId);
    const newCards = cards.filter(card => card.id !== cardId);
    setCards([{}, newCards]);
    handleInit();
  };

  // eslint-disable-next-line no-unused-vars
  const handleModalOpen = id => {
    setIsModalOpen(true);
    const filteredCard = cards.filter(card => id === card.id)[0];
    setSelectedCard(filteredCard);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCard({});
  };

  useEffect(() => {
    // 이곳에서 selectedCard가 업데이트된 후에 수행할 작업을 추가할 수 있습니다.
    console.log(selectedCard);
  }, [selectedCard]);

  return (
    <>
      <S.Page>
        <PostPageHeader
          recentMessages={recentMessage}
          name={recipientName}
          messageCount={cardCount}
          topReactions={topReaction}
        />
        <S.CardBackgroundWrapper
          $backgroundImageURL={backgroundURL}
          $backgroundColor={backgroundColors}
        >
          <S.EditButton
            $backgroundColor={backgroundColors}
            onClick={handleIsEditing}
          >
            <img src={editButton} alt="edit-button" />
          </S.EditButton>
          <CardContainer
            cards={cards}
            isEditing={isEditing}
            onDelete={handleDelete}
            onClick={handleModalOpen}
          />
        </S.CardBackgroundWrapper>
      </S.Page>
      {isModalOpen && (
        <ModalPortal>
          <CardModal
            card={cards.filter(card => selectedCard === card.id)}
            onClick={handleModalClose}
          />
        </ModalPortal>
      )}
    </>
  );
}
