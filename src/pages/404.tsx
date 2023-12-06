import { Button } from "@/components/ui/button";
import Link from "next/link";
const NotFound = () => {

  return (
  <main className="w-full h-screen flex flex-col justify-center items-center bg-slate-700 text-white">
    <h1 className="text-7xl">404</h1>
    <h3 className="text-3xl">page not found</h3>
    <Link href='/'><Button variant='secondary' className="mt-5">Go Home</Button></Link>
  </main>
  )
}

export default NotFound;