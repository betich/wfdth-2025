export default function Navbar() {
  return (
    <nav className="bg-primary text-white w-full flex items-center justify-between px-4 py-2 min-h-[60px]">
      {/* Hamburger icon */}
      <button className="cursor-pointer focus:outline-none">
        <img src="/assets/hamburger.svg" alt="Menu" className="h-6 w-6" />
      </button>

      {/* Logo */}
      <div>
        <img
          src="/assets/logo/wfd-thailand/svg/logo-coloured-white.svg"
          alt="Logo"
          className="h-8 w-8"
        />
      </div>
    </nav>
  );
}
