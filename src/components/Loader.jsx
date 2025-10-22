import { useEffect } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete,
    });

    tl.fromTo(
      ".loader-logo",
      { opacity: 0, scale: 0.8, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )
      .to(".loader-logo", {
        opacity: 0,
        scale: 1.1,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 0.3,
      })
      .to(".loader-bg", {
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
      });
  }, [onComplete]);

  return (
    <div className="loader-bg fixed top-0 left-0 w-full h-full bg-[#592C1C] flex items-center justify-center z-[9999] overflow-hidden">
      <img
        src="/images/nav-logo.svg"
        alt="SPYLT Logo"
        className="loader-logo w-32 md:w-40 opacity-0"
      />
    </div>
  );
};

export default Loader;

