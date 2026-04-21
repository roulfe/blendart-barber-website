import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Services() {
  const container = useRef(null);

  useGSAP(() => {
    const serviceItems = container.current.querySelectorAll(".gsap-service");
    const title = container.current.querySelectorAll(".gsap-title");

    const tl = gsap.timeline();

    tl.from(
      title,
      {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
      },
      "-=0.5"
    )
    .from(serviceItems, {
      y: 30,
      scale: 0.96,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.15,
    });
  });

  return (
    <section
      ref={container}
      className="bg-(--Egg) min-h-[calc(100vh-96px)] px-4 py-10 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="gsap-title my-10 text-center text-3xl font-bold md:text-4xl">
          Services
        </h2>

        <div className="gsap-service overflow-hidden rounded-2xl bg-white shadow-md">
          <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-6 p-6 text-base font-semibold sm:text-lg md:text-2xl">
            <p className="border-b pb-2">Men&apos;s Cut:</p>
            <p className="border-b pb-2 text-right">$35</p>

            <p className="border-b pb-2">High School Teen:</p>
            <p className="border-b pb-2 text-right">$30</p>

            <p className="border-b pb-2">Kids 12 &amp; under / Senior Citizen:</p>
            <p className="border-b pb-2 text-right">$25</p>

            <p className="border-b pb-2">Haircut + Beard / Goatee Trim:</p>
            <p className="border-b pb-2 text-right">$45</p>

            <p className="border-b pb-2">Haircut + Hot Towel Shave:</p>
            <p className="border-b pb-2 text-right">$55</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;