import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../ui/button';
import { useState } from 'react';
import { AppDispatch, RootState } from '@/lib/store/store';
import { setUrl } from '@/lib/store/slices';

const EndpointEditor = () => {
  const [isEditing, setEditing] = useState(false);
  const inputValue = useSelector(
    (state: RootState) => state.data.apiUrl
    )
    const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex items-center">
      {!isEditing ? (
        <div className="pl-2 mr-5 w-[15vw] text-gray-300 overflow-hidden whitespace-nowrap overflow-ellipsis max-sm:w-full">
          {inputValue}
        </div>
      ) : (
        <input
          className="pl-2 mr-5 w-[15vw] h-[40px] bg-white rounded text-black outline-none max-sm:w-full"
          value={inputValue}
          onChange={(e) => dispatch(setUrl(e.target.value))}
        />
      )}
      <Button
        variant="secondary"
        className="w-[60px] max-sm:w-[80px]"
        onClick={() => setEditing(!isEditing)}
      >
        {isEditing ? 'Save' : 'Edit'}
      </Button>
    </div>
  );
};

export default EndpointEditor;
