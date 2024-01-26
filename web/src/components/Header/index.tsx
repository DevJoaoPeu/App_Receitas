import Image from "next/image";
import logo from "../../../public/logo.png";
import { FaSignOutAlt } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="w-full flex justify-between items-center py-3 px-4 xl:px-[250px] fixed top-0 bg-white">
      <div className="sm:w-1/2 md:w-auto flex items-center">
        <Image
          src={logo}
          alt="logo"
          width={80}
          height={50}
          className="object-contain"
        />
      </div>
      <div>
        <FaSignOutAlt size={30} />
      </div>
    </div>
  );
};
