/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        smooth_left:{
          "from": {
            transform: "translate(-50px, 0px)",
            opacity: "0%"
          },
          "to": {
            transform: "translate(0px, 0px)"
          },
        },
        smooth_right:{
          "from": {
            transform: "translate(50px, 0px)",
            opacity: "0%"
          },
          "to": {
            transform: "translate(0px, 0px)"
          },
        },
        smooth_top:{
          "from": {
            transform: "translate(0px, -50px)",
            opacity: "0%"
          },
          "33%":{
            transform: "translate(0px, -50px)",
            opacity: "0%"
          },
          "to": {
            transform: "translate(0px, 0px)"
          },
        },
        smooth_bottom:{
          "from": {
            transform: "translate(0px, 50px)",
            opacity: "0%"
          },
          "33%":{
            transform: "translate(0px, 50px)",
            opacity: "0%"
          },
          "to": {
            transform: "translate(0px, 0px)"
          },
        },
        smooth_left2:{
          "from": {
            transform: "translate(-50px, 0px)",
            opacity: "0%"
          },
          "33%":{
            transform: "translate(-50px, 0px)",
            opacity: "0%"
          },
          "to": {
            transform: "translate(0px, 0px)"
          },
        },
        smooth_right2:{
          "from": {
            transform: "translate(50px, 0px)",
            opacity: "0%"
          },
          "33%":{
            transform: "translate(50px, 0px)",
            opacity: "0%"
          },
          "to": {
            transform: "translate(0px, 0px)"
          },
        },
        smooth_center:{
          "from": {
            opacity: "0%",
            scale: "50%"
          },
          "to": {
            opacity: "100%"
          },
        },
        
      },
      animation: {
        smooth_left: "smooth_left 0.5s",
        smooth_right: "smooth_right 0.5s",
        smooth_top: "smooth_top 0.75s",
        smooth_bottom: "smooth_bottom 0.75s",
        smooth_left2: "smooth_left2 1.25s",
        smooth_right2: "smooth_right2 1.25s",
        smooth_center: "smooth_center 0.4s"
      }
    },
  },
  plugins: [],
}

