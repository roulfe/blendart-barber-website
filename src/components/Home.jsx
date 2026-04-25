import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import introReel from "../assets/intro_reel.mp4";
import StoreFront from "../assets/photos/Storefront.avif";
import IMG_5112 from "../assets/photos/IMG_5112.jpg";
import Team_Home from "../assets/photos/Team_Home.jpg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Home() {
    const container = useRef(null);

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container.current,
  //       start: "top 80%",
  //     }
  //   });

  //   tl.from(".home-heading", {
  //     y: -80,
  //     opacity: 0,
  //     duration: 1.2,
  //     delay: 0.5,
  //     ease: "power2.out",
  //     clearProps: "all",
  //     yoyo: true,
  //   })
  //     .from(".map", {
  //       x: 80,
  //       opacity: 0,
  //       duration: 1.2,
  //       delay: 0.5,
  //       ease: "power2.out",
  //       clearProps: "all",
  //       yoyo: true,
  //     }, 0.5)
  //     .from("#home-para", {
  //       y: 80,
  //       opacity: 0,
  //       duration: 1.2,
  //       delay: 0.5,
  //       ease: "power2.out",
  //       clearProps: "all",
  //       yoyo: true,
  //     }, 0.3)
  //     .from("#storefront-img", {
  //       x: -80,
  //       opacity: 0,
  //       duration: 1.2,
  //       delay: 0.5,
  //       ease: "power2.out",
  //       clearProps: "all",
  //       yoyo: true,
  //     }, 0.5);
  //     }, { scope: container });

    useGSAP(() => {
      gsap.utils.toArray(".copy-section").forEach((section) => {
        const copyItems = section.querySelectorAll(".gsap-copy");
        const mediaItems = section.querySelectorAll(".gsap-media");
        const button = section.querySelector(".gsap-btn");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        if (mediaItems.length) {
          tl.from(mediaItems, {
            y: 30,
            scale: 0.96,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.15,
          });
        }

        if (copyItems.length) {
          tl.from(copyItems, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power2.out",
          }, "-=0.5");
        }

        if (button) {
          tl.from(button, {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
          }, "-=0.3");
        }
      });
    }, { scope: container });

  return (
    <div ref={container}>
      <section className="relative w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-[70vh] w-full object-cover blur-xl scale-110 md:h-screen"
        >
          <source src={introReel} type="video/mp4" />
        </video>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="relative mx-auto h-[70vh] w-full object-contain md:h-screen"
        >
          <source src={introReel} type="video/mp4" />
        </video>
      </section>

      <section className="copy-section grid grid-cols-1 items-center gap-8 bg-(--Egg) px-4 py-8 md:grid-cols-2 md:px-10 md:py-12 lg:px-16">
        <img
          src={StoreFront}
          alt="blendART Barber Studio"
          className="gsap-media w-full rounded-2xl object-cover"
          id="storefront-img"
        />

        <div className="space-y-4 text-center md:text-center">
          <h1 className="gsap-copy text-3xl font-bold md:text-4xl">
            blendART Barber Studio
          </h1>

          <p id="home-para" className="gsap-copy text-base md:text-lg">
            At blendArt, barbering is treated as a craft — not a service. From
            classic cuts to modern styles, every detail is handled with intention,
            precision, and care. Whether you're after a clean fade, a sharp
            lineup, or a fresh new look, you're in good hands.
          </p>
        </div>
      </section>

      <section className="copy-section grid grid-cols-1 items-center gap-8 px-4 py-8 md:grid-cols-2 md:px-10 md:py-12 lg:px-16">
        <div className="space-y-4 text-center md:text-center">
          <h2 className="gsap-copy text-3xl font-bold md:text-4xl">
            Find us in Frankfort, IL
          </h2>

          <p className="gsap-copy text-base md:text-lg">
            Located at 20867 S. LaGrange Rd., we're here to keep you looking sharp
            all week long. Stop by during our shop hours or book ahead to secure
            your spot.
          </p>

          <p className="gsap-copy text-base md:text-lg">
            Hours
            <br />
            Monday: Closed
            <br />
            Tuesday: 10am - 7pm
            <br />
            Wednesday: 10:30am - 5pm
            <br />
            Thursday: 10am - 7pm
            <br />
            Friday: 10am - 7pm
            <br />
            Saturday: 10am - 5pm
            <br />
            Sunday: Closed
          </p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.7170188995424!2d-87.85043042393413!3d41.51040677128445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e14cdd87942dd%3A0xe9eca4f9eb487b82!2sBlendart%20Barber%20Studio!5e0!3m2!1sen!2sus!4v1775778509635!5m2!1sen!2sus"
          className="gsap-media map h-72 w-full rounded-2xl border-0 md:h-112"
          loading="lazy"
          title="BlendArt Barber Studio map"
        ></iframe>
      </section>

      <section className="copy-section grid grid-cols-1 items-center gap-8 bg-(--Egg) px-4 py-8 md:grid-cols-2 md:px-10 md:py-12 lg:px-16">
        <img
          src={IMG_5112}
          alt="Services"
          className="gsap-media w-full rounded-2xl object-cover"
        />

        <div className="space-y-4 text-center md:text-center">
          <h2 className="gsap-copy text-3xl font-bold md:text-4xl">
            Quality cuts for every style and every age
          </h2>

          <p className="gsap-copy text-base md:text-lg">
            Choose from haircuts, beard trims, hot towel shaves, and more — all
            crafted with precision and care.
          </p>

          <Link to="/services" className="gsap-btn inline-block">
            <button className="rounded-xl bg-red-700 px-5 py-2.5 text-white transition hover:bg-red-800 cursor-pointer">
              View Services
            </button>
          </Link>
        </div>
      </section>

      <section className="copy-section bg-white px-4 py-8 md:px-8 md:py-12 lg:px-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <img
            src={Team_Home}
            alt="Team"
            className="gsap-media h-64 w-full max-w-3xl rounded-2xl object-cover shadow-lg sm:h-80 md:h-112"
          />

          <h2 className="gsap-copy text-3xl font-bold md:text-4xl">
            Craftsmanship in every chair.
          </h2>

          <p className="gsap-copy max-w-2xl text-base md:text-lg">
            Our barbers combine skill, experience, and attention to detail to
            deliver sharp, tailored results.
          </p>

          <Link to="/team" className="gsap-btn inline-block mt-2">
            <button className="rounded-xl bg-red-700 px-6 py-2.5 text-white transition hover:bg-red-800 cursor-pointer">
              Meet the Team
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;