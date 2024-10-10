import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contactDetails = [
  {
    id: 1,
    type: "Email",
    value: "abduvalidev1@gmail.com",
    link: "abduvalidev1@gmail.com",
    icon: MdEmail,
  },
  {
    id: 2,
    type: "Phone",
    value: "+998773170264",
    link: "tel:+998773170264",
    icon: FaPhoneSquareAlt,
  },
  {
    id: 4,
    type: "Address",
    value: "Uzbekistan, Andijan, Andijan City",
    link: "#",
    icon: FaLocationDot,
  },
];

export default contactDetails;
