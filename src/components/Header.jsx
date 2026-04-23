import { useState } from "react";
import { Link } from "react-router-dom";
import Blendart_Logo from "../assets/Blendart_Logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
  ];

  function handleMenuToggle() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="px-4 py-3 md:px-5 md:py-6">
          {/* Mobile header */}
          <div className="flex items-center justify-between md:hidden">
            <Link to="/" onClick={closeMenu}>
              <img
                src={Blendart_Logo}
                alt="BlendArt Barber Logo"
                className="w-24 h-auto cursor-pointer"
              />
            </Link>

            <button
              onClick={handleMenuToggle}
              className="flex flex-col items-center justify-center gap-1.5 p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={`block h-0.5 w-6 bg-black transition duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-black transition duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-black transition duration-300 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Desktop header */}
          <div className="relative hidden md:flex items-center">
            <ul className="flex space-x-4">
              {navLinks.map((link) => (
                <li key={link.path} className="duration-300 hover:text-red-600">
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>

            <div className="absolute left-1/2 -translate-x-1/2">
              <Link to="/">
                <img
                  src={Blendart_Logo}
                  alt="BlendArt Barber Logo"
                  className="h-auto w-48 cursor-pointer lg:w-64"
                />
              </Link>
            </div>

            <div className="ml-auto">
              <Link to="/team">
                <button className="cursor-pointer rounded-xl bg-red-700 px-4 py-2.5 text-white duration-300 hover:bg-red-800">
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
            <ul className="flex flex-col items-center gap-4 text-center">
              {navLinks.map((link) => (
                <li key={link.path} className="duration-300 hover:text-red-600">
                  <Link to={link.path} onClick={closeMenu}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Mobile floating Book Now bar */}
      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 md:hidden">
        <Link to="/team">
          <button className="w-full rounded-2xl bg-red-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-red-800">
            Book an Appointment
          </button>
        </Link>
      </div>
    </>
  );
}

export default Header;