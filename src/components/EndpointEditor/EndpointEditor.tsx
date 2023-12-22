import { useLang } from '@/lib/langContext';
import { Button } from '../ui/button';
import { useState } from 'react';
import { textContent, TextContentType } from '@/lib/langText';

const EndpointEditor = () => {
  const [isEditing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(
    'https://rickandmortyapi.com/graphql'
  );
  const { lang } = useLang();
  const text = textContent[lang as keyof TextContentType].dashboard;

  return (
    <div className="flex flex-col items-start">
      {!isEditing ? (
        <div className="pl-2 my-5 w-full h-[40px] text-gray-300 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {inputValue}
        </div>
      ) : (
        <input
          className="pl-2 my-5 w-full h-[40px] bg-white rounded text-black outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
      <Button variant="secondary" onClick={() => setEditing(!isEditing)}>
        {isEditing ? text.url.save : text.url.edit}
      </Button>
    </div>
  );
};

export default EndpointEditor;
