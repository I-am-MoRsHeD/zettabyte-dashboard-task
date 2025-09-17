'use client'
import React from 'react';
import Navbar from './Navbar';
import { useSidebar } from '@/context/SidebarContext';

interface DashboardLayoutProps {
    children: React.ReactNode;
};

const DashboardContent = ({ children }: DashboardLayoutProps) => {
    const { isSidebarOpen } = useSidebar();
    return (
        <div className={`row-span-full transition-all duration-300
         ${isSidebarOpen ? "col-span-10 pl-4" : "col-span-12 px-4"}`}>
            <div className='bg-gray-100 border-b-[2px] border-orange-600 rounded-b-lg h-14 sticky top-0'>
                <Navbar />
            </div>
            <div className=''>
                {children}
            </div>
        </div>
    );
};

export default DashboardContent;