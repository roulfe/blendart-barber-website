import { Link } from "react-router-dom";

function Footer(){

    return(
        <footer className="py-10 px-5 flex flex-row items-start justify-around space-x-20 bg-gray-900 text-white">
            <div className="text-center">
                <h2 className="mb-4 font-bold">blendART<br/>Barber Studio</h2>
                <p><a href="https://maps.app.goo.gl/zPzvNoWTf6B8F1S59" target="_blank" rel="noopener noreferrer">20867 S. LaGrange Rd.<br/>Frankfort, IL 60423</a></p>
                <p><a href="tel:7089951059" className="underline hover:text-red-600 duration-300">708-995-1059</a></p>
                <p><a href="mailto:blendartbarberstudio@gmail.com" className="underline hover:text-red-600 duration-300">blendartbarberstudio@gmail.com</a></p>
            </div>
            <div className="text-center">
                <h2 className="mb-4 font-bold">Hours</h2>
                <p>Monday: Closed</p>
                <p>Tuesday: 10am - 7pm</p>
                <p>Wednesday: 10:30am - 5pm</p>
                <p>Thursday: 10am - 7pm</p>
                <p>Friday: 10am - 7pm</p>
                <p>Saturday: 10am - 5pm</p>
                <p>Sunday: Closed</p>
                <p>&#40;Hours may vary per artist&#41;</p>
            </div>
            <div className="text-center">
                <h2 className="mb-4 font-bold">Quick Links</h2>
                <ul>
                    <li className="hover:text-red-600 duration-300"><Link to="/">Home</Link></li>
                    <li className="hover:text-red-600 duration-300"><Link to="/services">Services</Link></li>
                    <li className="hover:text-red-600 duration-300"><Link to="/team">Team</Link></li>
                    <li className="hover:text-red-600 duration-300"><Link to="/gallery">Gallery</Link></li>
                    <li className="hover:text-red-600 duration-300"><Link to="/about">About</Link></li>
                    
                </ul>
            </div>
            <div className="text-center">
                <h2 className="mb-4 font-bold">Connect with Us</h2>
                <p><a href="https://www.instagram.com/blendartbarberstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 duration-300">Instagram</a></p>
                <p><a href="https://www.facebook.com/share/1EBWfXBVvF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 duration-300">Facebook</a></p>
                <p><a href="https://www.fresha.com/a/blendart-barber-studio-frankfort-20867-south-la-grange-road-kf4e35li" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 duration-300">Fresha</a></p>
            </div>
        </footer>
    );
}

export default Footer;