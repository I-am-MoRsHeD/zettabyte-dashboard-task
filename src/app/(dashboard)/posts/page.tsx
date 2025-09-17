'use client'
import { usePosts } from '@/hooks/usePosts';
import React from 'react';
import PostCard from './components/PostCard';
import { motion } from 'framer-motion';

const PostPage = () => {
    const { data: posts, loading, error } = usePosts();

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    );
};

export default PostPage;