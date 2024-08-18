import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import {
  FaHome,
  FaUsers,
  FaBoxOpen,
  FaCartArrowDown,
  FaClipboardList,
} from 'react-icons/fa';
import { AiFillCustomerService } from 'react-icons/ai';
import { IoChevronDownOutline } from 'react-icons/io5';

import { MobileSidebarProps } from '@/src/types/layout';

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const [isProductsOpen, setIsProductsOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleProductsClick = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } z-10`}
        onClick={onClose}
      />
      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 w-[60%] bg-[color:var(--bg-light)] p-2 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } h-full shadow-md z-20`}
      >
        <nav className="mt-4">
          <ul className="space-y-2">
            <li
              className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
                pathname === '/admin/dashboard'
                  ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold'
                  : 'text-[color:var(--bg-primary)] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
              }`}
              onClick={() => {
                router.push('/admin/dashboard');
                onClose();
              }}
            >
              <FaHome />
              <span>Dashboard</span>
            </li>
            <li
              className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
                pathname === '/admin/users'
                  ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold'
                  : 'text-[color:var(--bg-primary)] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
              }`}
              onClick={() => {
                router.push('/admin/users');
                onClose();
              }}
            >
              <FaUsers />
              <span>Users</span>
            </li>
            <li
              className={`flex items-center justify-between space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
                isProductsOpen
                  ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold'
                  : 'text-[color:var(--bg-primary)] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
              }`}
              onClick={handleProductsClick}
            >
              <div className="flex items-center space-x-2">
                <FaBoxOpen />
                <span>Products</span>
              </div>
              <IoChevronDownOutline
                className={`transform transition-transform duration-300 ${
                  isProductsOpen ? 'rotate-180' : ''
                }`}
              />
            </li>
            <ul
              className={`pl-6 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                isProductsOpen ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <li
                className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
                  pathname === '/admin/products/list'
                    ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold'
                    : 'text-[color:var(--bg-primary)] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
                }`}
                onClick={() => {
                  router.push('/admin/products/list');
                  onClose();
                }}
              >
                <span>Products List</span>
              </li>
              <li
                className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
                  pathname === '/admin/products/add'
                    ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold'
                    : 'text-[color:var(--bg-primary)] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
                }`}
                onClick={() => {
                  router.push('/admin/products/add');
                  onClose();
                }}
              >
                <span>Product Add</span>
              </li>
            </ul>
            <li
              className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
                pathname === '/admin/orders'
                  ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold'
                  : 'text-[color:var(--bg-primary)] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
              }`}
              onClick={() => {
                router.push('/admin/orders');
                onClose();
              }}
            >
              <FaCartArrowDown />
              <span>Orders</span>
            </li>
            <li
              className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
                pathname === '/admin/inventory'
                  ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold'
                  : 'text-[color:var(--bg-primary)] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
              }`}
              onClick={() => {
                router.push('/admin/inventory');
                onClose();
              }}
            >
              <FaClipboardList />
              <span>Inventory</span>
            </li>
            <li
              className={`flex items-center space-x-2 cursor-pointer px-4 py-2 rounded-lg ${
                pathname === '/admin/support'
                  ? 'bg-[color:var(--bg-primary-hover)] text-[color:var(--secondary)] font-bold'
                  : 'text-[color:var(--bg-primary)] hover:bg-[color:var(--bg-primary-hover)] hover:text-[color:var(--secondary)]'
              }`}
              onClick={() => {
                router.push('/admin/support');
                onClose();
              }}
            >
              <AiFillCustomerService />
              <span>Customer Support</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileSidebar;
