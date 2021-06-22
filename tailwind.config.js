const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./public/**/*.html", "./src/**/*.vue"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        zIndex: {
            "-1": "-1",
            1: "1",
            90: 90,
            200: 200,
            250: 250,
        },
        maxWidth: {
            xxs: "15rem",
            "1/2": "50%",
            "3/4": "75%",
        },
        extend: {
            colors: {},
        },
    },
    variants: {
        padding: ["responsive", "hover", "focus", "important"],
        margin: ["responsive", "hover", "focus", "important"],
        backgroundColor: ["responsive", "hover", "focus", "important"],
        textColor: ["responsive", "hover", "focus", "important"],
        boxShadow: ["responsive", "hover", "focus", "important"],
        borderRadius: ["responsive", "hover", "focus", "important"],
        borderWidth: ["responsive", "hover", "focus", "important"],
        fontWeight: ["hover", "focus"],
        lineHeight: ["responsive", "important"],
        borderColor: ["responsive", "hover", "focus", "important"],
        width: ["responsive", "important"],
        display: ["responsive", "important"],
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
        require("tailwindcss-important")(),
    ],
};
