import Home from "./components/Home.jsx";
import Gallery from "./components/Gallery.jsx";
import Team from "./components/Team.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { SplitText } from "gsap/all";
import gsap from "gsap/gsap-core.js";

gsap.registerPlugin(SplitText);

function App() {
  
    return(
        <>
            <HashRouter>
                <ScrollToTop />
                <div className="flex flex-col">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </HashRouter>
        </>
    );
}

export default App;
