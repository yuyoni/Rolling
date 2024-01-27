import { useCallback, useEffect, useRef, useState } from 'react';
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
import ToastPortal from '../../components/Toast/ToastlPortal';
import ToastContainer from '../../components/Toast/ToastContainer';
import useToast from '../../hooks/useToast';

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
    const recipientsResponse = await getRecipientInformation(recipientId);
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
      console.warn('no more cards'); // TODO: toast message로 해볼까?
      return;
    }
    if (isLoading) {
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

  const test = () => {
    addToast('info', '테스트중입니다.');
  };

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
    await deleteCard(cardId);
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
      <S.Page onClick={test}>
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
      {toast && (
        <ToastPortal>
          <ToastContainer toastList={toastList} removeToast={removeToast} />
        </ToastPortal>
      )}

      <div ref={observerRef} style={{ height: '10px' }}>
        dkdkdkdkdkdk
      </div>
    </>
  );
}
