import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "restaurant-interior": "url('../../public/restaurant_interior.jpg')",
            },
            fontFamily: {
                "lora": "'Lora', serif",
                "arsenal": "'Arsenal', sans-serif",
            },
            textColor: {
                "custom-black": "#161616",
                "custom-green": "#00857A",
            },
            backgroundColor: {
                "custom-green": "#00857A"
            }
        },
    },
    plugins: [],
};
export default config;
