import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "@/public/logo_white.png";
import { MobileHeaderProps } from '@/src/types/layout';

const MobileHeader: React.FC<MobileHeaderProps> = ({ onMenuToggle }) => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem("user");
      setUsername(user);
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("user");
      window.location.href = "/auth";
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gradient-sidebar shadow-md flex items-center justify-between px-4 lg:hidden z-10">
      <button onClick={onMenuToggle} className="text-xl">
        <FaBars className="text-white" />
      </button>
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={65} />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <FaUserCircle className="text-3xl text-neutral-700" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 mt-2">
          <DropdownMenuLabel className="font-semibold">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <span>{username || 'Guest'}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <FaSignOutAlt className="text-[#010127] mr-2" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default MobileHeader;
