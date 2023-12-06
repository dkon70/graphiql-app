import { Separator } from "@/components/ui/separator"
import Link from 'next/link';
import Image from 'next/image'
import image from "src/images/rick-and-morty.png"

export default function Hero() {
  //TODO remove this line and add correct user
  const user = false;
  return (
    <div className="flex flex-col items-center space-x-4 lg:space-x-6">
      <div className="flex flex-col items-center">
        <div>
          <Image
            src={image}
            alt="Rick and Morty"
            sizes="(max-width: 210px) 100vw, (max-width: 420px) 50vw, 33vw"
            fill
            // width={420}
            // height={280}
            // fill
            // layout=""
            // objectFit="cover"
            // className="sm:hidden md:hidden lg:block"
          />
          {/* <Image
            src={image}
            alt="Rick and Morty"
            width={315}
            height={210}
            className="sm:hidden md:block lg:hidden"
          /> */}
          {/* <Image
            src={image}
            alt="Rick and Morty"
            width={210}
            height={140}
            className=" sm:block md:hidden lg:hidden"
          /> */}
        </div>
        <div className="text-center">

      <h1 className="lg:text-5xl sm:text-3xl">Welcome to <span className="text-green-500">Rick and Morty</span> GraphQl</h1>
      <p className="lg:text-3xl sm:text-xl">
        Welcome to our GraphQL-powered website! This is the main page where you can explore the amazing world of the Rick and Morty API using GraphQL. Discover information about your favorite characters, episodes, and more. Get ready for an exciting journey through the multiverse!
        </p>
        </div>
      </div>
      <Separator className='my-4' />
      {user ? (
        <Link href={'/main'}>Dashboard</Link>
      ) : (
        <div className="flex space-x-4">
          <Link href={'/login'}>Login</Link>
          <Link href={'/register'}>Register</Link>
        </div>
      )}
    </div>
  );
}
