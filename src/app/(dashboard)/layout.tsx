import React from 'react';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import { SidebarProvider } from '@/context/SidebarContext';

interface DashboardLayoutProps {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {

    return (
        <SidebarProvider>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar />
                <div className='flex-1 overflow-y-auto'>
                    <DashboardContent>{children}</DashboardContent>
                </div>
            </div>
        </SidebarProvider>
    );
};

export default DashboardLayout;