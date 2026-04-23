import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import About_IMG from "../assets/photos/About_IMG.jpg";

function About() {
  const container = useRef(null);

  useGSAP(() => {
    const mediaItems = container.current.querySelectorAll(".gsap-media");
    const copyItems = container.current.querySelectorAll(".gsap-copy");

    const tl = gsap.timeline();

    tl.from(mediaItems, {
      y: 30,
      scale: 0.96,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.15,
    }).from(
      copyItems,
      {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.15,
      },
      "-=0.5"
    );
  });

  return (
    <section
      ref={container}
      className="bg-(--Egg) min-h-[calc(100vh-96px)] px-10 py-10 text-center md:px-10 lg:px-16"
    >
      <h2 className="gsap-copy my-10 pb-10 text-center text-3xl font-bold md:text-4xl">
        About Us
      </h2>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row">
        <img
          src={About_IMG}
          alt="About BlendArt Barber"
          className="gsap-media h-auto w-full max-w-md rounded-2xl object-cover md:w-1/2"
        />

        <div className="space-y-5 text-center md:w-1/2 md:text-left">
          <h2 className="gsap-copy text-3xl font-bold md:text-4xl">
            MODERN BARBERING WITH TRADITIONAL SKILL
          </h2>

          <p className="gsap-copy text-base md:text-lg">
            Once a private, by appointment only; hidden gem located in Mokena, IL.
            We have now opened the doors to the public in Frankfort, IL for walk-ins!
            blendART is more than just barbering; we pride ourselves as artists of our craft.
          </p>

          <p className="gsap-copy text-base md:text-lg">
            Specialist in everything hair related from current trends to classic cuts.
            We are honed in the ability to cut all textures of hair with precision and detail.
          </p>

          <p className="gsap-copy text-base md:text-lg">
            Excellent customer service is our priority and superior cut quality is our goal.
            Let your head be our canvas and see the blendART way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;