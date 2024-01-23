import PaperInfo from '../PaperInfo';
import Wrapper from './Paper.style';

export default function Paper({ data }) {
  const { name, recentMessages, messageCount, topReactions } = data;

  return (
    <Wrapper>
      <PaperInfo
        name={name}
        recentMessages={recentMessages}
        messageCount={messageCount}
        topReactions={topReactions}
      />
    </Wrapper>
  );
}
