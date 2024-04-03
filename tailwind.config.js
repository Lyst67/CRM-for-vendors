/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'first-child': "url('/images/mesh-gradient-1.svg')",
        'second-child': "url('/images/mesh-gradient-2.svg')",
        'third-child': "url('/images/mesh-gradient-3.svg')",
        'fourth-child': "url('/images/mesh-gradient-4.svg')",
        'crm-bg': 'url(/images/background/crm.webp)',
      },
    },
  },
  plugins: [],
};
