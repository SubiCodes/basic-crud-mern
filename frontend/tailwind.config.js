import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#a239ca",
                    
          "secondary": "#664e00",
                    
          "accent": "#4717f6",
                    
          "neutral": "#e7dfdd",
                    
          "base-100": "#0e0b16",
                    
          "info": "#00e0ff",
                    
          "success": "#009c00",
                    
          "warning": "#fde047",
                    
          "error": "#dc2626",
          },
      },
      {
        light: {
          
          "primary": "#a239ca",
                    
          "secondary": "#664e00",
                    
          "accent": "#4717f6",
                    
          "neutral": "#0e0b16",
                    
          "base-100": "#fff",
                    
          "info": "#00e0ff",
                    
          "success": "#009c00",
                    
          "warning": "#fde047",
                    
          "error": "#dc2626",
        },
      }
      ],
    },
  plugins: [daisyui],
}

