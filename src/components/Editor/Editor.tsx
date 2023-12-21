import React, { useState, useRef } from 'react';

const Editor = () => {
  const [lines, setLines] = useState([1]);
  const [textareaValue, setTextareaValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineNumbersRef = useRef<HTMLDivElement | null>(null);

  const linesHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
    const totalLines = event.target.value.split('\n').length;
    setLines([...Array(totalLines).keys()].map((index) => index + 1));
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