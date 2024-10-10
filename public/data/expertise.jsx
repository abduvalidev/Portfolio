import { BiLogoPostgresql } from "react-icons/bi";
import { CgPerformance } from "react-icons/cg";
import { DiDotnet } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { FaGit } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiLighthouse,
  SiMicrosoftsqlserver,
  SiMysql,
  SiNestjs,
  SiPagespeedinsights,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";

const expertise = [
  {
    id: 1,
    title: "Frontend Development",
    icons: [
      FaHtml5,
      FaCss3,
      IoLogoJavascript,
      FaReact,
      TbBrandNextjs,
      FaBootstrap,
      SiTailwindcss,
    ],
    description:
      "I specialize in creating captivating digital experiences using HTML, CSS, and JavaScript. With expertise in ReactJS and Next.js, I design dynamic and scalable user interfaces that leverage modern web technologies for seamless interactions.",
  },

  {
    id: 3,
    title: "Responsive Design",
    icons: [FaCss3, IoLogoJavascript, FaBootstrap, SiTailwindcss],
    description:
      "I ensure websites adapt seamlessly to all devices using responsive design techniques like Bootstrap and Tailwind's breakpoints and media queries, ensuring consistent user experience.",
  },
  {
    id: 4,
    title: "JavaScript & React JS",
    icons: [IoLogoJavascript, FaReact ],
    description:
      "With a strong command of JavaScript and React JS, I build dynamic, scalable, and user-friendly web applications. I focus on delivering seamless user experiences through interactive front-end features, optimized performance, and efficient, modular code. My expertise in React includes component-based architecture, state management, and performance enhancements like lazy loading and code splitting, ensuring fast, maintainable single-page applications",
  },
];

export default expertise;
