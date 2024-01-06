import { RootState } from '@/lib/store/store';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CodeMirror from '@uiw/react-codemirror';
import { useSelector } from 'react-redux';

const ResponseViewier = () => {
    const data = useSelector((state: RootState) => state.data.data);
    const error = useSelector((state: RootState) => state.data.error);
  return (
    <CodeMirror
          value={
            JSON.stringify(data, null, 2) !== '{}'
              ? JSON.stringify(data, null, 2)
              : String(error) === null
                ? ''
                : String(error)
          }
          theme={dracula}
          extensions={[javascript({ jsx: true })]}
          width="100%"
          height="100%"
          className="max-h-[100%] w-full min-w-[100%] min-h-[100%] h-full"
          readOnly
        />
  )
}

export default ResponseViewier