

function About(){

    return(
        <section className="py-10 px-24 flex flex-row items-center space-x-10 bg-(--Egg) h-screen">
            <img src="/src/assets/photos/IMG_5112.jpg" alt="About BlendArt Barber" className="w-1/2 h-auto"/>
            <div className="space-y-5 text-center">
                <h2 className="text-center text-4xl font-bold mb-3">MODERN BARBERING WITH TRADITIONAL SKILL</h2>
                <p className="mb-3 text-lg">Once a private, by appointment only; hidden gem located in Mokena, IL.  We have now opened the doors to the public in Frankfort, IL for walk-ins!  blendART is more than just barbering; we pride ourselves as artists of our craft.</p>
                <p className="mb-3 text-lg">Specialist in everything hair related from current trends to classic cuts. We are honed in the ability to cut all textures of hair with precision and detail.</p>
                <p className="mb-3 text-lg">Excellent customer service is our priority and superior cut quality is our goal. Let your head be our canvas and see the blendART way.</p>
            </div>
        </section>
    );
}

export default About;