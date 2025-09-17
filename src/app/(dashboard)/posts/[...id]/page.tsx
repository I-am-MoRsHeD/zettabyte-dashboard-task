'use client'
import { useParams } from 'next/navigation';
import React from 'react';

const SinglePost = () => {
    const { id } = useParams();

    return (
        <div>
            this is single post page {id}
        </div>
    );
};

export default SinglePost;