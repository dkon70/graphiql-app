import JSONViewerButtons from '@/components/JSONViewerButtons/JSONViewerButtons';
import upArrow from '@/images/up-arrow.svg';
import downArrow from '@/images/down-arrow.svg';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import EndpointEditor from '@/components/EndpointEditor/EndpointEditor';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/lib/store/store';
import CodeMirror from '@uiw/react-codemirror';
import { duotoneDark } from '@uiw/codemirror-theme-duotone';
import { javascript } from '@codemirror/lang-javascript';
import {
  fetchSchema,
  setHeaders,
  setVariables,
} from '@/lib/store/slices';
import ResponseViewier from '@/components/ResponseViewier';

const Main = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isVariablesOpen, setVariablesOpen] = useState(false);
  const [isHeadersOpen, setHeadersOpen] = useState(false);
  // const [isDocsOpen, setDocsOpen] = useState(false);
  const [isUrlOpen, setUrlOpen] = useState(false);
  const router = useRouter();

  const [user, loading] = useAuthState(auth);


 
  const variables = useSelector((state: RootState) => state.data.variables);
  const headers = useSelector((state: RootState) => state.data.headers);
 
  const apiUrl = useSelector((state: RootState) => state.data.apiUrl);
 

  const dispatch = useDispatch<AppDispatch>();
  

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

  const propertyButtonHandler = () => {
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

  // const docsOpenHandler = () => {
  //   if (!isUrlOpen) {
  //     setDocsOpen(!isDocsOpen);
  //   } else {
  //     setUrlOpen(false);
  //     setDocsOpen(true);
  //   }
  // };

  // const urlOpenHandler = () => {
  //   if (!isDocsOpen) {
  //     setUrlOpen(!isUrlOpen);
  //   } else {
  //     setDocsOpen(false);
  //     setUrlOpen(true);
  //   }
  // };

  return (
    <div className="flex h-[calc(100vh-160px)] bg-slate-700 max-sm:flex-col max-sm:h-full">
      <div
        className={`bg-slate-700 h-[calc(100vh-160px)] w-[57px] border-r border-solid border-gray-500 py-2 px-2 max-sm:rotate-360 max-sm:h-[60px] max-sm:w-[100%] max-sm:border-r-0 max-sm:border-b`}
      >
        {/* <button
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
        </button> */}
      </div>
      {/* {isDocsOpen && (
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
      )} */}
      {isUrlOpen && (
        <div className="w-[500px] max-sm:absolute max-sm:top-[140px] bg-slate-700 border-r border-solid border-gray-500 py-2 px-5 max-sm:w-full max-sm:border-r-0 max-sm:border-b">
          <h3 className="text-white pl-2 text-3xl">URL</h3>
          <div className="w-[90%] max-sm:w-[70%]">
            <EndpointEditor />
          </div>
        </div>
      )}
      <section className="flex-col w-[50%] max-sm:w-full max-sm:h-[calc(100vh-140px)]">
        <div
          className={`flex ${
            isEditorOpen
              ? 'h-[calc(100vh-160px-35%)]'
              : 'h-[calc(100vh-160px-15%)]'
          }`}
        >
          <JSONViewerButtons />
        </div>
        
      </section>
      <div className="w-[50%] h-[100%] bg-slate-600 max-sm:w-[100%] max-sm:h-[calc(100vh-140px)]">
        <ResponseViewier/>
      </div>
    </div>
  );
};

export default Main;
