import playImage from '../../../public/play.svg';
import Image from 'next/image';
import broomImage from '../../../public/broom.svg';
import { useDispatch } from 'react-redux';
import { fetchData } from '@/lib/store/slices';
import { AppDispatch } from '@/lib/store/store';

const JSONViewerButtons = () => {
  const dispatch = useDispatch<AppDispatch>();

  async function onClickFetch() {
    console.log('before dispatch');
    dispatch(fetchData());
  }

  return (
    <div className="flex flex-col gap-3 justify-start bg-slate-700 py-2 px-5">
      <button
        className="bg-green-500 hover:bg-green-400 rounded h-10 w-10 p-1 duration-150"
        onClick={onClickFetch}
      >
        <Image src={playImage} alt="Start" />
      </button>
      <button className="bg-slate-700 hover:bg-slate-600 rounded h-10 w-10 p-1 duration-150">
        <Image src={broomImage} alt="Prettify" />
      </button>
    </div>
  );
};

export default JSONViewerButtons;
