import {
  FaJava,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSwiper,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "ЧАЙНЫЙ ДОМ (Tea House)",
    image: "/img/chay-1.jpg",
    description:
      `For "Чайный дом," I developed the front-end of their e-commerce website using Tailwind CSS and JavaScript. The goal was to create a clean, user-friendly interface that showcases the company's products in an organized and attractive manner. I focused on responsiveness, ensuring that the website works seamlessly on all devices. Technologies: Tailwind CSS, JavaScript`,
    technologies: [SiHtml5, SiCss3, SiTailwindcss, SiJavascript],
    githubLinks: [
      {
        label: "Code",
        url: "https://github.com/abduvalidev/tea-branch",
      },
    ],
    liveDemoLinks: [{ label: "Demo", url: "https://tea-branch.vercel.app/" }],
  },
  {
    id: 2,
    name: "ПОЛИТАКС ",
    image: "/img/politax-1.jpg",
    description:
      "Политакс (Politaks) I was responsible for building the front-end of the Politax website from scratch using Tailwind CSS and JavaScript. The design aims to reflect the brand's professionalism and credibility with a clean, minimalist look and intuitive navigation. Technologies: Tailwind CSS, JavaScript What I did: Tailwind implemented a responsive layout using CSS. Custom animations and interactive elements are created using JavaScript. Ensured website availability and SEO friendly structure.",
    technologies: [SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiSwiper],
    githubLinks: [
      { 
        label: "Code",
        url: "https://github.com/abduvalidev/politaks",
      },
    ],
    liveDemoLinks: [{ label: "Demo", url: "https://politaks-one.vercel.app/" }],
  },
  {
    id: 3,
    name: "2D Assistant",
    image: "/img/robot-1.jpg",
    description:
      "For 2D Assistant, I developed the front-end interface of their online platform. The project involved creating an intuitive dashboard with easy navigation, responsive design, and interactive elements using Tailwind CSS and JavaScript. Technologies: Tailwind CSS, JavaScript What I did: Built a responsive and interactive user dashboard using Tailwind CSS. Implemented data visualization and interaction using JavaScript. Optimized the website for performance and usability across all devices.",
    technologies: [SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiSwiper],
    githubLinks: [
      { 
        label: "Code",
        url: "https://github.com/abduvalidev/2d-assistant",
      },
    ],
    liveDemoLinks: [{ label: "Demo", url: "https://abduvali-2d-assistant.vercel.app/" }],
  },
];

export default projects;
