'use client'
import { usePosts } from '@/hooks/usePosts';
import React from 'react';
import PostCard from './components/PostCard';
import { motion } from 'framer-motion';

const PostPage = () => {
    const { data: posts, loading, error } = usePosts();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-500 animate-pulse">Loading posts...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div>
            <motion.h1
                className="text-3xl font-bold text-gray-800 my-5"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                All posts
            </motion.h1>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {posts?.map((post, i) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.35 }}
                    >
                        <PostCard id={post.id} title={post.title} body={post.body} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PostPage;