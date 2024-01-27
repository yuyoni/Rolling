import styled from 'styled-components';

const Wrapper = styled.div`
  &:hover {
    filter: brightness(95%);
  }
  &:active {
    filter: brightness(90%);
  }
`;

export default Wrapper;
