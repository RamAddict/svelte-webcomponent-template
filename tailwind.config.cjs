const daisyui = require("daisyui");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    colors: {
		}
  },

  plugins: [daisyui],
  daisyui: {
	
  }
  
};

module.exports = config;
