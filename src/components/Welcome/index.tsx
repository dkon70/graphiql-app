import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import image from 'src/images/rick-and-morty.png';
import AboutSection from '../ui/AboutSection';
import WelcomeButtons from '../ui/welcomeButtons';

export default function Welcome() {
  return (
    <div className=" my-4 ">
      <div className="flex flex-col   items-center justify-center  text-center ">
        <div className="flex flex-col   items-center justify-center md:flex-row max-w-7xl">
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
        <WelcomeButtons />
        <Separator className="my-4 max-w-7xl" />
        <div className="flex flex-col  md:flex-row items-center justify-center  text-center">
          <AboutSection />
        </div>
      </div>
    </div>
  );
}
