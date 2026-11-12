import Rocket from "../components/icons/Rocket";

const Header = () => {
  const max_md_Classes = [
    "max-md:flex-col",
    "max-md:items-center",
    "max-md:gap-7",
    "max-md:pt-2",
  ].join(" ");

  return (
    <header
      className={`flex justify-between items-center px-10 py-13 ${max_md_Classes}`}
    >
      <div className="flex-1"></div>
      {/* logo */}
      <div id="logo" className="flex items-center gap-3">
        <Rocket className="w-12 h-12" />
        <h3 className="font-semibold text-2xl">Company</h3>
      </div>
      {/* nav links */}
      <ul className="flex flex-1 justify-end align-middle gap-9 font-semibold">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </header>
  );
};

export default Header;
