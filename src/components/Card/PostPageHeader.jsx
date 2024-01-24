import PaperInfo from '../PaperInfo';
import * as S from './PostPageHeader.style';

export default function PostPageHeader({
  recentMessages,
  name,
  messageCount,
  topReactions
}) {
  return (
    <S.BackgroundArea>
      <PaperInfo
        recentMessages={recentMessages}
        name={name}
        messageCount={messageCount}
        topReactions={topReactions}
        isVertical={false}
      />
    </S.BackgroundArea>
  );
}
