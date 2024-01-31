import styled from 'styled-components';

const Forms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  width: 72rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 2rem 0 2rem;
    min-width: 40rem;
    //  버튼 줄갯수가 더이상 안늘어나게 width 제한함
  }
`;

export default Forms;
