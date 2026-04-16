import { useState } from "react";

function Gallery(){

    const [showAll, setShowAll] = useState(false);

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
        "/src/assets/photos/cuts/669783947_18580619173033140_5344095572870607122_n.jpg"
    ];

    const visibleImages = showAll ? images : images.slice(0, 6);

    return(
        <section className="bg-(--Egg) min-h-[calc(100vh-96px)] px-4 py-10 md:px-8 lg:px-12">
            <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto max-w-7xl">
                {visibleImages.map((src, index) => (
                    <img key={index} src={src} alt={`Gallery image`} className="w-full h-auto object-cover rounded-lg" />
                ))}
            </div>

            {images.length > 6 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
        </section>
    );
}

export default Gallery;