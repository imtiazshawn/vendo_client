import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { deleteCookie } from 'cookies-next';
import { FaBars, FaUserCircle, FaSignOutAlt, FaBell, FaMoon, FaSun } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import WhiteLogo from "@/public/logo_white.png";
import ColorLogo from "@/public/logo.png";
import { MobileHeaderProps } from '@/src/types/layout';
import { useThemeStore } from "@/src/store/themeStore";

const MobileHeader: React.FC<MobileHeaderProps> = ({ onMenuToggle }) => {
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem("user");
      setUsername(user);
    }
  }, []);

  const handleLogout = () => {
    deleteCookie('token');
    router.push('/admin/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[color:var(--bg-light)] shadow-md flex items-center justify-between px-4 lg:hidden z-10">
      <button onClick={onMenuToggle} className="text-xl">
        <FaBars className="text-[color:var(--heading-text)]" />
      </button>
      <div className="flex items-center">
        {
          theme === 'light' ? 
          <Image src={ColorLogo} alt="Logo" width={65} />
          :
          <Image src={WhiteLogo} alt="Logo" width={65} />
        }
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <FaUserCircle className="text-2xl text-[color:var(--heading-text)]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 mt-2">
          <DropdownMenuLabel className="font-semibold">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>{username || 'Guest'}</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={toggleTheme}>
            {theme === "light" ? (
              <>
                <FaMoon className="text-[color:var(--header-text)] mr-2" /> Dark Mode
              </>
            ) : (
              <>
                <FaSun className="text-[color:var(--header-text)] mr-2" /> Light Mode
              </>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FaBell className="text-[color:var(--header-text)] mr-2" /> Notifications
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <FaSignOutAlt className="text-[color:var(--header-text)] mr-2" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default MobileHeader;
