/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './blog/**/*.{js,ts,md,jsx,tsx,mdx}',
    './docs/**/*.{js,ts,md,jsx,tsx,mdx}',
    './src/**/*.{js,ts,md,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // Left empty to avoid conflict with the `container` class.
    },
    extend: {},
  },
  plugins: [],
};
