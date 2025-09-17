import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
            <div className='space-y-5'>
                <h1 className='text-2xl fon-semibold'>No route found</h1>
                <Link href="/dashboard" className='bg-orange-600 text-white font-semibold p-3 rounded-lg'>Go to Dashboard</Link>
            </div>
        </div>
    );
};

export default NotFound;