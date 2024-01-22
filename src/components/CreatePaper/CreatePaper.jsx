import styled from 'styled-components';
import FormContainer from './FormContainer';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CreatePaper() {
  return (
    <Wrap>
      <FormContainer />
    </Wrap>
  );
}
