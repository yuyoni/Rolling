import * as S from './RelationBadge.style';
import { BADGE_COLOR_MAPPER } from '../../constants/ColorMapper';

export default function RelationBadge({ relationship }) {
  const MAPPER = BADGE_COLOR_MAPPER;

  return (
    <S.RelationshipWrapper color={MAPPER[relationship].wrapper}>
      <S.Relationship color={MAPPER[relationship].text}>
        {relationship}
      </S.Relationship>
    </S.RelationshipWrapper>
  );
}
