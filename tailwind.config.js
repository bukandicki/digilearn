/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                sm: "5px",
                md: "6px"
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                danger: "#D2000F",
                success: "#0093AD",
                primary: "#457B9D",
                white: "#FFFFFF",
                black: "#1F2855"
            },
            spacing: {
                1: "5px",
                2: "9px",
                3: "12px",
                4: "15px",
                5: "22px",
                6: "25px",
                7: "32px"
            },
            boxShadow: {
                md: "0px 4px 15px rgba(0, 0, 0, 0.1)"
            }
        }
    },
    plugins: []
};
