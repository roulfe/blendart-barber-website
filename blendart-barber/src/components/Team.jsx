import TeamCard from "./TeamCard.jsx";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Team() {
  const container = useRef(null);

  useGSAP(() => {
  const copyItems = container.current.querySelectorAll(".gsap-copy");
  const teamCards = container.current.querySelectorAll(".gsap-team-card");
  

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container.current,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
    },
  });

  if (copyItems.length) {
    tl.fromTo(
      copyItems,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
      }
    );
  }

  if (teamCards.length) {
    tl.fromTo(
      teamCards,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
      },
      "-=0.5"
    );
  }
}, { scope: container });

  return (
    <section
      ref={container}
      className="min-h-[calc(100vh-96px)] px-4 py-10 bg-(--Egg)"
    >
      <h2 className="gsap-copy my-10 pb-10 text-center text-3xl font-bold md:text-4xl">
        Our Team
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        <TeamCard
          className="gsap-team-card"
          image="/src/assets/photos/Marlowe.jpg"
          name="Marlowe"
          alt="Profile picture of Marlowe"
          link="https://www.fresha.com/a/blendart-barber-studio-frankfort-20867-south-la-grange-road-kf4e35li/booking?menu=true&dppub=true&cartId=90fa0ba8-e072-449b-a31f-11d2f3eb276c"
        />
        <TeamCard
          className="gsap-team-card"
          image="/src/assets/photos/Dom2.jpg"
          name="Dominic"
          alt="Profile picture of Dominic"
          link="https://www.fresha.com/a/blendart-barber-studio-frankfort-20867-south-la-grange-road-kf4e35li/booking?menu=true&dppub=true&cartId=90fa0ba8-e072-449b-a31f-11d2f3eb276c"
        />
        <TeamCard
          className="gsap-team-card"
          image="/src/assets/photos/Mo.jpg"
          name="Mo"
          alt="Profile picture of Mo"
          link="https://www.fresha.com/a/blendart-barber-studio-frankfort-20867-south-la-grange-road-kf4e35li/booking?menu=true&dppub=true&cartId=90fa0ba8-e072-449b-a31f-11d2f3eb276c"
        />
        <TeamCard
          className="gsap-team-card"
          image="/src/assets/photos/Ashley.jpg"
          name="Ashley"
          alt="Profile picture of Ashley"
          link="https://app.thecut.co/barbers/barberashley"
        />
        <TeamCard
          className="gsap-team-card"
          image="/src/assets/photos/Christina3.png"
          name="Christina"
          alt="Profile picture of Christina"
          link="https://booksy.com/en-us/709062_lady-barber-smalls_barber-shop_19304_frankfort?do=invite&_branch_match_id=1544832368508364856&utm_medium=profile_share_from_profile&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVzzdx9zI2y8mKjEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUASvLicTwAAAA%3D"
        />
      </div>
    </section>
  );
}

export default Team;