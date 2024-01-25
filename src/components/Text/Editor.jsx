import * as S from './Editor.style';

export default function Editor({ onChange }) {
  // WYSIWYG
  const modules = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],
        [{ align: 'center' }, { align: 'right' }, { align: 'justify' }],
        [{ list: 'bullet' }, { list: 'ordered' }],
        [{ color: [] }],
        [{ size: ['small', false, 'large'] }]
      ]
    }
  };

  const handleChange = event => {
    const TextWithoutTag = event.slice(3, -4);
    onChange('content', TextWithoutTag);
  };

  return (
    <S.ReactQuillContainer>
      <S.StyledReactQuill
        modules={modules}
        className="ql-editor ql-container ql-toobar"
        style={{ padding: '0' }}
        onChange={handleChange}
      />
    </S.ReactQuillContainer>
  );
}
