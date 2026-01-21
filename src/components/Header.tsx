export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 text-white z-50 flex items-center justify-between px-6 shadow-md font-serif" style={{ backgroundColor: 'var(--berkeley-blue)' }}>
      {/* Logo / Title */}
      <div className="flex items-center min-w-0">
        <a href="/" className="text-white text-lg hover:opacity-80">
          The Philomath
        </a>
      </div>
    </header>
  );
}
