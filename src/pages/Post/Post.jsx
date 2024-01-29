import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SEOMetaTag from '../../SEOMetaTag';
import fetchData from '../../apis/fetchData';
import getCardList from '../../apis/postApis';
import editButton from '../../assets/images/edit-button.svg';
import CardContainer from '../../components/Card/CardContainer';
import PostPageHeader from '../../components/Card/PostPageHeader';
import CardModal from '../../components/Modal/CardModal';
import ModalPortal from '../../components/Modal/ModalPortal';
import ToastContainer from '../../components/Toast/ToastContainer';
import ToastPortal from '../../components/Toast/ToastlPortal';
import useAsync from '../../hooks/useAsync';
import useToast from '../../hooks/useToast';
import * as S from './Post.stytle';

const UPDATE_LIMIT = 6;
// eslint-disable-next-line
const OBSERVER_OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: 1
};

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
  const [hasNext, setHasNext] = useState(true);

  const [toast, setToast] = useState(false);
  const { toastList, addToast, removeToast } = useToast();

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

  const fetchRecipientData = async () => {
    const recipientsResponse = await fetchData(
      `3-1/recipients/${recipientId}/`
    );
    setRecipientData(recipientsResponse);
  };

  useEffect(() => {
    fetchRecipientData();
  }, []);

  const handleLoadCards = useCallback(async (id, options) => {
    const result = await getCardsAsync(id, options);

    if (!result) {
      return;
    }

    if (!hasNext) {
      return;
    }

    const { results: cardList, next } = result;
    if (next === null) {
      setHasNext(!hasNext);
    }

    if (options.offset === 0) {
      setCards(() => [{}, ...cardList]);
    } else {
      setCards(prevItems => [...prevItems, ...cardList]);
    }
    setOffset(() => options.offset + cardList.length);
  }, []);

  const handleLoadMore = async () => {
    if (!hasNext) {
      addToast('error', '더 이상 카드가 없습니다.');
      return;
    }
    if (isLoading) {
      addToast('warning', '로딩중입니다.');
      return;
    }
    await handleLoadCards(recipientId, { offset, limit: UPDATE_LIMIT });
  };

  useEffect(() => {
    handleLoadCards(recipientId, { offset: 0, limit: 8 });
  }, []);

  /**
   * @description: hh
   * */
  const observerRef = useRef();

  const handleObserver = useCallback(
    entries => {
      const [target] = entries;
      if (target.isIntersecting) {
        handleLoadMore();
      }
    },
    [handleLoadMore]
  );

  useEffect(() => {
    const { current } = observerRef;
    const observer = new IntersectionObserver(handleObserver, OBSERVER_OPTIONS);
    if (current) {
      observer.observe(current);
      return () => {
        observer.unobserve(current);
      };
    }
    return () => {};
  }, [handleObserver, handleLoadMore]);

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleDelete = async cardId => {
    await fetchData(`3-1/messages/${cardId}/`, 'DELETE');
    setCards(prevCards => prevCards.filter(card => card.id !== cardId));
    handleLoadCards(recipientId, { offset: 0, limit: 8 });
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

  useEffect(() => {
    if (toastList.length > 0) {
      setToast(true);
      return;
    }
    setToast(false);
  }, [toastList]);

  // TODO: 하단 div children 삭제시 오작동 문제 해결필요.
  // TODO: EditButton 디자인 업그레이드

  return (
    <>
      <SEOMetaTag title={`Rolling - ${recipientData.name}의 롤링 페이퍼`} />
      <S.Page>
        <PostPageHeader
          recipientId={recipientId}
          recentMessages={recipientData.recentMessages}
          name={recipientData.name}
          messageCount={recipientData.messageCount}
          topReactions={recipientData.topReactions}
          addToast={addToast}
        />
        <S.CardBackgroundWrapper
          $backgroundImageURL={recipientData.backgroundImageURL}
          $backgroundColor={recipientData.backgroundColor}
        >
          <S.EditButton onClick={handleIsEditing}>
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

      {isModalOpen && selectedCard && (
        <ModalPortal>
          <CardModal card={selectedCard} onClick={handleModalClose} />
        </ModalPortal>
      )}

      {toast && (
        <ToastPortal>
          <ToastContainer toastList={toastList} removeToast={removeToast} />
        </ToastPortal>
      )}

      <div ref={observerRef} style={{ height: '10px' }} />
    </>
  );
}
