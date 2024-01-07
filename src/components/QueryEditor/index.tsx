import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { AppDispatch, RootState } from '@/lib/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '@/lib/store/slices';
import { dracula } from '@uiw/codemirror-theme-dracula';

const QueryEditor = () => {
  const query = useSelector((state: RootState) => state.data.query);
  const dispatch = useDispatch<AppDispatch>();

  const editorChangeHandler = (value: string) => {
    dispatch(setQuery(value));
  };
  return (
    <CodeMirror
      value={query}
      theme={dracula}
      extensions={[javascript({ jsx: true })]}
      width="100%"
      height="100%"
      className="max-h-[100%] w-full  min-h-[100%] h-full"
      onChange={editorChangeHandler}
    />
  );
};

export default QueryEditor;
