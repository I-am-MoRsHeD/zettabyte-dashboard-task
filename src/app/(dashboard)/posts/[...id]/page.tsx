'use client'
import { useSinglePost } from '@/hooks/useSinglePost';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

const SinglePost = () => {
    const { id } = useParams();
    const { data, loading, error } = useSinglePost(Number(id));

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-gray-500 animate-pulse">Loading post...</p>
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
        <div className="p-8 flex justify-center">
            <motion.div
                className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    {data?.title}
                </h1>

                <p className="text-gray-600 leading-relaxed">{data?.body}</p>

                <div className="mt-6 text-sm text-gray-400">Post ID: #{id}</div>
            </motion.div>
        </div>
    );
};

export default SinglePost;