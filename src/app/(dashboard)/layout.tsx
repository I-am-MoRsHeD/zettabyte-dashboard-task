import React from 'react';

interface DashboardLayoutProps {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className='grid grid-cols-12 h-screen'>
            <div className='col-span-2 bg-gray-100 p-4'>
                Sidebar
            </div>
            <div className='col-span-10 p-4'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;