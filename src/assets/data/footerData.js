import logo from "../img/logo.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const footerData = {
  logo: logo,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  socialLinks: [
    { icon: FaFacebookF, link: "https://facebook.com", alt: "Facebook" },
    { icon: FaTwitter, link: "https://twitter.com", alt: "Twitter" },
    { icon: FaLinkedinIn, link: "https://linkedin.com", alt: "LinkedIn" },
  ],
  links: [
    { label: "Privacy policy", url: "/privacy-policy" },
    { label: "Terms of service", url: "/terms-of-service" },
  ],
};

export default footerData;
