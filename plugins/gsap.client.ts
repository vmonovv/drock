import  gsap  from "gsap";
import  ScrollTrigger  from "gsap/ScrollTrigger";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(gsap);
    gsap.registerPlugin(ScrollTrigger);

  });