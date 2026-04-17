import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 pb-24 md:pb-0 py-10 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
        <div>
          <h2 className="mb-4 font-bold">
            blendART
            <br />
            Barber Studio
          </h2>
          <p>
            <a
              href="https://maps.app.goo.gl/zPzvNoWTf6B8F1S59"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 duration-300"
            >
              20867 S. LaGrange Rd.
              <br />
              Frankfort, IL 60423
            </a>
          </p>
          <p className="mt-2">
            <a
              href="tel:7089951059"
              className="underline hover:text-red-600 duration-300"
            >
              708-995-1059
            </a>
          </p>
          <p className="mt-1 wrap-break-word">
            <a
              href="mailto:blendartbarberstudio@gmail.com"
              className="underline hover:text-red-600 duration-300"
            >
              blendartbarberstudio@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-bold">Hours</h2>
          <p>Monday: Closed</p>
          <p>Tuesday: 10am - 7pm</p>
          <p>Wednesday: 10:30am - 5pm</p>
          <p>Thursday: 10am - 7pm</p>
          <p>Friday: 10am - 7pm</p>
          <p>Saturday: 10am - 5pm</p>
          <p>Sunday: Closed</p>
          <p className="mt-2 text-sm text-gray-300">(Hours may vary per artist)</p>
        </div>

        <div>
          <h2 className="mb-4 font-bold">Quick Links</h2>
          <ul className="space-y-1">
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
        </div>

        <div>
          <h2 className="mb-4 font-bold">Connect with Us</h2>
          <div className="space-y-1">
            <p>
              <a
                href="https://www.instagram.com/blendartbarberstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 duration-300"
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                href="https://www.facebook.com/share/1EBWfXBVvF/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 duration-300"
              >
                Facebook
              </a>
            </p>
            <p>
              <a
                href="https://www.fresha.com/a/blendart-barber-studio-frankfort-20867-south-la-grange-road-kf4e35li"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 duration-300"
              >
                Fresha
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;