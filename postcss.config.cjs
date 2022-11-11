const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require('@fullhuman/postcss-purgecss');
const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
    // 
    purgecss({content: ['./src/**/*.{svelte,ts,postcss}']})
  ],
};

module.exports = config;
