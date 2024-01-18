import * as S from './PaperContainer.style';
import Paper from './Paper';

export default function PaperContainer() {
  const mock = {
    id: 1,
    name: '강영훈',
    backgroundColor: 'green',
    backgroundImageURL: null,
    createdAt: '2023-10-26T13:19:31.401765Z',
    messageCount: 4,
    recentMessages: [
      {
        id: 32,
        recipientId: 2,
        sender: '김하은',
        profileImageURL:
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
        relationship: '가족',
        content: '열심히 일하는 모습 멋있습니다.',
        font: 'Pretendard',
        createdAt: '2023-11-01T08:05:25.399056Z'
      },
      {
        id: 30,
        recipientId: 2,
        sender: '이영준',
        profileImageURL:
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
        relationship: '지인',
        content: '항상 응원합니다',
        font: 'Noto Sans',
        createdAt: '2023-11-01T08:04:12.852691Z'
      },
      {
        id: 33,
        recipientId: 2,
        sender: '이영준',
        profileImageURL:
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
        relationship: '지인',
        content: '항상 응원합니다',
        font: 'Noto Sans',
        createdAt: '2023-11-01T08:04:12.852691Z'
      },
      {
        id: 34,
        recipientId: 2,
        sender: '이영준',
        profileImageURL:
          'https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8',
        relationship: '지인',
        content: '항상 응원합니다',
        font: 'Noto Sans',
        createdAt: '2023-11-01T08:04:12.852691Z'
      }
    ],
    reactionCount: 48,
    topReactions: [
      {
        id: 27,
        emoji: '😀',
        count: 14
      },
      {
        id: 31,
        emoji: '🥹',
        count: 11
      },
      {
        id: 34,
        emoji: '😄',
        count: 17
      }
    ]
  };

  return (
    <S.Wrapper>
      <S.SlideContainer>
        {/* 임시로 직접 4개 불러와봄 */}
        <Paper data={mock} />
        <Paper data={mock} />
        <Paper data={mock} />
        <Paper data={mock} />
      </S.SlideContainer>
    </S.Wrapper>
  );
}
