'use client'
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import MobileHeader from '@/components/Layout/MobileHeader';
import MobileSidebar from '@/components/Layout/MobileSidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar className="hidden lg:block fixed top-0 left-0 h-full shadow-md" />
      <div className="flex-1 flex flex-col ml-0 lg:ml-64">
        <Header className="hidden lg:flex top-0 left-64 right-0 h-20 bg-white shadow-md" />
        <MobileSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        <MobileHeader onMenuToggle={toggleSidebar} />
        <main className="flex-1 mt-20 lg:mt-0 p-2 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
