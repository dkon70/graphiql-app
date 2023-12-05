import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '../../../public/github-mark-white.svg';
import rsLogo from '../../../public/rs.jpg';

const Footer = () => {
  return (
    <footer
      className="bg-slate-800 w-full p-5 flex max-md:flex-col max-md:gap-5 justify-between text-white items-center static"
      data-testid="footer"
    >
      <section className="flex gap-2" data-testid="section">
        <Image className="w-5 h-5" src={githubIcon} alt="github" />
        <ul className="flex gap-5 w-0 max-md:w-full">
          <li className="flex gap-2">
            <Link
              href="https://github.com/dkon70"
              className="flex items-center"
            >
              dkon70
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/NikitaStarmoussov"
              className="flex items-center"
            >
              NikitaStarmoussov
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/natanchik"
              className="flex items-center"
            >
              natanchik
            </Link>
          </li>
        </ul>
      </section>
      <section data-testid="section">
        <p>© 2023</p>
      </section>
      <section data-testid="section">
        <Link href="https://rs.school/">
          <Image src={rsLogo} alt="rs-logo" className="w-10 h-10 rounded-sm" />
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
