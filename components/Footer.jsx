import Link from "next/link";
import { FaRegCopyright, FaStar } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";

import socialIcons from "./icon/Social";
const Footer = () => {
  return (
    <>
      <div className="flex justify-center translate-y-[1px]">
        <div className="w-3/4">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
      </div>
      <footer className="border-t border-t-border">
        <div className="max-w-7xl mx-auto px-5 md:px-7 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-3 py-3 text-sm">
          <div className="flex items-center gap-1 flex-nowrap ">
            <FaRegCopyright className="w-4 h-4" /> 2024{" "}
            <span>
              <Link
                href="https://www.linkedin.com/in/abduvali-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin Via Credit"
              >
                Abduvali Kozimov
              </Link>
            </span>
          </div>
          <div className="flex gap-3 flex-nowrap">
            <Link
              href="https://github.com/abduvalidev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star"
              className="flex items-center gap-1 flex-nowrap "
            >
              <FaStar className="w-4 h-4" />
              Star
            </Link>
          </div>
          <div>
            <ul className="flex gap-3">
              {socialIcons.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                  >
                    <item.Icon className="md:w-6 md:h-6 w-5 h-5 transition-all duration-300 ease-in-out hover:rotate-[360deg]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
