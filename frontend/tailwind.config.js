/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        "my-firstImg":
          "url('https://img.freepik.com/free-photo/adorable-white-bulldog-puppy-portrait_53876-64846.jpg?w=740&t=st=1695383161~exp=1695383761~hmac=5b537c2f263a129f8aa47aab63f0a9ef39843123edd637da332661d6a76223f7')",
        "my-secImg":
          "url(https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?w=826&t=st=1695382103~exp=1695382703~hmac=5c8153f0bb4f16f4f45d18346811349de00bd9a770bda6eb2975f4a1f9016812)",
        "my-thirdImg":
          " url('https://img.freepik.com/free-photo/beautiful-shot-different-dog-breeds-resting_181624-19887.jpg?w=740&t=st=1695383135~exp=1695383735~hmac=e18ce740ff9027269d2aa26ee8cdfd23c1564ea928d4ae4503b8bd3199c6ba77')",
      },
    },
  },
};
