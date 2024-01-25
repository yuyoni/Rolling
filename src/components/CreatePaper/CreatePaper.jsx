import styled from 'styled-components';
import FormArea from './FormArea';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CreatePaper() {
  return (
    <Wrap>
      <FormArea />
    </Wrap>
  );
}
