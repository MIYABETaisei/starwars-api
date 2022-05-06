module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "starwars-color": "#151515",
        "character-color": "#282727",
      },
    },
  },
  plugins: [],
};
