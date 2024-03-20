<script setup>
import slide1 from "assets/img/slides/01.png";
import slide2 from "assets/img/slides/02.png";
import slide3 from "assets/img/slides/03.png";
import slide4 from "assets/img/slides/04.png";
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  const heightPage = window.innerHeight;
  let FadeBottle_1Y = heightPage;
  if (window.innerWidth < 640) {
    FadeBottle_1Y = heightPage + 140;
  }
  //# Анимация первой бутылки
  const FadeBottle_1 = ref(null);
  const FadeBottleS_1 = ref(null);
  FadeBottle_1.value = gsap.to(".FadeBottle_1", {
    scrollTrigger: {
      trigger: ".FadeBottleWrap_1",
      start: "2% top",
      end: "90% top",
      toggleActions: "play pause",
      scrub: 1,
    },
    scale: 1.2,
    y: FadeBottle_1Y + "px",
    onUpdate: function () {
      // Проверка, достигла ли анимация 90% выполнения
      if (this.progress() > 0.9) {
        // Запуск анимации тени первой бутылки, если она ещё не была запущена
        if (FadeBottleS_1.value) {
          FadeBottleS_1.value = gsap.to(".FadeBottleS_1", {
            opacity: 1,
            scale: 1,
            duration: 1, // Продолжительность анимации
          });
        }
      }
    },
  });

  //# Анимация тени первой бутылки

  FadeBottleS_1.value = gsap.to(".FadeBottleS_1", {
    scrollTrigger: {
      trigger: ".FadeBottleWrap_1",
      start: "2% top",
      end: "4% top",
      toggleActions: "play pause",
      scrub: 1,
      // markers: true,
    },
    y: FadeBottle_1Y + 70 + "px",
    opacity: 0,
    scale: 0,
  });

  //# Анимация второй бутылки
  const FadeBottle_2 = ref(null);
  FadeBottle_2.value = gsap.to(".FadeBottle_2", {
    scrollTrigger: {
      trigger: ".FadeBottleWrap_2",
      start: "2% 95%",
      end: "top top",
      toggleActions: "play pause",
      scrub: 1,
    },
    scaleX: 1,
    scaleY: 1,
  });

  //# Анимация HEART TEXT

  const FadeHeartTxt = gsap.utils.toArray(".FadeHeartTxt");
  FadeHeartTxt.forEach((fade) => {
    gsap.from(fade, {
      scrollTrigger: {
        trigger: fade,
        start: "2% 95%",
        end: "top center",
        toggleActions: "play pause",
        scrub: 3,
        // markers: true,
      },
      x: 30 + "%",
      opacity: 0.2,
    });
  });

  //# Анимация текста LEFT
  const FadeTextWrapL = gsap.utils.toArray(".FadeTextL");
  FadeTextWrapL.forEach((fade) => {
    gsap.from(fade, {
      scrollTrigger: {
        trigger: fade,
        start: "2% 95%",
        end: "top center",
        toggleActions: "play pause",
        scrub: 3,
        // markers: true,
      },
      x: -30 + "%",
      opacity: 0.2,
    });
  });

  //# Анимация текста RIGTH
  const FadeTextWrapR = gsap.utils.toArray(".FadeTextR");
  FadeTextWrapR.forEach((fade) => {
    gsap.from(fade, {
      scrollTrigger: {
        trigger: fade,
        start: "2% 95%",
        end: "top center",
        toggleActions: "play pause",
        scrub: 3,
        // markers: true,
      },
      x: 30 + "%",
      opacity: 0.2,
    });
  });

  //# Анимация тени первого второго блока

  const FadeShadow_1 = gsap.utils.toArray(".FadeShadow_1");

  FadeShadow_1.forEach((fade) => {
    gsap.from(fade, {
      scrollTrigger: {
        trigger: fade,
        start: "-25% top",
        end: "90% 90%",
        toggleActions: "restart pause resume reset",
        // markers: true,
      },
      opacity: 0,
      duration: 1.2,
    });
  });

  //#--------ЧЕТВЁРТЫЙ БЛОК-------#
  //# Анимация третьей бутылки
  const FadeBottle_3 = ref(null);
  FadeBottle_3.value = gsap.from(".FadeBottle_3", {
    scrollTrigger: {
      trigger: ".FadeBottleWrap_4",
      start: "2% 95%",
      end: "center center",
      toggleActions: "pause resume",
      scrub: 1,
      // markers: true,
      // onEnterBack: () => {
      //   gsap.set(".FadeBottle_3", { y: "0%", duration:1, }); // Фиксируем позицию при скролле вверх
      // },
      // onLeave: () => {
      //   gsap.set(".FadeBottle_3", { y: "100%",duration:1, }); // Сбрасываем позицию при скролле вниз
      // },
    },

    duration: 1,
    y: 100 + "%",
    onUpdate: function () {
      // Проверка, достигла ли анимация 90% выполнения
      if (this.progress() > 0.9) {
        // Запуск анимации тени первой бутылки, если она ещё не была запущена
        if (FadeBottle_3.value) {
          FadeBottle_3.value = gsap.to(".FadeShadow_3", {
            opacity: 1,
            scale: 1,
            duration: 1, // Продолжительность анимации
          });
        }
      }
    },
  });

  //# Анимация xtndh\hnjq бутылки
  const FadeBottle_4 = ref(null);
  FadeBottle_4.value = gsap.from(".FadeBottle_4", {
    scrollTrigger: {
      trigger: ".FadeBottleWrap_5",
      start: "0 center",
      end: "70% center",
      toggleActions: "restart pause resume reset",
      scrub: 2,
      // markers:true
    },
    duration: 1,
    x: -80 + "%",
    onUpdate: function () {
      // Проверка, достигла ли анимация 90% выполнения
      if (this.progress() > 0.9) {
        gsap.to(".FadeMaxT_5", {
          opacity: 1,
          scale: 1,
          duration: 1, // Продолжительность анимации
        });
      }
    },
  });

  const FadeImg = gsap.utils.toArray(".FadeImg");
  FadeImg.forEach((fade) => {
    gsap.from(fade, {
      scrollTrigger: {
        trigger: fade,
        start: "2% 95%",
        end: "top center",
        toggleActions: "play pause",
        scrub: 3,
        // markers: true,
      },
      opacity: 0,
      duration: 1,
    });
  });
});

const points = reactive([
  {
    id: "north-america",
    title: "North America",
    dotClass: "top-[30%] left-[9%] sm:top-[43%] sm:left-[18%]",
    items: ["Coming soon!"],
  },
  {
    id: "south-america",
    title: "South America",
    dotClass: "top-[55%] left-[20%] sm:top-[65%] sm:left-[28%]",
    items: ["Coming soon!"],
  },
  {
    id: "europe",
    title: "Europe",
    dotClass: "top-[28%] left-[45%] sm:top-[38%] sm:left-[52%]",
    items: [
      "Germany",
      "Switzerland",
      "Bulgaria",
      "Italy",
      "Czech Republic",
      "Romania",
      "France",
      "Slovakia",
      "Spain",
      "Austria",
      "Croatia",
      "Greece",
    ],
  },
  {
    id: "asia",
    title: "Asia",
    dotClass: "top-[34%] left-[75%] sm:top-[45%] sm:left-[78%]",
    items: [
      "China",
      "South Korea",
      "Thailand",
      "Japan",
      "UAE",
      "Vietnam",
      "Taiwan",
      "Malaysia",
      "Indonesia",
      "Singapore",
    ],
  },
  {
    id: "oceania",
    title: "Oceania",

    dotClass: "top-[65%] left-[78%] sm:top-[77%] sm:left-[85%]",
    items: ["Coming soon!"],
  },
]);

const slides = [slide1, slide2, slide3, slide4];

const slideText = reactive([
  {
    header: "GLACIER",
    description:
      "<p>200% Chardonnay | 10gr Sugar <br />Brut | 3 years aged in the bottle</p>",
  },
  {
    header: "BLANC DE BLANCS",
    description:
      "<p>100% Chardonnay | 10gr Sugar <br />Brut | 3 years aged in the bottle</p>",
  },
  {
    header: "BRUTE GOLD",
    description:
      "<p>50% Chardonnay | 50% Pinot Noir <br />10gr Sugar | Brut | 2 years aged in the bottle</p>",
  },
  {
    header: "ROSE",
    description:
      "<p>50% Pinot Noir | 45% Chardonnay <br />5% Pinot Mineur + Bouzy Redwine <br />10gr Sugar | Brut | 2 years aged in the bottle</p>",
  },
]);
const swiperText = ref(null);
const swiperImg = ref(null);
const setSwiperText = (swiper) => {
  swiperText.value = swiper;
};
const setSwiperImg = (swiper) => {
  swiperImg.value = swiper;
};

const activePointId = ref(null);

const setActivePointId = (id) => {
  activePointId.value = id;
  console.log(activePointId.value);
};

const clearActivePointId = () => {
  activePointId.value = null;
};
</script>

<template>
  <section
    class="relative w-full min-h-[100vh] sm:h-[100vh] FadeBottleWrap_1 pt-10 pb-10"
  >
    <video
      autoplay
      loop
      playsinline=""
      muted
      class="absolute left-0 bottom-0 h-full w-full object-cover"
      src="@/assets/img/01/bg.mp4"
      frameborder="0"
    ></video>
    <div class="plr h-full">
      <div class="relative">
        <ul
          class="z-[120] right-[-60px] sm:rotate-0 rotate-90 top-10 flex absolute sm:right-0 border border-[#4F4F4F] rounded-3xl px-[10px] py-[10px]"
        >
          <li class="max-w-[20px] w-[20px] mx-2 sm:rotate-0 -rotate-90">
            <a href="#"
              ><svg
                class="fill-[#818181]"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="max-w-[20px] w-[20px] mx-2 sm:rotate-0 -rotate-90">
            <a href="#">
              <svg
                class="fill-[#818181]"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="max-w-[20px] w-[20px] mx-2 sm:rotate-0 -rotate-90">
            <a href="#"
              ><svg
                class="fill-[#818181]"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="max-w-[20px] w-[20px] mx-2 sm:rotate-0 -rotate-90">
            <a href="#"
              ><svg
                class="fill-[#818181]"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div
        class="relative z-[100] sm:z-[10] flex flex-col justify-center items-center h-full text-center"
      >
        <div class="mb-10"><img src="@/assets/img/logo.svg" alt="" /></div>
        <div class="flex flex-col items-center">
          <img
            class="max-w-[108px] relative z-[10] FadeBottle_1"
            src="@/assets/img/b_1.webp"
            alt=""
          />
          <img
            class="max-w-[320px] w-full FadeBottleS_1 relative -top-4"
            src="@/assets/img/01/bg_bottle.svg"
            alt=""
          />
        </div>

        <h1
          class="text-[#D1AF53] text-[30px] tracking-[5px] sm:tracking-[40px] mt-[25px] FadeMaxT_5"
        >
          TASTE THE LUXURY
        </h1>
      </div>
    </div>
  </section>

  <section
    class="bg-[#171717] relative max-w-full sm:h-[100vh] overflow-hidden"
  >
    <div class="plr h-full overflow-hidden">
      <svg
        class="absolute bottom-[-40%] right-5 sm:-right-20 object-cover w-[1400px] sm:w-[1400px] z-0 FadeShadow_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1434 1130"
      >
        <g>
          <defs>
            <radialGradient
              id="idss453152957_1g1819118771"
              cy="0.575"
              cx="0.5"
              r="0.732"
              gradientTransform="translate(0.5, 0.575) scale(1 0.6830601092896175) translate(-0.5, -0.575)"
            >
              <stop
                offset="0"
                stop-color="rgb(66, 66, 66)"
                stop-opacity="1"
              ></stop>
              <stop
                offset="0.6036036036036035"
                stop-color="rgba(26, 26, 26, 0)"
                stop-opacity="0"
              ></stop>
            </radialGradient>
          </defs>
          <path
            d="M 716.699 0.561 C 1112.458 0.561 1433.283 253.334 1433.283 565.145 C 1433.283 876.956 1112.458 1129.729 716.699 1129.729 C 320.941 1129.729 0.115 876.956 0.115 565.145 C 0.115 253.334 320.941 0.561 716.699 0.561 Z"
            fill="url(#idss453152957_1g1819118771)"
          ></path>
        </g>
      </svg>
      <div
        class="flex flex-col sm:flex-row items-center justify-between h-full py-10 sm:py-20 relative z-10"
      >
        <div
          class="text-white max-w-[490px] self-center sub order-2 sm:order-1 mt-[450px] sm:mt-0 FadeTextL"
        >
          Champagne D.ROCK embodies the essence of a quaint, picturesque family
          enterprise nestled in the heart of France's Champagne region. Crafted
          from a harmonious blend of hand-picked Chardonnay and Pinot Noir
          grapes cultivated in local vineyards, our champagne undergoes a
          meticulous process that begins with traditional Coquart pressing.
        </div>

        <div
          class="maxt uppercase text-[#ACACAC] f-oswald leading-[100%] order-1 sm:order-2"
        >
          <div class="FadeHeartTxt">HEART</div>
          <div class="animColorTxt FadeHeartTxt">HEART</div>
          <div class="FadeHeartTxt">HEART</div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="bg-[#1A1A1A] overflow-hidden sm:min-h-auto min-h-[570px] sm:max-h-[810px] sm:h-[100vh] FadeBottleWrap_2"
  >
    <div class="plr h-full">
      <div class="flex items-center h-full relative">
        <svg
          class="absolute bottom-[-40%] -left-52 sm:left-0 object-cover w-[1400px] sm:w-[1400px] z-0 FadeShadow_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1434 1130"
        >
          <g>
            <defs>
              <radialGradient
                id="idss453152957_1g1819118771"
                cy="0.575"
                cx="0.5"
                r="0.732"
                gradientTransform="translate(0.5, 0.575) scale(1 0.6830601092896175) translate(-0.5, -0.575)"
              >
                <stop
                  offset="0"
                  stop-color="rgb(66, 66, 66)"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="0.6036036036036035"
                  stop-color="rgba(26, 26, 26, 0)"
                  stop-opacity="0"
                ></stop>
              </radialGradient>
            </defs>
            <path
              d="M 716.699 0.561 C 1112.458 0.561 1433.283 253.334 1433.283 565.145 C 1433.283 876.956 1112.458 1129.729 716.699 1129.729 C 320.941 1129.729 0.115 876.956 0.115 565.145 C 0.115 253.334 320.941 0.561 716.699 0.561 Z"
              fill="url(#idss453152957_1g1819118771)"
            ></path>
          </g>
        </svg>
        <div
          class="sm:flex-[0_0_65%] flex-[0_0_0%] sm:max-w-none max-w-[150px]"
        >
          <div class="relative">
            <span
              class="relative left-[-40%] sm:left-[-20%] uppercase inline-block maxt rotate-[270deg] text-[#121212]"
              >grapes</span
            >
            <img
              class="absolute left-[-120%] sm:left-[20%] max-w-[292px] top-[50%] translate-y-[-50%] FadeBottle_2 scale-[0.5]"
              src="@/assets/img/03/b_2.webp"
              alt=""
            />
          </div>
        </div>
        <p
          class="sub sm:flex-[0_0_40%] max-w-[400px] relative z-10 mt-10 FadeTextR"
        >
          The renowned white Chardonnay grapes, cherished for their crisp,
          delectable flavors, complement the darker Pinot Noir, which boasts a
          distinct bouquet and extraordinary texture. These dark blue grapes
          yield a brighter must, offering a delightful amalgamation of floral
          tones with subtle hints of honey and lime.
        </p>
      </div>
    </div>
  </section>

  <section
    class="relative max-w-full sm:h-[100vh] overflow-hidden FadeBottleWrap_4"
  >
    <div class="plr h-full overflow-hidden">
      <svg
        class="absolute top-[-50%] -right-[35%] object-cover w-[1400px] sm:w-[1400px] z-0 FadeShadow_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1434 1130"
      >
        <g>
          <defs>
            <radialGradient
              id="idss453152957_1g1819118771"
              cy="0.575"
              cx="0.5"
              r="0.732"
              gradientTransform="translate(0.5, 0.575) scale(1 0.6830601092896175) translate(-0.5, -0.575)"
            >
              <stop
                offset="0"
                stop-color="rgb(66, 66, 66)"
                stop-opacity="1"
              ></stop>
              <stop
                offset="0.6036036036036035"
                stop-color="rgba(26, 26, 26, 0)"
                stop-opacity="0"
              ></stop>
            </radialGradient>
          </defs>
          <path
            d="M 716.699 0.561 C 1112.458 0.561 1433.283 253.334 1433.283 565.145 C 1433.283 876.956 1112.458 1129.729 716.699 1129.729 C 320.941 1129.729 0.115 876.956 0.115 565.145 C 0.115 253.334 320.941 0.561 716.699 0.561 Z"
            fill="url(#idss453152957_1g1819118771)"
          ></path>
        </g>
      </svg>
      <div
        class="flex flex-col sm:flex-row items-center justify-between h-full py-10 sm:py-20 relative z-10"
      >
        <div class="order-2 sm:order-1">
          <div class="text-white max-w-[490px] self-center sub FadeTextL">
            Each black, elegantly frosted bottle is adorned with over 1000
            synthetic "Luk-Dymand" crystals, meticulously assembled by hand on
            smooth velveteen. These crystals, renowned for their unique sparkle
            and vibrant color play, are meticulously placed, ensuring a
            kaleidoscope of visual allure. A specially trained artisan then
            affixes the entire ensemble to the bottle, resulting in a truly
            one-of-a-kind masterpiece.
          </div>

          <Button class="mt-8 sm:mt-12 FadeTextL">Buy Now</Button>
        </div>

        <div
          class="maxt uppercase text-[#ACACAC] f-oswald leading-[100%] order-1"
        >
          <div class="relative sm:block flex justify-center">
            <span
              class="absolute top-[40%] sm:top-[50%] left-[30%] sm:right-[-30%] uppercase inline-block maxt rotate-[270deg] text-[#121212]"
              >crystals</span
            >
            <div class="flex flex-col items-center mr-40 overflow-hidden">
              <img
                class="max-w-[160px] FadeBottle_3"
                src="@/assets/img/04/01.webp"
                alt=""
              />
              <img
                class="max-w-[350px] w-full relative -top-4 FadeShadow_3 opacity-0 scale-0"
                src="@/assets/img/01/bg_bottle.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-10 sm:py-20 FadeBottleWrap_5 overflow-hidden">
    <div class="plr">
      <div class="flex flex-col justify-end items-end mb-28 sm:mb-48 relative">
        <svg
          class="absolute top-[-40%] sm:-left-[20%] object-cover w-[1400px] sm:w-[1400px] z-0 FadeShadow_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1434 1130"
        >
          <g>
            <defs>
              <radialGradient
                id="idss453152957_1g1819118771"
                cy="0.575"
                cx="0.5"
                r="0.732"
                gradientTransform="translate(0.5, 0.575) scale(1 0.6830601092896175) translate(-0.5, -0.575)"
              >
                <stop
                  offset="0"
                  stop-color="rgb(66, 66, 66)"
                  stop-opacity="1"
                ></stop>
                <stop
                  offset="0.6036036036036035"
                  stop-color="rgba(26, 26, 26, 0)"
                  stop-opacity="0"
                ></stop>
              </radialGradient>
            </defs>
            <path
              d="M 716.699 0.561 C 1112.458 0.561 1433.283 253.334 1433.283 565.145 C 1433.283 876.956 1112.458 1129.729 716.699 1129.729 C 320.941 1129.729 0.115 876.956 0.115 565.145 C 0.115 253.334 320.941 0.561 716.699 0.561 Z"
              fill="url(#idss453152957_1g1819118771)"
            ></path>
          </g>
        </svg>

        <div class="title FadeTextL">OUR VARIETY</div>

        <div class="sub mt-4 sm:w-[596px] text-end FadeTextR">
          From 75cl to 60L, our collection boasts an array of sizes to cater to
          diverse tastes and occasions. With four exquisite flavors to choose
          from, our range ensures the perfect fit for any party or palate.
        </div>
        <div>
          <Button class="mt-8 sm:mt-12 FadeTextL">Buy Now</Button>
        </div>
      </div>
      <div class="relative">
        <span
          class="left-0 uppercase -top-[80%] sm:-top-[90%] absolute inline-block maxt text-[#9C9C9C] FadeMaxT_5 opacity-0 scale-0"
          >75 to 60</span
        >
        <div class="z-10 relative">
          <img
            class="inline-block max-h-[200px] FadeBottle_4"
            src="@/assets/img/05/01.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <section
    class="relative overflow-hidden w-full max-w-full bg-[#1A1A1A] py-10 sm:py-20"
  >
    <video
      class="absolute left-[10%] sm:left-0 w-full top-0 h-full max-w-full object-cover sm:object-center object-[20%]"
      autoplay
      loop
      playsinline=""
      muted
      src="@/assets/img/06/bg.mp4"
    ></video>
    <div class="plr relative">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <div class="relative z-[10] flex justify-center">
          <img
            class="sm:max-w-[200px] sm:ml-20 inline-block mb-10 sm:mb-0 max-w-[160px] AnimationBottle"
            src="@/assets/img/06/01.webp"
            alt=""
          />
        </div>
        <div class="max-w-[500px] sm:mr-10">
          <h2 class="title FadeTextR">The Monumental 60L D. Rock Champagne</h2>
          <div class="sub mt-5 sm:mt-10 FadeTextR">
            The colossal 60L D. Rock Champagne is the largest champagne bottle
            worldwide. As we push the boundaries of elegance and grandeur, this
            World Record promises to redefine celebratory extravagance.
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="relative overflow-hidden w-full max-w-full bg-[#1A1A1A] pb-0 py-10 sm:py-20"
  >
    <div class="plr relative">
      <div class="flex sm:flex-row flex-col justify-between items-center">
        <div class="sm:order-1 order-2 max-w-[500px]">
          <h2 class="title FadeTextL">History of CHAMPAGNE</h2>
          <div class="sub mt-5 sm:mt-10 FadeTextL">
            The heritage of champagne-making spans back to the medieval era,
            tracing its origins through centuries of refinement and innovation.
            Remarkably, until the 17th century, vintners in Champagne
            predominantly crafted still wines, devoid of the effervescence that
            characterizes modern champagne.
          </div>
        </div>
        <div class="sm:order-2 order-1 relative z-[10] w-[140%] sm:w-full">
          <img class="FadeImg" src="@/assets/img/07/01.webp" alt="" />
        </div>
      </div>
    </div>
  </section>

  <section
    class="relative overflow-hidden w-full max-w-full bg-[#1A1A1A] pb-0 py-10 sm:py-20"
  >
    <div class="plr relative sm:h-[100vh]">
      <div
        class="flex sm:flex-row flex-col h-full justify-between items-center"
      >
        <div class="flex-[0_0_50%]">
          <video
            autoplay
            loop
            playsinline=""
            muted
            class="sm:absolute left-0 bottom-0 h-full w-full object-cover"
            src="@/assets/img/08/bg.mp4"
            frameborder="0"
          ></video>
        </div>

        <div class="sm:order-2 order-1 max-w-[500px] flex-[0_0_50%]">
          <div class="sub mt-5 sm:mt-10 FadeTextR">
            The quintessential brut champagne, akin to the excellence embodied
            by D.ROCK, is a masterful blend crafted from diverse grape varieties
            and soils. This meticulous composition serves as the bedrock,
            endowing each champagne with a nuanced balance and distinctive
            character. It's this art of blending that serves as the hallmark
            distinguishing various champagne producers.
          </div>
        </div>
      </div>
    </div>
  </section>

  <section
    class="relative max-w-full sm:h-[100vh] overflow-hidden bg-[#1A1A1A]"
  >
    <div class="plr h-full overflow-hidden">
      <div
        class="flex flex-col sm:flex-row items-center justify-between h-full sm:py-20 relative z-10"
      >
        <div class="sm:order-1 order-2">
          <div class="text-white max-w-[490px] self-center sub FadeTextL">
            The heritage of champagne-making spans back to the medieval era,
            tracing its origins through centuries of refinement and innovation.
            Remarkably, until the 17th century, vintners in Champagne
            predominantly crafted still wines, devoid of the effervescence that
            characterizes modern champagne.
          </div>

          <Button class="mt-5 sm:mt-12 FadeTextL">Buy Now</Button>
        </div>
        <img
          class="max-w-[900px] FadeImg sm:order-2 order-1"
          src="@/assets/img/09/09.webp"
        />
      </div>
    </div>
  </section>

  <section
    class="relative overflow-hidden w-full max-w-full bg-[#1A1A1A] py-20"
  >
    <div class="plr relative">
      <div class="">
        <div class="max-w-[500px]">
          <h2 class="title">Customizations</h2>
          <div class="sub font-[400] mt-10">
            At D. Rock Champagne, we immerse ourselves in the realm of luxury,
            attuned to fulfilling its every demand. In response to this
            commitment, we've established a specialized division within our
            enterprise devoted exclusively to the customization of our bottles
            for esteemed private clubs and luxury establishments.
          </div>
        </div>
        <div>
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperController]"
            :slides-per-view="1"
            :loop="true"
            :controller="{ control: swiperText }"
            @swiper="setSwiperImg"
          >
            <SwiperSlide v-for="slide in slides" :key="slide">
              <img class="max-h-[250px]" :src="slide" alt="#" />
            </SwiperSlide>
          </Swiper>

          <Swiper
            :modules="[
              SwiperAutoplay,
              SwiperEffectCreative,
              SwiperEffectFade,
              SwiperController,
            ]"
            :slides-per-view="1"
            :effect="'fade'"
            :loop="true"
            :controller="{ control: swiperImg }"
            @swiper="setSwiperText"
          >
            <SwiperSlide v-for="slide in slideText" :key="slide">
              <div class="bg-[#1A1A1A]" style="display: block">
                <h3>{{ slide.header }}</h3>
                <div v-html="slide.description"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>

  <section class="relative overflow-hidden w-full max-w-full bg-[#1A1A1A]">
    <div class="plr relative">
      <div
        class="flex flex-col sm:flex-row justify-between items-center sm:min-h-[800px]"
      >
        <div class="relative z-[10]">
          <img
            class="max-w-[700px] FadeImg"
            src="@/assets/img/11/11.webp"
            alt=""
          />
        </div>
        <div class="max-w-[500px] sm:ml-5">
          <div class="sub mt-10 FadeTextR">
            The quintessential brut champagne, akin to the excellence embodied
            by D.ROCK, is a masterful blend crafted from diverse grape varieties
            and soils. This meticulous composition serves as the bedrock,
            endowing each champagne with a nuanced balance and distinctive
            character. It's this art of blending that serves as the hallmark
            distinguishing various champagne producers.
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="plr bg-[#1A1A1A]">
      <div
        class="flex sm:flex-row flex-col sm:justify-center sm:items-en pt-20 items-start sm:items-end"
      >
        <div class="title uppercase sm:mr-[40px] mr-0 leading-none">
          where to find us
        </div>
        <div class="text-white sub mt-5 sm:mt-0 leading-tight">
          Founded nearly seven years ago,<br />Champagne D.Rock can be found
          across the globe.
        </div>
      </div>

      <div class="relative mapWrap">
        <img
          src="@/assets/img/12/map.svg"
          alt="Map with our locations"
          class="max-w-full sm:mt-0 mt-10"
        />

        <div v-for="point in points" :key="point">
          <div
            class="absolute flex flex-col items-center cursor-pointer"
            :class="[point.dotClass]"
          >
            <div class="sub uppercase text-center sm:text-[16px] text-[10px]">
              {{ point.title }}
            </div>
            <div
              class="pointMap title h-[15px] w-[15px] sm:h-[30px] sm:w-[30px] bg-white rounded-[100%] cursor-pointer"
              @mouseover="setActivePointId(point.id)"
              @mouseleave="clearActivePointId"
            ></div>
          </div>

          <ul
            v-if="activePointId === point.id"
            class="dot-list absolute bottom-[15px] sm:bottom-[35px] left-[0px] sub sm:text-[16px] text-[8px]"
          >
            <li class="leading-tight" v-for="item in point.items" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="plr bg-[#1A1A1A]">
    <div
      class="pt-20 pb-32 flex flex-col sm:flex-row justify-between overflow-hidden"
    >
      <div class="relative flex">
        <div>
          <ul
            class="z-[120] sm:static absolute FadeTextL left-[-60px] rotate-90 translate-y-[60px] flex top-0 border border-[#4F4F4F] rounded-3xl px-[10px] py-[10px]"
          >
            <li class="max-w-[20px] w-[20px] mx-2 -rotate-90">
              <a href="#"
                ><svg
                  class="fill-[#818181]"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="max-w-[20px] w-[20px] mx-2 -rotate-90">
              <a href="#">
                <svg
                  class="fill-[#818181]"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="max-w-[20px] w-[20px] mx-2 -rotate-90">
              <a href="#"
                ><svg
                  class="fill-[#818181]"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="max-w-[20px] w-[20px] mx-2 -rotate-90">
              <a href="#"
                ><svg
                  class="fill-[#818181]"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="flex">
          <div class="sm:ml-10 ml-14">
            <h2 class="title">Contact us</h2>

            <a href="#" class="mt-3 sm:mt-10 sub flex items-center">
              <span class="pr-4">
                <svg
                  class="fill-white max-w-[30px] w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                  color="rgb(255, 255, 255)"
                  style="fill: rgb(255, 255, 255)"
                >
                  <path
                    d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"
                  ></path>
                </svg>
              </span>
              +49 (0) 9375 92 98 0</a
            >
            <a href="#" class="mt-3 sm:mt-10 sub flex items-center">
              <span class="pr-5"
                ><svg
                  class="fill-white max-w-[30px] w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  ></path>
                </svg> </span
              >info [at] d-rock.eu</a
            >
          </div>
        </div>
      </div>

      <form
        id="form"
        class="sm:mt-0 mt-10 FadeTextR sm:flex-[0_0_30%] sm:mr-[10%]"
      >
        <div class="flex items-center">
          <label class="sub inline-block mr-4 relative top-1">Name</label>
          <Input />
        </div>
        <div class="flex items-center mt-5">
          <label class="sub inline-block mr-4 text-nowrap relative top-1"
            >Email</label
          >
          <Input />
        </div>
        <div class="flex items-center mt-5">
          <label class="sub inline-block mr-4 text-nowrap relative top-1"
            >Phone</label
          >
          <Input />
        </div>
        <div class="flex items-center mt-5">
          <label class="sub inline-block mr-4 text-nowrap relative top-1"
            >Phone</label
          >
          <Input />
        </div>
        <div class="flex items-center mt-5">
          <label class="sub inline-block mr-4 text-nowrap relative top-1"
            >Question</label
          >
          <Input />
        </div>
        <button
          class="mt-10 px-16 py-2 text-[18px] font-[400] sub border-white rounded-[50px] border text-white font-300 hover:bg-stone-900/90 dark:bg-stone-50 dark:text-stone-white dark:hover:bg-white-50/90"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  </section>
  <section class="plr">
    <div class="text-center sub pb-5">
      Legal Please enjoy responsibly. You must be of legal drinking age to visit
      this site. Terms & Conditions | Privacy Policy 2024
    </div>
  </section>
</template>

<style scoped>
.animColorTxt {
  animation: animColorTxt 0.6s linear infinite alternate;
}

@keyframes animColorTxt {
  0% {
    color: #acacac;
  }

  90% {
    color: #484848;
  }

  100% {
    color: #484848;
  }
}

.AnimationBottle {
  animation: AnimationBottle 2s linear infinite alternate;
}

@keyframes AnimationBottle {
  0% {
    transform: translateY(0px);
  }

  100% {
    transform: translateY(30px);
  }
}

/* .pointMap:hover .pointMap_item {
  opacity: 1;
}
.pointMap_item {
  opacity: 0;
} */
</style>
