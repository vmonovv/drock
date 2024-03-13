import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const gsapFade = () => {
    const fade = () => {
      const fade = gsap.utils.toArray(".Fade");
      fade.forEach((fade) => {
        //анимация главного текста
        gsap.from(fade, {
          scrollTrigger: {
            trigger: fade,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play pause",
            markers:true,
          },
          duration: 1.5,
          opacity: 0,
          y: 20 + "%",
        });
      });
    
    };
    return {
      fade,
    };
  };
  

