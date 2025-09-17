import { useSidebar } from '@/context/SidebarContext';
import { PanelLeftOpen } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

    return (
        <button className='p-4 cursor-pointer'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
            <PanelLeftOpen />
        </button>
    );
};

export default Navbar;