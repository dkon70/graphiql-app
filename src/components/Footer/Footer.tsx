import Image from 'next/image';
import Link from 'next/link';
import githubIcon from '@/images/github-mark-white.svg';
import rsLogo from '@/images/rs.jpg';

const Footer = () => {
  const githubNames = ['dkon70', 'NikitaStarmoussov', 'natanchik'];

  return (
    <footer
      className="bg-slate-800 w-full p-5 flex max-md:flex-col max-md:gap-5 justify-between text-white items-center  "
      data-testid="footer"
    >
      <section
        className="flex gap-2 max-[360px]:flex-col max-[360px]:items-center"
        data-testid="section"
      >
        <Image className="w-5 h-5" src={githubIcon} alt="github" />
        <ul className="flex gap-5 w-0 max-lg:w-full">
          {githubNames.map((name) => (
            <li className="flex gap-2" key={name}>
              <Link
                href={'https://github.com/' + name}
                className="flex items-center"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section data-testid="section">
        <p>© 2023</p>
      </section>
      <section data-testid="section">
        <Link href="https://rs.school/react/">
          <Image
            src={rsLogo}
            alt="rs-logo"
            className="w-max h-10 rounded-sm"
            priority={true}
          />
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
