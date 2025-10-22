import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSectiom from "./sections/MessageSectiom";
import FlavorSection from "./sections/FlavorSection";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import Loader from "./components/Loader";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
      
        const existing = ScrollSmoother.get();
        if (existing) existing.kill();

        ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.5,
          effects: true,
        });

        ScrollTrigger.refresh();
      }, 300);
    }
  }, [loading]);

  return (
    <main className="relative">
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <NavBar />
            <HeroSection />
            <MessageSectiom />
            <FlavorSection />
            <NutritionSection />
            <BenefitSection />
            <TestimonialSection />
            <FooterSection />
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
