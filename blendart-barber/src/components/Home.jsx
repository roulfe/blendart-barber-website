import { Link } from "react-router-dom";


function Home(){

    return(
        <div>
            <section className="relative h-max w-full overflow-hidden">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-screen object-cover blur-xl scale-110" alt="Video walkthrough of BlendArt Barber Studio">
                    <source src="/src/assets/intro_reel.mp4" type="video/mp4"/>
                </video>
                <video autoPlay loop muted playsInline className="relative mx-auto h-screen object-contain" alt="Video walkthrough of BlendArt Barber Studio">
                    <source src="/src/assets/intro_reel.mp4" type="video/mp4"/>
                </video>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 justify-between items-center px-24 py-10 gap-4 h-screen bg-(--Egg)">
                <img src="/src/assets/photos/Storefront.avif" alt="blendART Barber Studio" className="rounded-2xl"/>
                <div className="space-y-5 text-center">
                    <h1 className="text-4xl font-bold">blendART Barber Studio</h1>
                    <p className="text-lg text-balance">
                        At BlendArt, barbering is treated as a craft — not a service. From classic cuts to modern styles, every detail is handled with intention, precision, and care. Whether you're after a clean fade, a sharp lineup, or a fresh new look, you're in good hands.
                    </p>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 justify-between items-center px-24 py-10 gap-4 h-screen">
                <div className="space-y-5 text-center">
                    <h2 className="text-4xl font-bold">Find us in Frankfort, IL</h2>
                    <p className="text-lg text-balance">Located at 20867 S. LaGrange Rd., we're here to keep you looking sharp all week long. Stop by during our shop hours or book ahead to secure your spot.</p>
                    <p className="text-lg">
                        Hours<br/>
                        Tuesday-Friday: 10am - 7pm<br/>
                        Saturday: 10am - 5pm<br/>
                        Sunday & Monday: Closed
                    </p>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.7170188995424!2d-87.85043042393413!3d41.51040677128445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e14cdd87942dd%3A0xe9eca4f9eb487b82!2sBlendart%20Barber%20Studio!5e0!3m2!1sen!2sus!4v1775778509635!5m2!1sen!2sus" className="w-full h-112.5 border-0 rounded-2xl"></iframe>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 justify-between items-center px-24 py-10 gap-4 h-screen bg-(--Egg)">
                <img src="/src/assets/photos/interior.jpg" alt="Services" className="rounded-2xl"/>
                <div className="space-y-5 text-center">
                    <h2 className="text-4xl font-bold">Quality cuts for every style and every age</h2>
                    <p className="text-lg text-balance">
                        Choose from haircuts, beard trims, hot towel shaves, and more — all crafted with precision and care.
                    </p>
                    <Link to="/services">
                        <button className="bg-red-700 text-white p-2.5 rounded-xl cursor-pointer hover:bg-red-800 duration-300">
                            View Services
                        </button>
                    </Link>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center text-center px-5 py-10 gap-4 h-screen">
                <h2 className="text-4xl font-bold">Craftsmanship in every chair.</h2>
                <p className="text-lg">
                    Our barbers combine skill, experience, and attention to detail to deliver sharp, tailored results.
                </p>
                <Link to="/team">
                    <button className="bg-red-700 text-white p-2.5 rounded-xl cursor-pointer hover:bg-red-800 duration-300">
                        Meet the Team
                    </button>
                </Link>
            </section>
        </div>
    );
}

export default Home;