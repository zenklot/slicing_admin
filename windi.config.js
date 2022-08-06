import { defineConfig } from "windicss/helpers";

export default defineConfig({
    attributify: true,
    theme: {
        extend:{
            colors: {
                primary: '#053D41',
                secondary: "#F58342",
                font: "#1B1B1B",
                disable: "#999999",
                alert: "#F94C4C",
                contentbody: "#F8F8F8",
            },
            boxShadow:{
                navbar: "0px 4px 24px rgba(0, 0, 0, 0.16) !important",
                card: "0px 4px 12px rgba(0, 0, 0, 0.08)",
            }
        },
    },
    shortcuts: {
        "icon-size": "h-6 w-6",
        "content-row": "flex justify-between gap-8",
        "sidebar":"flex h-screen flex-col sticky top-0",
        "sidebar-hover": "hover:(bg-[#0b828b] bg-opacity-10)",
        "item-hover": "hover:(bg-primary bg-opacity-10)",
        "default-input" : "border border-disable rounded-md px-6 py-6 hover:border-secondary",
        "default-button": "rounded-[100px] py-4 px-5"
    },
});