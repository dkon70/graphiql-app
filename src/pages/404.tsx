import { Button } from '@/components/ui/button';
import { useLang } from '@/lib/langContext';
import { TextContentType, textContent } from '@/lib/langText';
import Link from 'next/link';

const NotFound = () => {
  const { lang } = useLang();
  const text = textContent[lang as keyof TextContentType].notFound;

  return (
    <main className="w-full h-[calc(100vh-160px)] flex flex-col justify-center items-center bg-slate-700 text-white">
      <h1 className="text-7xl">404</h1>
      <h3 className="text-3xl">{text.title}</h3>
      <Link href="/">
        <Button variant="secondary" className="mt-5">
          {text.homeButton}
        </Button>
      </Link>
    </main>
  );
};

export default NotFound;
