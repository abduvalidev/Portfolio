import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socialIcons = [
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/abduvali-dev",
    label: "Linkedin",
  },
  { Icon: FaGithub, link: "https://github.com/abduvalidev", label: "Github" },
  {
    Icon: FaFacebook,
    link: "https://www.facebook.com",
    label: "Facebook",
  },
  {
    Icon: MdEmail,
    link: "mailto:abduvalidev1@gmail.com",
    label: "Mail",
  },
  {
    Icon: FaPhone,
    link: "tel:+998773170264",
    label: "Phone",
  },
  {
    Icon: FaTelegram,
    link: "https://t.me/Kozimov_Abduvali",
    label: "Telegram",
  },
];

export default socialIcons;
