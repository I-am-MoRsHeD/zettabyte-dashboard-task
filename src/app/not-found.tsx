import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
            <div>
                <h1>No route found</h1>
                <Link href="/dashboard">Go to Dashboard</Link>
            </div>
        </div>
    );
};

export default NotFound;