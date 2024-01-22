import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

export const StyledReactQuill = styled(ReactQuill)`
  width: 72rem;
`;

export const ReactQuillContainer = styled.div`
  border-radius: 0.8rem;
  border: 1px solid var(--gray-300, #ccc);
  overflow: hidden;
`;
