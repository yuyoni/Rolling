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

  // 이 두 줄 작성하는데 1시간..
  // React-Quill 사용해서 작성하면 기본적으로 <p></p>태그가 달림
  // 이를 해결해주기 위해 태그 제외 요소 가져오기
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
