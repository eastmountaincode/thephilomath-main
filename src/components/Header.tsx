import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-[var(--berkeley-blue)] text-white z-50 flex items-center justify-between px-6 shadow-md font-serif">
      {/* Logo / Title */}
      <div className="flex items-center min-w-0">
        <Link
          href="/"
          className="text-white text-sm md:text-lg hover:opacity-80 truncate"
        >
          The Philomath
        </Link>
      </div>
    </header>
  );
}
