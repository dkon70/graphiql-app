import React, { useState, useRef } from 'react';

const Editor = () => {
  const [lines, setLines] = useState([1]);
  const [textareaValue, setTextareaValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const linesHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
    const totalLines = event.target.value.split('\n').length;
    setLines([...Array(totalLines).keys()].map((index) => index + 1));
  };

  const handleTextareaScroll = () => {
    const textarea = textareaRef.current;
    const lineNumbers = document.getElementById('lineNumbers');

    if (lineNumbers && textarea) {
      lineNumbers.scrollTop = textarea.scrollTop;
    }
  };

  return (
    <div className="flex overflow-auto h-[100%] bg-slate-700 overflow-y-auto py-2">
      <div
        id="lineNumbers"
        data-testid="lineNumbers"
        className="w-10 h-[100%] flex flex-col justify-start items-center overflow-hidden top-0"
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
        className="resize-none w-[100%] pr-10 outline-none overflow-x-auto whitespace-pre text-white bg-slate-700"
        onChange={linesHandler}
        onScroll={handleTextareaScroll}
        data-testid="textarea"
      />
    </div>
  );
};

export default Editor;
