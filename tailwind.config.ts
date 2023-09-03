import type { Config } from 'tailwindcss'
import bgimg from './assets/img/bgimg.png'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': `url(${bgimg})`
      },
      colors:{
        'main': '#3C5944'
      },
    },
  },
  plugins: [],
}
export default config
