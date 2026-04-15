import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="sticky top-0 z-50 flex items-center px-5 py-6 bg-white">
      <ul className="flex space-x-4">
        <li className="hover:text-red-600 duration-300"><Link to="/">Home</Link></li>
        <li className="hover:text-red-600 duration-300"><Link to="/services">Services</Link></li>
        <li className="hover:text-red-600 duration-300"><Link to="/team">Team</Link></li>
        <li className="hover:text-red-600 duration-300"><Link to="/gallery">Gallery</Link></li>
        <li className="hover:text-red-600 duration-300"><Link to="/about">About</Link></li>
      </ul>

      <div className="absolute left-1/2 -translate-x-1/2">
        <img
          src="/src/assets/Blendart_logo.png"
          alt="BlendArt Barber Logo"
          className="w-64 h-auto cursor-pointer"
          onClick={() => window.location.href = '/'}
        />
      </div>

      <div className="ml-auto">
        <Link to="/team">
          <button className="bg-red-700 text-white p-2.5 rounded-xl cursor-pointer hover:bg-red-800 duration-300">
            Book an Appointment
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;