import { setQuery } from '@/lib/store/slices';
import { AppDispatch, RootState } from '@/lib/store/store';
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Editor = () => {
  const [lines, setLines] = useState([1]);
  const [textareaValue, setTextareaValue] = useState(
    useSelector((state: RootState) => state.data.query)
  );
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineNumbersRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  const linesHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
    const totalLines = event.target.value.split('\n').length;
    setLines([...Array(totalLines).keys()].map((index) => index + 1));
    dispatch(setQuery(event.target.value));
  };

  const handleTabs = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      const { selectionStart, selectionEnd } = event.currentTarget;
      const newValue =
        textareaValue.substring(0, selectionStart) +
        '\t' +
        textareaValue.substring(selectionEnd);
      setTextareaValue(newValue);

      const newCursorPosition = selectionStart + 1;
      requestAnimationFrame(() => {
        if (textareaRef.current) {
          textareaRef.current.setSelectionRange(
            newCursorPosition,
            newCursorPosition
          );
        }
      });
    }
  };

  const handleTextareaScroll = () => {
    if (textareaRef.current && lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  return (
    <div className="flex overflow-auto h-[100%] w-[100%] bg-slate-700 overflow-y-auto py-2">
      <div
        ref={lineNumbersRef}
        data-testid="lineNumbers"
        className="w-10 flex flex-col justify-start items-center overflow-hidden top-0 pb-[15px]"
      >
        {lines.map((line) => (
          <span key={line} className="text-gray-500">
            {line}
          </span>
        ))}
      </div>
      <textarea
        name="editor"
        ref={textareaRef}
        value={textareaValue}
        className="resize-none w-[100%] pr-10 outline-none overflow-x-auto whitespace-pre text-white bg-slate-700 mb-1"
        onChange={linesHandler}
        onKeyDown={handleTabs}
        onScroll={handleTextareaScroll}
        data-testid="textarea"
      />
    </div>
  );
};

export default Editor;
