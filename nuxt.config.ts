// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  app: {
    // pageTransition: { name: "page", mode: "out-in" },

    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      title: "Champagne D.ROCK",

      meta: [
        // <meta name="description" content="My amazing site">
        // { "http-equiv": "refresh", content: "0;url=https://13elite.com" },
        {
          name: "description",
          content:
            "Champagne D.ROCK embodies the essence of a quaint, picturesque family enterprise nestled in the heart of France's Champagne region. ",
        },
        { name: "msapplication-TileColor", content: "#fff" },
        { name: "theme-color", content: "#131112" },

        {
          property: "og:title",
          content: "Champagne D.ROCK",
        },
        {
          property: "og:description",
          content:
            "Champagne D.ROCK embodies the essence of a quaint, picturesque family enterprise nestled in the heart of France's Champagne region. ",
        },
        {
          property: "og:image",
          content: "https://gameofkings.ae/og-logo.png",
        },
        { property: "og:url", content: "https://gameofkings.ae" },
        { property: "og:type", content: "website" },

        // { property: "og:url", content: "#ffffff" },
      ],
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },

        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
      ],
      script: [
        {
          // src: "https://apis.google.com/js/api.js",
        },
      ],
    },
  },

  css: ["~/assets/css/font.css", "~/assets/css/main.css", "~/assets/css/tailwind.css"],

  modules: [
    "@vueuse/nuxt",
    // "@nuxt/content",
    "@nuxtjs/tailwindcss", //tailwind
    "nuxt-icon",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "nuxt-swiper",
    'shadcn-nuxt'

    // "@nuxt/image",
  ],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  // image: {
  //   format: ['webp']
  // }

  googleFonts: {
    families: {
      Oswald: [400, 700],
      "Open Sans": [400],
    },
  },
});
