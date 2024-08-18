import React from "react";
import { usePathname } from "next/navigation";
import { FaBell, FaMoon, FaSearch, FaUsers, FaHome, FaCartArrowDown } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { IoIosLogOut, IoIosHome } from "react-icons/io";
import { HeaderProps } from '@/src/types/layout';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/src/store/themeStore";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC<HeaderProps> = ({ className }) => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useThemeStore();

  const getTitle = () => {
    if (pathname.startsWith('/admin/dashboard/orders')) return 'Orders Manager';
    if (pathname.startsWith('/admin/dashboard/users')) return 'Users Management';
    if (pathname.startsWith('/admin/dashboard')) return 'Dashboard';
    return 'Welcome to the App';
  };

  const getIcon = () => {
    if (pathname.startsWith('/admin/dashboard/orders')) return <FaCartArrowDown className="text-xl text-[#010127]" />;
    if (pathname.startsWith('/admin/dashboard/users')) return <FaUsers className="text-xl text-[#010127]" />;
    if (pathname.startsWith('/admin/dashboard')) return <FaHome className="text-xl text-[#010127]" />;
    return <IoIosHome className="text-xl text-[#010127]" />;
  };

  return (
    <header className={`bg-[#fff] text-neutral-700 p-4 w-full flex items-center justify-between shadow-md ${className}`}>
      <div className="flex items-center space-x-2 text-lg font-medium">
        {getIcon()}
        <span>{getTitle()}</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search..."
            className="w-64 bg-[color:var(--bg-light)] pl-4 pr-10"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme} // Use Zustand's toggleTheme function
        >
          {theme === "light" ? <FaMoon className="text-[color:var(--primary-lighter)] text-lg" /> : <FaSun className="text-[color:var(--primary-lighter)] text-lg" />}
        </Button>
        <Button variant="ghost" size="icon">
          <FaBell className="text-[color:var(--primary-lighter)] text-lg" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>IS</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{`Welcome, Username`}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => console.log("Logout clicked")}>
              <IoIosLogOut className="mr-2 text-lg" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
