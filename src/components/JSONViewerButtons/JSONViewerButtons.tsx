import playImage from '@/images/play.svg';
import Image from 'next/image';
import broomImage from '@/images/broom.svg';
import { useDispatch,  useSelector } from 'react-redux';
import { fetchData } from '@/lib/store/slices';
import { AppDispatch } from '@/lib/store/store';
import { prettifyText } from '@/lib/utils';
import { RootState } from '@/lib/store/store';
import { setQuery } from '@/lib/store/slices';
import { toast } from '../ui/use-toast';

const JSONViewerButtons = () => {
  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector((state: RootState) => state.data.query);

  async function onClickFetch() {
    dispatch(fetchData());
  }

  function onClickPrettify() {
    const editedQuery = prettifyText(query);
    if (editedQuery) {
      dispatch(setQuery(editedQuery));
    } else {
      toast({
        variant: 'destructive',
        title: 'Invalid request',
        description: 'Check your request',
      });
    }
  }

  return (
    <div className="flex flex-col gap-3 justify-start bg-slate-500  py-2 px-2 h-full">
      <button
        className="bg-green-500 hover:bg-green-400 rounded h-10 w-10 p-1 duration-150"
        onClick={onClickFetch}
      >
        <Image src={playImage} alt="Start" />
      </button>
      <button
        className="bg-slate-700 hover:bg-slate-600 rounded h-10 w-10 p-1 duration-150"
        onClick={onClickPrettify}
      >
        <Image src={broomImage} alt="Prettify" />
      </button>
    </div>
  );
};

export default JSONViewerButtons;
