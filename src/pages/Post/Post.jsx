import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardContainer from '../../components/Card/CardContainer';
import PostPageHeader from '../../components/Card/PostPageHeader';
import ModalPortal from '../../components/Modal/ModalPortal';
import CardModal from '../../components/Modal/CardModal';
import useAsync from '../../hooks/useAsync';
import editButton from '../../assets/images/edit-button.svg';
import * as S from './Post.stytle';
import {
  deleteCard,
  getCardList,
  getRecipientInformation
} from '../../apis/postApis';

const UPDATE_LIMIT = 6;

export default function Post() {
  /*
   * useState
   * cards : 카드 리스트
   * recipientData : 롤페이퍼주인 정보객체
   * */
  const { id: recipientId } = useParams();
  const [cards, setCards] = useState([{}]);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [offset, setOffset] = useState(0);
  // eslint-disable-next-line
  const [hasNext, setHasNext] = useState(true);
  // eslint-disable-next-line
  const [isLoading, loadingError, getCardsAsync] = useAsync(getCardList);

  const [recipientData, setRecipientData] = useState({
    name: '',
    backgroundColor: '',
    backgroundImageURL: null,
    createdAt: '',
    messageCount: 0,
    recentMessages: [],
    reactionCount: 0,
    topReactions: []
  });

  /* event handler functions
   * handleInit : 페이지 초기화
   * handleIsEditing : 수정 모드 변경
   * handleDelete : 카드 삭제
   * handleModalOpen : 모달 열기
   * handleModalClose : 모달 닫기
   * */
  const handleLoadCards = useCallback(
    async (id, options) => {
      const result = await getCardsAsync(id, options);
      if (!result) {
        return;
      }
      const { results: cardList, next } = result;
      if (next === null) {
        setHasNext(false);
        setIsModalOpen(true);
      }

      if (options.offset === 0) {
        setCards([{}, ...cardList]);
      } else {
        setCards(prevItems => [...prevItems, ...cardList]);
      }
      setOffset(options.offset + UPDATE_LIMIT);
      setHasNext(!!next);
    },
    [getCardsAsync]
  );

  useEffect(() => {
    handleLoadCards(recipientId, { offset: 0 });
  }, [handleLoadCards]);

  const fetchRecipientData = async () => {
    const recipientsResponse = await getRecipientInformation(recipientId);
    setRecipientData(recipientsResponse);
  };

  useEffect(() => {
    fetchRecipientData();
  }, []);

  // eslint-disable-next-line
  const handleLoadMore = () => {
    handleLoadCards(recipientId, { offset, limit: UPDATE_LIMIT });
  };

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = async cardId => {
    await deleteCard(cardId);
    setCards(prevCards => prevCards.filter(card => card.id !== cardId));
    handleLoadCards(recipientId, { offset: 0, limit: UPDATE_LIMIT });
  };

  const handleModalOpen = id => {
    setIsModalOpen(true);
    const filteredCard = cards.filter(card => id === card.id)[0];
    setSelectedCard(filteredCard);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedCard({});
  };

  return (
    <>
      <S.Page>
        <PostPageHeader
          recipientId={recipientId}
          recentMessages={recipientData.recentMessages}
          name={recipientData.name}
          messageCount={recipientData.messageCount}
          topReactions={recipientData.topReactions}
        />
        <S.CardBackgroundWrapper
          $backgroundImageURL={recipientData.backgroundImageURL}
          $backgroundColor={recipientData.backgroundColor}
        >
          <S.EditButton
            $backgroundColor={recipientData.backgroundColor}
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
          <CardModal card={selectedCard} onClick={handleModalClose} />
        </ModalPortal>
      )}
    </>
  );
}
