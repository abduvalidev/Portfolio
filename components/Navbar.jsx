"use client";
import { Button } from "@/components/ui/button";
import useScrollSpy from "@/hook/useScrollSpy";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BiLogoGmail, BiLogoTelegram } from "react-icons/bi";
import letters from "../public/data/name.json";
import NavbarItem from "./NavbarItem";
import { FaGithub } from "react-icons/fa";

const navbarAnimate = {
  initial: {
    y: -400,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.47, 1.64, 0.41, 0.8],
    },
  },
};

const Navbar = () => {
  const { scrollToSection } = useScrollSpy();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  const handleClick = (item) => {
    scrollToSection(item);
  };
  return (
    <motion.header
      variants={navbarAnimate}
      initial="initial"
      animate="animate"
      className="sticky top-0 z-50 w-full shadow-md shadow-ring/10 backdrop-blur-md py-3"
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-5 md:px-7">
        <Link href="/" scroll={false} onClick={() => handleClick("home")}>
          <div className="flex text-base uppercase xs:text-2xl lg:text-3xl font-playfair">
            {letters.map((letter, index) => (
              <div
                key={index}
                className="animate-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {letter === " " ? <>&nbsp;</> : letter}
              </div>
            ))}
          </div>
        </Link>
        <div className="absolute top-[70px] flex justify-center w-full md:w-fit md:block md:static left-0 ">
          <NavbarItem />
        </div>
        <div className="flex items-center justify-center gap-1 md:gap-3">
          <Button asChild variant="ghost" size="icon">
            <Link
              href="https://github.com/abduvalidev"
              aria-label="Contact with me via mail"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link
              href="https://t.me/Kozimov_Abduvali"
              aria-label="Contact with me via Telegram"
            >
              <BiLogoTelegram className="w-6 h-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <SunIcon className="block w-6 h-6 transition-all duration-1000 scale-100 rotate-0 dark:hidden dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="hidden w-6 h-6 transition-all duration-1000 scale-0 rotate-90 dark:block dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
