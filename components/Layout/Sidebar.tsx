import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { FaHome, FaUsers, FaBoxOpen, FaCartArrowDown, FaClipboardList, FaUserCircle, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { AiFillCustomerService } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

import Logo from "@/public/logo_white.png";
import { SidebarProps } from '@/src/types/layout';

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleProductsClick = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const handleLogout = () => {
  };

  return (
    <aside className={`flex flex-col w-64 p-2 ${className} bg-gradient-sidebar`}>
      <div className="text-xl font-semibold mb-6 p-4 text-white">
        <Image src={Logo} alt="Logo" width={75} />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li
            className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
              pathname === '/admin/dashboard' ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold' : 'text-[#fff] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
            }`}
            onClick={() => router.push('/admin/dashboard')}
          >
            <FaHome />
            <span>Dashboard</span>
          </li>
          <li
            className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
              pathname === '/admin/users' ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold' : 'text-[#fff] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
            }`}
            onClick={() => router.push('/admin/users')}
          >
            <FaUsers />
            <span>Users</span>
          </li>
          <li
            className={`flex items-center justify-between space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
              isProductsOpen ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold' : 'text-[#fff] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
            }`}
            onClick={handleProductsClick}
          >
            <div className="flex items-center space-x-2">
              <FaBoxOpen />
              <span>Products</span>
            </div>
            <IoChevronDownOutline className={`transform transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
          </li>
          <ul
            className={`pl-6 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
              isProductsOpen ? 'max-h-40' : 'max-h-0'
            }`}
          >
            <li
              className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
                pathname === '/admin/products/list' ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold' : 'text-[#fff] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
              }`}
              onClick={() => router.push('/admin/products/list')}
            >
              <span>Products List</span>
            </li>
            <li
              className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
                pathname === '/admin/products/add' ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold' : 'text-[#fff] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
              }`}
              onClick={() => router.push('/admin/products/add')}
            >
              <span>Product Add</span>
            </li>
          </ul>
          <li
            className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
              pathname === '/admin/orders' ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold' : 'text-[#fff] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
            }`}
            onClick={() => router.push('/admin/orders')}
          >
            <FaCartArrowDown />
            <span>Orders</span>
          </li>
          <li
            className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
              pathname === '/admin/inventory' ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold' : 'text-[#fff] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
            }`}
            onClick={() => router.push('/admin/inventory')}
          >
            <FaClipboardList />
            <span>Inventory</span>
          </li>
          <li
            className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
              pathname === '/admin/support' ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold' : 'text-[#fff] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
            }`}
            onClick={() => router.push('/admin/support')}
          >
            <AiFillCustomerService />
            <span>Customer Support</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
