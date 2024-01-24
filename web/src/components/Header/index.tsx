import Image from "next/image";
import logo from "../../../public/logo.png";
import { FaSignOutAlt } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="w-full px-[250px] justify-between  items-center flex p-3 fixed top-0">
      <Image width={100} src={logo} alt="logo" />
      <FaSignOutAlt size={30}/>
    </div>
  );
};
