import JSONViewerButtons from '@/components/JSONViewerButtons/JSONViewerButtons';
import upArrow from '../../public/up-arrow.svg';
import downArrow from '../../public/down-arrow.svg';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import docsButton from '../../public/docs.svg';
import EndpointEditor from '@/components/EndpointEditor/EndpointEditor';
import urlButton from '../../public/url.svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store/store';
import CodeMirror from '@uiw/react-codemirror';
import { duotoneDark } from '@uiw/codemirror-theme-duotone';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import {
  fetchSchema,
  setHeaders,
  setQuery,
  setVariables,
} from '@/lib/store/slices';

const Main = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isVariablesOpen, setVariablesOpen] = useState(false);
  const [isHeadersOpen, setHeadersOpen] = useState(false);
  const [isDocsOpen, setDocsOpen] = useState(false);
  const [isUrlOpen, setUrlOpen] = useState(false);
  const router = useRouter();

  const [user, loading] = useAuthState(auth);

  const data = useSelector((state: RootState) => state.data.data);
  const query = useSelector((state: RootState) => state.data.query);
  const variables = useSelector((state: RootState) => state.data.variables);
  const headers = useSelector((state: RootState) => state.data.headers);
  const schema = useSelector((state: RootState) => state.data.schema);
  const schemaLoading = useSelector(
    (state: RootState) => state.data.schemaLoading
  );
  const apiUrl = useSelector((state: RootState) => state.data.apiUrl);
  const error = useSelector((state: RootState) => state.data.error);

  const dispatch = useDispatch<AppDispatch>();
  const editorChangeHandler = (value: string) => {
    dispatch(setQuery(value));
  };

  const propertyEditorChangeHandler = (value: string) => {
    isVariablesOpen
      ? dispatch(setVariables(value))
      : dispatch(setHeaders(value));
  };

  useEffect(() => {
    dispatch(fetchSchema());
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router, apiUrl]);

  const arrowClickHandler = () => {
    setIsEditorOpen(!isEditorOpen);
  };

  const variablesButtonHandler = () => {
    if (!isEditorOpen) {
      setIsEditorOpen(true);
    }
    setHeadersOpen(false);
    setVariablesOpen(true);
  };

  const headersButtonHandler = () => {
    if (!isEditorOpen) {
      setIsEditorOpen(true);
    }
    setHeadersOpen(true);
    setVariablesOpen(false);
  };

  const docsOpenHandler = () => {
    if (!isUrlOpen) {
      setDocsOpen(!isDocsOpen);
    } else {
      setUrlOpen(false);
      setDocsOpen(true);
    }
  };

  const urlOpenHandler = () => {
    if (!isDocsOpen) {
      setUrlOpen(!isUrlOpen);
    } else {
      setDocsOpen(false);
      setUrlOpen(true);
    }
  };

  return (
    <div className="flex h-[calc(100vh-160px)] bg-slate-700 max-sm:flex-col max-sm:h-full">
      <div
        className={`bg-slate-700 h-[calc(100vh-160px)] w-[57px] border-r border-solid border-gray-500 py-2 px-2 max-sm:rotate-360 max-sm:h-[60px] max-sm:w-[100%] max-sm:border-r-0 max-sm:border-b`}
      >
        <button
          className={` ${
            isDocsOpen && 'bg-slate-600'
          } bg-slate-700 hover:bg-slate-600 rounded mb-1 h-10 w-10 p-1 duration-150`}
          onClick={docsOpenHandler}
        >
          <Image src={docsButton} alt="docs" />
        </button>
        <button
          className={` ${
            isDocsOpen && 'bg-slate-600'
          } bg-slate-700 hover:bg-slate-600 rounded h-10 w-10 p-2 duration-150`}
          onClick={urlOpenHandler}
        >
          <Image src={urlButton} alt="url" />
        </button>
      </div>
      {isDocsOpen && (
        <div className="w-[500px] max-sm:absolute max-sm:top-[140px] overflow-auto bg-slate-700 border-r border-solid border-gray-500 py-2 px-5 max-sm:w-full max-sm:border-r-0 max-sm:border-b">
          <h3 className="text-white pl-2 text-3xl">Docs</h3>
          {!schemaLoading ? (
            <div>Loading...</div>
          ) : (
            <CodeMirror
              value={schema ? JSON.stringify(schema, null, 2) : ''}
              theme={duotoneDark}
              extensions={[javascript({ jsx: true })]}
              width="100%"
              height="100%"
              className="w-full max-h-[100%]"
              readOnly
            />
          )}
        </div>
      )}
      {isUrlOpen && (
        <div className="w-[500px] max-sm:absolute max-sm:top-[140px] bg-slate-700 border-r border-solid border-gray-500 py-2 px-5 max-sm:w-full max-sm:border-r-0 max-sm:border-b">
          <h3 className="text-white pl-2 text-3xl">URL</h3>
          <div className="w-[90%] max-sm:w-[70%]">
            <EndpointEditor />
          </div>
        </div>
      )}
      <div className="flex-col w-[50%] max-sm:w-full max-sm:h-[calc(100vh-140px)]">
        <div
          className={`flex ${
            isEditorOpen
              ? 'h-[calc(100vh-160px-35%)]'
              : 'h-[calc(100vh-160px-15%)]'
          }`}
        >
          <CodeMirror
            value={query}
            theme={duotoneDark}
            extensions={[javascript({ jsx: true })]}
            width="100%"
            height="100%"
            className="w-full max-h-[100%]"
            onChange={editorChangeHandler}
          />
          <JSONViewerButtons />
        </div>
        <div
          className={`bg-slate-700 ${
            isEditorOpen
              ? 'h-[calc(100vh-160px-75%)]'
              : 'h-[calc(100vh-160px-95%)]'
          } border-t border-solid border-gray-500 px-2 flex-col py-2`}
        >
          <div className="flex bg-slate-700 justify-between items-center">
            <div className="flex justify-between w-[20%]">
              <button
                className={`bg-slate-700 ${
                  isVariablesOpen ? 'text-white' : 'text-gray-300'
                } hover:bg-slate-600 px-2 py-1 rounded duration-150`}
                onClick={variablesButtonHandler}
              >
                Variables
              </button>
              <button
                className={`bg-slate-700 ${
                  isHeadersOpen ? 'text-white' : 'text-gray-300'
                } hover:bg-slate-600 px-2 py-1 rounded duration-150`}
                onClick={headersButtonHandler}
              >
                Headers
              </button>
            </div>
            <button
              onClick={arrowClickHandler}
              className="bg-slate-700 w-10 h-10 hover:bg-slate-600 duration-150 p-1 rounded"
            >
              <Image src={isEditorOpen ? downArrow : upArrow} alt="Arrow" />
            </button>
          </div>
          {isEditorOpen && (
            <div className="h-[100%] w-[100%] max-sm:h-[100%]">
              <CodeMirror
                value={isVariablesOpen ? variables : headers}
                theme={duotoneDark}
                extensions={[javascript({ jsx: true })]}
                width="100%"
                height="100%"
                className="w-full max-h-[100%] "
                onChange={propertyEditorChangeHandler}
              />
            </div>
          )}
        </div>
      </div>
      <div className="w-[50%] h-[calc(100vh-160px)] bg-slate-600 max-sm:w-[100%] max-sm:h-[calc(100vh-140px)]">
        <CodeMirror
          value={
            JSON.stringify(data, null, 2) !== '{}'
              ? JSON.stringify(data, null, 2)
              : String(error) === null
                ? ''
                : String(error)
          }
          theme={duotoneDark}
          extensions={[javascript({ jsx: true })]}
          width="100%"
          height="100%"
          className="max-h-[100%]"
          readOnly
        />
      </div>
    </div>
  );
};

export default Main;
