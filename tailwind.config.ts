
import type { Config } from "tailwindcss";


const config: Config = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
      colors:{
        "backgroundGrey":"#1D1D1D"
      },
      fontFamily:{
        'Oxanium': ["Oxanium", "sans-serif"],
        'Orbitron':["Orbitron","sans-serif"]
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      const newComponents = {
        '.sliders': {
          color: "#008000",
          maxWidth:"100%",
          display:"flex",
          alignItems:"center",
          justifyContent:'center',
          backgroundColor:"#ff00ff"

          
        },
      }
      addComponents(newComponents)
    },
  ],
};
export default config;
