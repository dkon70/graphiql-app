import Layout from './layout';
import Editor from '@/components/Editor/Editor';
import JSONViewerButtons from '@/components/JSONViewerButtons/JSONViewerButtons';
import upArrow from '../../public/up-arrow.svg';
import downArrow from '../../public/down-arrow.svg';
import { useState } from 'react';
import Image from 'next/image';
import docsButton from '../../public/docs.svg';
import EndpointEditor from '@/components/EndpointEditor/EndpointEditor';
import urlButton from '../../public/url.svg';

const Graphiql = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isVariablesOpen, setVariablesOpen] = useState(false);
  const [isHeadersOpen, setHeadersOpen] = useState(false);
  const [isDocsOpen, setDocsOpen] = useState(false);
  const [isUrlOpen, setUrlOpne] = useState(false);

  const arrowClickHandler = () => {
    if (isEditorOpen) {
      setIsEditorOpen(false);
    } else {
      setIsEditorOpen(true);
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

  const docsOpenHandler = () => {
    if (!isUrlOpen) {
      if (isDocsOpen) {
        setDocsOpen(false);
      } else {
        setDocsOpen(true);
      }
    } else {
      setUrlOpne(false);
      setDocsOpen(true);
    }
  };

  const urlOpenHandler = () => {
    if (!isDocsOpen) {
      if (isUrlOpen) {
        setUrlOpne(false);
      } else {
        setUrlOpne(true);
      }
    } else {
      setDocsOpen(false);
      setUrlOpne(true);
    }
  };

  return (
    <Layout>
      <div className="flex h-[100vhj] bg-slate-700">
        <div
          className={`bg-slate-700 h-[calc(100vh-160px)] w-[57px] border-r border-solid border-gray-500 py-2 px-2`}
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
          <div className="w-[500px] bg-slate-700 border-r border-solid border-gray-500 py-2 px-5">
            <h3 className="text-white pl-2 text-3xl">Docs</h3>
          </div>
        )}
        {isUrlOpen && (
          <div className="w-[500px] bg-slate-700 border-r border-solid border-gray-500 py-2 px-5">
            <h3 className="text-white pl-2 text-3xl">URL</h3>
            <EndpointEditor />
          </div>
        )}
        <div className="flex-col w-[50%]">
          <div
            className={`flex ${
              isEditorOpen
                ? 'h-[calc(100vh-160px-35%)]'
                : 'h-[calc(100vh-160px-10%)]'
            }`}
          >
            <Editor />
            <JSONViewerButtons />
          </div>
          <div
            className={`bg-slate-700 ${
              isEditorOpen
                ? 'h-[calc(100vh-160px-70%)]'
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
              <div className="h-[200px] w-[100%]">
                <Editor />
              </div>
            )}
          </div>
        </div>
        <div className="w-[50%] h-[calc(100vh-160px)] bg-slate-600"> </div>
      </div>
    </Layout>
  );
};

export default Graphiql;
