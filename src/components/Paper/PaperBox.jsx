import Wrapper from './PaperBox.style';
import PaperContainer from './PaperContainer';

export default function PaperBox({ orderBy, paperData }) {
  const title = {
    messageCount: '인기 롤링 페이퍼 🔥',
    createdAt: '최근에 만든 롤링 페이퍼 ⭐️️'
  };

  return (
    <Wrapper>
      <span>{title[orderBy]}</span>
      <PaperContainer paperData={paperData} />
    </Wrapper>
  );
}
