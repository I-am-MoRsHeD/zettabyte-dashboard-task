import Link from "next/link";
import React from "react";

export interface PostCardProps {
    id: number | string;
    title: string;
    body: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body }) => {
    return (
        <Link
            href={`/posts/${id}`}
            className="block"
            aria-label={`Open post ${title}`}
        >
            <div
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col"
            >
                <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
                    {title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-3 flex-1">
                    {body}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-orange-600">
                        Read more →
                    </span>
                    <span className="text-xs text-gray-400">#{id}</span>
                </div>
            </div>
        </Link>
    );
};

export default PostCard;
