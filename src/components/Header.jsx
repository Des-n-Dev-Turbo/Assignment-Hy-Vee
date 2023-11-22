import Image from 'next/image';
import Link from 'next/link';
import ModeToggle from './ui/DarkMode';

const Header = () => {
  return (
    <header className="px-8 py-6 flex flex-col gap-4 md:flex-row items-center justify-between bg-primary">
      <Link href="/">
        <div className="flex flex-row justify-between items-center gap-6">
          <Image
            src="/my-pets.png"
            alt="My Pets Logo"
            width={200}
            height={200}
            className="rounded-full border-2  border-black dark:invert w-24 h-24"
          />
          <h1 className="scroll-m-20 text-black dark:text-white text-4xl font-extrabold tracking-tight lg:text-5xl">
            My Pets
          </h1>
        </div>
      </Link>
      <ModeToggle />
    </header>
  );
};

export default Header;
