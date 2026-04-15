import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white px-4 py-3 md:px-5 md:py-6">
      <div className="flex items-center justify-between md:hidden">
        <Link to="/">
          <img
            src="/src/assets/Blendart_logo.png"
            alt="BlendArt Barber Logo"
            className="w-28 h-auto cursor-pointer"
          />
        </Link>

        <Link to="/team">
          <button className="bg-red-700 text-white px-3 py-2 text-sm rounded-xl cursor-pointer hover:bg-red-800 duration-300">
            Book Now
          </button>
        </Link>
      </div>

      <div className="relative hidden md:flex items-center">
        <ul className="flex space-x-4">
          <li className="hover:text-red-600 duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-600 duration-300">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-red-600 duration-300">
            <Link to="/team">Team</Link>
          </li>
          <li className="hover:text-red-600 duration-300">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="hover:text-red-600 duration-300">
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/">
            <img
              src="/src/assets/Blendart_logo.png"
              alt="BlendArt Barber Logo"
              className="w-48 lg:w-64 h-auto cursor-pointer"
            />
          </Link>
        </div>

        <div className="ml-auto">
          <Link to="/team">
            <button className="bg-red-700 text-white px-4 py-2.5 rounded-xl cursor-pointer hover:bg-red-800 duration-300">
              Book an Appointment
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;