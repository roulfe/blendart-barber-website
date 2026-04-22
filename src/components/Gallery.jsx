import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const container = useRef(null);
  const hasMounted = useRef(false);

  const images = [
    "/src/assets/photos/cuts/IMG_5125.jpg",
    "/src/assets/photos/cuts/IMG_5126.jpg",
    "/src/assets/photos/cuts/IMG_5127.jpg",
    "/src/assets/photos/cuts/IMG_5128.jpg",
    "/src/assets/photos/cuts/IMG_5129.jpg",
    "/src/assets/photos/cuts/515899036_18316169383236992_2242247299343938881_n.jpg",
    "/src/assets/photos/cuts/618798365_18554640469033140_4468739390517866771_n.jpg",
    "/src/assets/photos/cuts/625843177_18079483253018149_1797744068929935197_n.jpg",
    "/src/assets/photos/cuts/628015289_18300980419279067_2104951363492590458_n.jpg",
    "/src/assets/photos/cuts/633797206_18345396901236992_5472280003291157337_n.jpg",
    "/src/assets/photos/cuts/639545811_18345394333236992_5168243235679108805_n.jpg",
    "/src/assets/photos/cuts/669783947_18580619173033140_5344095572870607122_n.jpg",
  ];

  const visibleImages = showAll ? images : images.slice(0, 6);

  // Initial mount animation
  useGSAP(() => {
    const items = gsap.utils.toArray(".gsap-gallery-item", container.current);

    if (!items.length) return;

    requestAnimationFrame(() => {
      gsap.fromTo(
        items,
        {
          autoAlpha: 0,
          y: 30,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    });

    hasMounted.current = true;
  }, { scope: container });

  // Show More animation
  useEffect(() => {
    if (!hasMounted.current) return;
    if (!showAll) return;

    const items = gsap.utils.toArray(".gsap-gallery-item", container.current);
    const newItems = items.slice(6);

    if (!newItems.length) return;

    requestAnimationFrame(() => {
      gsap.fromTo(
        newItems,
        {
          autoAlpha: 0,
          y: 30,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    });
  }, [showAll]);

  return (
    <section className="bg-[var(--Egg)] min-h-[calc(100vh-96px)] px-4 py-10 md:px-8 lg:px-12">
      <h2 className="my-10 pb-10 text-center text-3xl font-bold md:text-4xl">
        Gallery
      </h2>

      <div
        ref={container}
        className="mx-auto max-w-7xl columns-1 gap-4 sm:columns-2 lg:columns-3"
      >
        {visibleImages.map((src, index) => (
          <div
            key={src}
            className="gsap-gallery-item mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-md"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full object-cover transition duration-300 hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>

      {images.length > 6 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer rounded-xl bg-red-700 px-5 py-2.5 font-bold text-white transition duration-300 hover:bg-red-800"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;