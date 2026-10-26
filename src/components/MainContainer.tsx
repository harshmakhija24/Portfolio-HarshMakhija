import { useEffect } from "react";
import About from "./About";
import Career from "./Career";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Decks from "./Decks";
import Landing from "./Landing";
import Media from "./Media";
import Navbar from "./Navbar";
import WhatIDo from "./WhatIDo";
import Work from "./Work";

const MainContainer = () => {
  // one observer reveals every [data-reveal] element once as it scrolls into view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="container-main">
      <Navbar />
      <Landing />
      <About />
      <WhatIDo />
      <Work />
      <Decks />
      <Media />
      <Career />
      <Certifications />
      <Contact />
    </div>
  );
};

export default MainContainer;
