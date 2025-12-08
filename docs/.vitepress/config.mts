import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Lazy Study Doc",
  description: "",

  markdown: {
    math: true,
    image: {
      lazyLoading: true,
    },
  },

  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    sidebar: [
      {
        text: "Welcome",
        link: "/welcome",
      },
      {
        text: "Science",
        collapsed: false,
        items: [
          {
            text: "Higher Math",
            collapsed: true,
            items: [
              { text: "1st Paper", link: "/higher-math/1st-paper" },
              { text: "2nd Paper", link: "/higher-math/2nd-paper" },
            ],
          },
          {
            text: "Physics",
            collapsed: true,
            items: [
              { text: "1st Paper", link: "/physics/1st-paper" },
              { text: "2nd Paper", link: "/physics/2nd-paper" },
            ],
          },
          {
            text: "Engineering Drawing",
            collapsed: true,
            items: [
              { text: "1st Paper", link: "/engineering-drawing/1st-paper" },
              { text: "2nd Paper", link: "/engineering-drawing/2nd-paper" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/rockyxwall/Lazy-Study-Doc" },
    ],
  },
});
