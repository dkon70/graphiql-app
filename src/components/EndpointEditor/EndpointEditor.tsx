import { Button } from '../ui/button';
import { useState } from 'react';

const EndpointEditor = () => {
  const [isEditing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(
    'https://rickandmortyapi.com/graphql'
  );
  return (
    <div className="flex items-center">
      {!isEditing ? (
        <div className="pl-2 mr-5 w-[15vw] text-gray-300 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {inputValue}
        </div>
      ) : (
        <input
          className="pl-2 mr-5 w-[15vw] h-[40px] bg-white rounded text-black outline-none"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
      <Button
        variant="secondary"
        className="w-[60px]"
        onClick={() => setEditing(!isEditing)}
      >
        {isEditing ? 'Save' : 'Edit'}
      </Button>
    </div>
  );
};

export default EndpointEditor;
