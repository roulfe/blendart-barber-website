function About() {
  return (
    <section className="bg-(--Egg) min-h-[calc(100vh-96px)] px-10 py-10 md:px-10 lg:px-16 md:content-center">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row">
        <img
          src="/src/assets/photos/IMG_5112.jpg"
          alt="About BlendArt Barber"
          className="w-full max-w-md h-auto rounded-2xl object-cover md:w-1/2"
        />

        <div className="space-y-5 text-center md:text-left md:w-1/2">
          <h2 className="text-3xl font-bold md:text-4xl">
            MODERN BARBERING WITH TRADITIONAL SKILL
          </h2>

          <p className="text-base md:text-lg">
            Once a private, by appointment only; hidden gem located in Mokena, IL.
            We have now opened the doors to the public in Frankfort, IL for walk-ins!
            blendART is more than just barbering; we pride ourselves as artists of our craft.
          </p>

          <p className="text-base md:text-lg">
            Specialist in everything hair related from current trends to classic cuts.
            We are honed in the ability to cut all textures of hair with precision and detail.
          </p>

          <p className="text-base md:text-lg">
            Excellent customer service is our priority and superior cut quality is our goal.
            Let your head be our canvas and see the blendART way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;