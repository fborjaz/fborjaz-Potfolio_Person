import logo from "../assets/LOGO.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
   <div className="flex flex-shrink-0 items-center gap-4">
      <img class="w-10 h-10 rounded-full" src={logo} alt="logo" />
      <div class="font-medium dark:text-white">
        <div>Frank Borja</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Developer</div>
    </div>
   </div>
   <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <FaLinkedin />
      <FaGithub />
      <FaInstagram />
      <FaSquareXTwitter />
   </div>
  </nav>;
};

export default Navbar;
