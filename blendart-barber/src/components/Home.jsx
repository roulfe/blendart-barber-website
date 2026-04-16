import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="relative w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-[70vh] w-full object-cover blur-xl scale-110 md:h-screen"
        >
          <source src="/src/assets/intro_reel.mp4" type="video/mp4" />
        </video>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="relative mx-auto h-[70vh] w-full object-contain md:h-screen"
        >
          <source src="/src/assets/intro_reel.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="grid grid-cols-1 items-center gap-8 bg-(--Egg) px-4 py-8 md:grid-cols-2 md:px-10 md:py-12 lg:px-16">
        <img
          src="/src/assets/photos/Storefront.avif"
          alt="blendART Barber Studio"
          className="w-full rounded-2xl object-cover"
        />

        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-bold md:text-4xl">
            blendART Barber Studio
          </h1>

          <p className="text-base md:text-lg">
            At BlendArt, barbering is treated as a craft — not a service. From
            classic cuts to modern styles, every detail is handled with intention,
            precision, and care. Whether you're after a clean fade, a sharp
            lineup, or a fresh new look, you're in good hands.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 items-center gap-8 px-4 py-8 md:grid-cols-2 md:px-10 md:py-12 lg:px-16">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold md:text-4xl">
            Find us in Frankfort, IL
          </h2>

          <p className="text-base md:text-lg">
            Located at 20867 S. LaGrange Rd., we're here to keep you looking sharp
            all week long. Stop by during our shop hours or book ahead to secure
            your spot.
          </p>

          <p className="text-base md:text-lg">
            Hours
            <br />
            Tuesday-Friday: 10am - 7pm
            <br />
            Saturday: 10am - 5pm
            <br />
            Sunday & Monday: Closed
          </p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.7170188995424!2d-87.85043042393413!3d41.51040677128445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e14cdd87942dd%3A0xe9eca4f9eb487b82!2sBlendart%20Barber%20Studio!5e0!3m2!1sen!2sus!4v1775778509635!5m2!1sen!2sus"
          className="h-72 w-full rounded-2xl border-0 md:h-112"
          loading="lazy"
          title="BlendArt Barber Studio map"
        ></iframe>
      </section>

      <section className="grid grid-cols-1 items-center gap-8 bg-(--Egg) px-4 py-8 md:grid-cols-2 md:px-10 md:py-12 lg:px-16">
        <img
          src="/src/assets/photos/interior.jpg"
          alt="Services"
          className="w-full rounded-2xl object-cover"
        />

        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold md:text-4xl">
            Quality cuts for every style and every age
          </h2>

          <p className="text-base md:text-lg">
            Choose from haircuts, beard trims, hot towel shaves, and more — all
            crafted with precision and care.
          </p>

          <Link to="/services">
            <button className="rounded-xl bg-red-700 px-5 py-2.5 text-white transition hover:bg-red-800">
              View Services
            </button>
          </Link>
        </div>
      </section>

      <section className="bg-white px-4 py-8 md:px-8 md:py-12 lg:px-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <img
            src="/src/assets/photos/657233275_18577359313019883_9015469389349218125_n.jpg"
            alt="Team"
            className="h-64 w-full max-w-3xl rounded-2xl object-cover shadow-lg sm:h-80 md:h-112"
          />

          <h2 className="text-3xl font-bold md:text-4xl">
            Craftsmanship in every chair.
          </h2>

          <p className="max-w-2xl text-base md:text-lg">
            Our barbers combine skill, experience, and attention to detail to
            deliver sharp, tailored results.
          </p>

          <Link to="/team">
            <button className="mt-2 rounded-xl bg-red-700 px-6 py-2.5 text-white transition hover:bg-red-800">
              Meet the Team
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;