import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import Image from 'next/image';
import image from 'src/images/rick-and-morty.png';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import CardSection from '../ui/CardSection';

export default function Hero() {
  //TODO remove this line and add correct user
  const user = false;
  return (
    <div className="container">
      <div className="flex flex-col   items-center justify-center  text-center">
        <div className="flex flex-col   items-center justify-center md:flex-row ">
          <Image
            src={image}
            alt="Rick and Morty"
            width={280}
            className="my-auto"
          />

          <div className="lg:w-7/12">
            <h1 className="mb-6 text-3xl font-medium ">
              Welcome to <span className="text-green-500">Rick and Morty</span>{' '}
              GraphQl
            </h1>
            <p className="px-2">
              Welcome to our GraphQL-powered website! This is the main page
              where you can explore the amazing world of the Rick and Morty API
              using GraphQL. Discover information about your favorite
              characters, episodes, and more. Get ready for an exciting journey
              through the multiverse!
            </p>
          </div>
        </div>

        {user ? (
          <Link className="my-10" href={'/main'}>
            Dashboard
          </Link>
        ) : (
          <div className="flex space-x-4 my-6">
            <Link
              href={'/login'}
              className={cn(buttonVariants(), 'py-4 px-6 text-sm')}
            >
              Login
            </Link>
            <Link href={'/register'} className={buttonVariants()}>
              Register
            </Link>
          </div>
        )}
        <Separator className="my-4" />
        <div className="flex flex-col  md:flex-row items-center justify-center  text-center">
          <CardSection />
        </div>
      </div>
    </div>
  );
}
