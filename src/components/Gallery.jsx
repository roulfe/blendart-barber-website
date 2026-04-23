import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Cut_1 from "../assets/photos/cuts/Cut_1.jpg";
import Cut_2 from "../assets/photos/cuts/Cut_2.jpg";
import Cut_3 from "../assets/photos/cuts/Cut_3.jpg";
import Cut_4 from "../assets/photos/cuts/Cut_4.jpg";
import Cut_5 from "../assets/photos/cuts/Cut_5.jpg";
import Cut_6 from "../assets/photos/cuts/Cut_6.jpg";
import Cut_7 from "../assets/photos/cuts/Cut_7.jpg";
import Cut_8 from "../assets/photos/cuts/Cut_8.jpg";
import Cut_9 from "../assets/photos/cuts/Cut_9.jpg";
import Cut_10 from "../assets/photos/cuts/Cut_10.jpg";
import Cut_11 from "../assets/photos/cuts/Cut_11.jpg";
import Cut_12 from "../assets/photos/cuts/Cut_12.jpg";

function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const container = useRef(null);
  const hasMounted = useRef(false);

  const images = [
    Cut_1,
    Cut_2,
    Cut_3,
    Cut_4,
    Cut_5,
    Cut_6,
    Cut_7,
    Cut_8,
    Cut_9,
    Cut_10,
    Cut_11,
    Cut_12,
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
    <section className="bg-(--Egg) min-h-[calc(100vh-96px)] px-4 py-10 md:px-8 lg:px-12">
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