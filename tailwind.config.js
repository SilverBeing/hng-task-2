/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gridTemplateColumns: {
          "auto-fit-minmax": "repeat(auto-fit,minmax(233px, 1fr))",
        },
        primary: "#FF6636",
        secondary: "#FFEEE8",
        darkBlue: "#1D2026",
        grey: "#4E5566",
        muted: "#BDBDBD",
      },
      boxShadow: {
        "hover-button": "0px 6px 20px 0px rgba(204, 82, 43, 0.50)",
        "book-card": "0px 0px 4px 0px rgba(0,0,0,0.25)",
        "about-card": "2px 2px 40px 0px rgba(56, 119, 194, 0.08)",
        paginate: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(287deg, #FFF 7.48%, #EED4CB 87.07%)",
        "gradient-conic": "",
      },
    },
  },
  plugins: [],
};
