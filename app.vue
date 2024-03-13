<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {});
</script>
<template>
  <section class="relative w-full h-[100vh]">
    <iframe
      class="absolute left-0 bottom-0 h-full w-full object-cover"
      src="https://player.vimeo.com/video/911333278?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
      frameborder="0"
    ></iframe>
    <div class="plr h-full">
      <div class="relative">
        <ul
          class="z-20 top-10 flex absolute right-0 border border-[#4F4F4F] rounded-3xl px-[10px] py-[10px]"
        >
          <li class="max-w-[20px] w-[20px] mx-2">
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
          <li class="max-w-[20px] w-[20px] mx-2">
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
          <li class="max-w-[20px] w-[20px] mx-2">
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
          <li class="max-w-[20px] w-[20px] mx-2">
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
        class="relative z-[10] flex flex-col justify-center items-center h-full"
      >
        <div class="mb-10"><img src="@/assets/img/logo.svg" alt="" /></div>
        <div>
          <img class="max-w-[108px]" src="@/assets/img/b_1.webp" alt="" />
        </div>
        <h1 class="text-[#D1AF53] text-[30px] tracking-[40px] mt-[25px]">
          TASTE THE LUXURY
        </h1>
      </div>
    </div>
  </section>

  <section class="bg-[#171717] relative max-w-full h-[100vh] overflow-hidden">
    <div class="plr h-full">
      <img
        class="absolute -bottom-20 -right-20 max-w-full z-0"
        src="@/assets/img/02/bg.svg"
        alt=""
      />
      <div
        class="flex items-center justify-between h-full pt-20 pb-20 relative z-10"
      >
        <div class="text-white max-w-[490px] self-center sub">
          Champagne D.ROCK embodies the essence of a quaint, picturesque family
          enterprise nestled in the heart of France's Champagne region. Crafted
          from a harmonious blend of hand-picked Chardonnay and Pinot Noir
          grapes cultivated in local vineyards, our champagne undergoes a
          meticulous process that begins with traditional Coquart pressing.
        </div>
        <div></div>
        <div class="maxt uppercase text-[#ACACAC] f-oswald leading-[100%]">
          <div>HEART</div>
          <div>HEART</div>
          <div>HEART</div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-[#1A1A1A] overflow-hidden max-h-[810px] h-[100vh]">
    <div class="plr h-full">
      <div class="flex items-center h-full relative">
        <img
          class="absolute -bottom-20 -right-20 w-auto z-0"
          src="@/assets/img/02/bg.svg"
          alt=""
        />
        <div class="flex-[0_0_65%]">
          <div class="relative">
            <span
              class="relative left-[-20%] uppercase inline-block maxt rotate-[270deg] text-[#121212]"
              >grapes</span
            >
            <img
              class="absolute left-[20%] max-w-[292px] top-[50%] translate-y-[-50%]"
              src="@/assets/img/03/b_2.webp"
              alt=""
            />
          </div>
        </div>
        <p class="sub flex-[0_0_40%] max-w-[400px] relative z-10">
          The renowned white Chardonnay grapes, cherished for their crisp,
          delectable flavors, complement the darker Pinot Noir, which boasts a
          distinct bouquet and extraordinary texture. These dark blue grapes
          yield a brighter must, offering a delightful amalgamation of floral
          tones with subtle hints of honey and lime.
        </p>
      </div>
    </div>
  </section>

  <section class="relative max-w-full h-[100vh] overflow-hidden">
    <div class="plr h-full overflow-hidden">
      <img
        class="absolute -bottom-20 -right-20 w-auto z-0 max-w-full"
        src="@/assets/img/02/bg.svg"
        alt=""
      />
      <div
        class="flex items-center justify-between h-full pt-20 pb-20 relative z-10"
      >
        <div>
          <div class="text-white max-w-[490px] self-center sub">
            Each black, elegantly frosted bottle is adorned with over 1000
            synthetic "Luk-Dymand" crystals, meticulously assembled by hand on
            smooth velveteen. These crystals, renowned for their unique sparkle
            and vibrant color play, are meticulously placed, ensuring a
            kaleidoscope of visual allure. A specially trained artisan then
            affixes the entire ensemble to the bottle, resulting in a truly
            one-of-a-kind masterpiece.
          </div>

          <Button class="mt-12">Buy Now</Button>
        </div>
        <div></div>
        <div class="maxt uppercase text-[#ACACAC] f-oswald leading-[100%]">
          <div class="relative">
            <span
              class="relative right-[-30%] uppercase inline-block maxt rotate-[270deg] text-[#121212]"
              >crystals</span
            >
            <img
              class="absolute right-[40%] max-w-[160px] top-[50%] translate-y-[-50%]"
              src="@/assets/img/04/01.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="relative overflow-hidden w-full max-w-full bg-[#1A1A1A]">
    <iframe
      class="absolute left-0 w-full top-0 h-full max-w-full"
      src="https://player.vimeo.com/video/911327142?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
      frameborder="0"
    ></iframe>
    <div class="plr relative ">
      <div class="flex justify-between items-center">
      <div class="relative z-[10]">
        <img class="max-w-[200px]" src="@/assets/img/06/01.webp" alt="" />
      </div>
      <div class="max-w-[500px] ">
        <h2 class="title">The Monumental 60L D. Rock Champagne</h2>
        <div class="sub font-[400] mt-10">The colossal 60L D. Rock Champagne is the largest champagne bottle worldwide. As we push the boundaries of elegance and grandeur, this World Record promises to redefine celebratory extravagance.</div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
