import { useLang } from '@/lib/langContext';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../ui/button';
import { useState } from 'react';
import { textContent, TextContentType } from '@/lib/langText';
import { AppDispatch, RootState } from '@/lib/store/store';
import { setUrl } from '@/lib/store/slices';

const EndpointEditor = () => {
  const [isEditing, setEditing] = useState(false);
  const inputValue = useSelector((state: RootState) => state.data.apiUrl);
  const dispatch = useDispatch<AppDispatch>();
  const { lang } = useLang();
  const text = textContent[lang as keyof TextContentType].dashboard;

  return (
    <div className="flex flex-col items-start justify-between w-full">
      {!isEditing ? (
        <div className="pl-2 my-5  h-[40px] text-gray-300 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {inputValue}
        </div>
      ) : (
        <input
          className="pl-2 my-5 w-full min-w-[400px] h-[40px] bg-white rounded text-black outline-none"
          value={inputValue}
          onChange={(e) => dispatch(setUrl(e.target.value))}
        />
      )}
      <Button variant="secondary" onClick={() => setEditing(!isEditing)}>
        {isEditing ? text.url.save : text.url.edit}
      </Button>
    </div>
  );
};

export default EndpointEditor;
