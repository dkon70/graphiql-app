import urlButton from '@/images/url.svg';
import docsButton from '@/images/docs.svg';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { AppDispatch, RootState } from '@/lib/store/store';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { useDispatch, useSelector } from 'react-redux';
import CodeMirror from '@uiw/react-codemirror';
import { fetchSchema, setHeaders, setVariables } from '@/lib/store/slices';
import EndpointEditor from '@/components/EndpointEditor/EndpointEditor';
import JSONViewerButtons from '@/components/JSONViewerButtons/JSONViewerButtons';
import ResponseViewier from '@/components/ResponseViewier';
import QueryEditor from '@/components/QueryEditor';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';
import { useRouter } from 'next/router';
import upArrow from '@/images/up-arrow.svg';
import downArrow from '@/images/down-arrow.svg';

const Main = () => {
  const [isDocsOpen, setDocsOpen] = useState(false);
  const [isUrlOpen, setUrlOpen] = useState(false);

  const schema = useSelector((state: RootState) => state.data.schema);
  const schemaLoading = useSelector(
    (state: RootState) => state.data.schemaLoading
  );

  const docsOpenHandler = () => {
    if (schema === null) {
      dispatch(fetchSchema());
    }
    console.log(schema);
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

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isVariablesOpen, setVariablesOpen] = useState(false);
  const [isHeadersOpen, setHeadersOpen] = useState(false);

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
    if (isEditorOpen) {
      setVariablesOpen(false);
      setHeadersOpen(false);
    }
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

  return (
    <div
      className="flex flex-col self-stretch items-stretch  grow h-[calc(100vh-160px)]"
      data-testid="main"
    >
      <div
        className={`md:flex-row flex flex-col md:justify-between bg-slate-500 items-stretch self-stretch h-full max-h-[calc(100vh-220px)]`}
      >
        <div className="flex w-full h-full">
          <section className="flex  " data-testid="section">
            <div className="flex flex-col gap-5 p-2  md:h-full h-[200px]">
              <button
                className={cn(
                  `${isDocsOpen ? 'bg-slate-900' : 'bg-slate-700'}`,
                  `  hover:bg-slate-600 rounded h-10 w-10 p-2 duration-150`
                )}
                onClick={docsOpenHandler}
              >
                <Image src={docsButton} alt="docs" />
              </button>
              <button
                className={cn(
                  `${isUrlOpen ? 'bg-slate-900' : 'bg-slate-700'}`,
                  `  hover:bg-slate-600 rounded h-10 w-10 p-2 duration-150`
                )}
                onClick={urlOpenHandler}
              >
                <Image src={urlButton} alt="url" />
              </button>
            </div>
            <Separator orientation="vertical" className=" bg-slate-700 " />
            {isDocsOpen ? (
              <div
                className={`${
                  isDocsOpen ? 'absolute z-30 inset-x-[50px]' : 'hidden'
                } max-w-[calc(100vw-100px)] max-h-[calc(100vh-220px)] h-full   transition delay-200`}
              >
                {schemaLoading ? (
                  <div>Loading...</div>
                ) : (
                  <CodeMirror
                    value={
                      schema
                        ? '"Docs": ' + JSON.stringify(schema, null, 2)
                        : '"Docs": '
                    }
                    theme={dracula}
                    extensions={[javascript({ jsx: true })]}
                    width="100%"
                    height="100%"
                    className="w-full max-h-[calc(100vh-160px)] h-full "
                    readOnly
                  />
                )}
              </div>
            ) : null}
            {isUrlOpen ? (
              <div
                className={`  transition delay-200 py-2 px-5 absolute z-30 inset-x-[50px] bg-slate-500 max-w-xs h-[calc(100vh-220px)]`}
              >
                <h3 className="text-white pl-2 text-3xl">URL</h3>
                <div className="w-full ">
                  <EndpointEditor />
                </div>
              </div>
            ) : null}
          </section>
          <section className="w-full" data-testid="section">
            <QueryEditor />
          </section>
        </div>
        <div className="flex w-full h-full">
          <section data-testid="section">
            <JSONViewerButtons />
          </section>
          <section className="w-full" data-testid="section">
            <ResponseViewier />
          </section>
        </div>
      </div>
      <Separator orientation="horizontal" className=" bg-slate-700 " />
      <div
        className={`bg-slate-700  border-t border-solid border-gray-500 p-2 ${
          isEditorOpen
            ? 'absolute inset-x-0 bottom-[80px] w-100wv z-40'
            : 'h-[60px]'
        } transition-all `}
      >
        <div className="flex bg-slate-700 justify-between items-center">
          <div className="flex gap-5 mx-5">
            <button
              className={`bg-slate-700 ${
                isVariablesOpen ? 'text-white' : 'text-gray-300'
              } hover:bg-slate-600 px-2 py-1 rounded duration-100`}
              onClick={variablesButtonHandler}
            >
              Variables
            </button>
            <button
              className={`bg-slate-700 ${
                isHeadersOpen ? 'text-white' : 'text-gray-300'
              } hover:bg-slate-600 px-2 py-1 rounded duration-100`}
              onClick={headersButtonHandler}
            >
              Headers
            </button>
          </div>
          <button
            onClick={propertyButtonHandler}
            className="bg-slate-700 w-10 h-10 hover:bg-slate-600 duration-150 p-1 rounded"
          >
            <Image src={isEditorOpen ? downArrow : upArrow} alt="Arrow" />
          </button>
        </div>
        {isEditorOpen && (
          <div className="h-full w-full">
            <CodeMirror
              value={isVariablesOpen ? variables : headers}
              theme={dracula}
              extensions={[javascript({ jsx: true })]}
              width="100%"
              height="300px"
              onChange={propertyEditorChangeHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
