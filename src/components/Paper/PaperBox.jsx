import getSortedData from '../../utils/getSortedData';
import Wrapper from './PaperBox.style';
import PaperContainer from './PaperContainer';

export default function PaperBox({ orderBy, paperData }) {
  const title = {
    messageCount: '인기 롤링 페이퍼 🔥',
    createdAt: '최근에 만든 롤링 페이퍼 ⭐️️'
  };
  const sortedPaperData = [...getSortedData(orderBy, paperData)];

  return (
    <Wrapper>
      <span>{title[orderBy]}</span>
      <PaperContainer paperData={sortedPaperData} />
    </Wrapper>
  );
}
