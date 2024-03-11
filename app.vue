<script setup>
import { onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


onMounted(() => {

})
</script>
<template>
  <section class="relative w-full h-[100vh]">
    <iframe
      class="absolute left-0 top-0 h-full w-full"
      src="https://player.vimeo.com/video/911333278?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
      frameborder="0"
    ></iframe>
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
  </section>

  <section class="plr">
    <div class="flex justify-between">
      <div class="text-white max-w-[455px] self-center f-inter">
        Champagne D.ROCK embodies the essence of a quaint, picturesque family
        enterprise nestled in the heart of France's Champagne region. Crafted
        from a harmonious blend of hand-picked Chardonnay and Pinot Noir grapes
        cultivated in local vineyards, our champagne undergoes a meticulous
        process that begins with traditional Coquart pressing.
      </div>
      <div></div>
      <div class="text-[100px] uppercase text-white">
        <div>HEART</div>
        <div>HEART</div>
        <div>HEART</div>
      </div>
    </div>
  </section>

  <section class="plr">
    <div class="flex items-center">
      <div><img src="@/assets/img/b_2.webp" alt=""></div>
      <p class="f-inter max-w-[400px]">
        The renowned white Chardonnay grapes, cherished for their crisp,
        delectable flavors, complement the darker Pinot Noir, which boasts a
        distinct bouquet and extraordinary texture. These dark blue grapes yield
        a brighter must, offering a delightful amalgamation of floral tones with
        subtle hints of honey and lime.
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
