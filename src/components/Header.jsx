import logo from "../assets/logo.svg";

function Header() {
  return (
    <header className="bg-[#191919] border-b border-gray-700 shrink-0 flex items-center px-4 py-2">
      <img src={logo} alt="Logo" className="h-8 w-auto" />
      <span className="title">POKER-GYM</span>
    </header>
  );
}

export default Header;
