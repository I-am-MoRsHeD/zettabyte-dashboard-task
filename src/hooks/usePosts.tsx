/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPost } from "@/types";
import { useEffect, useState } from "react";

export const usePosts = () => {
    const [data, setData] = useState<IPost[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const res = await fetch("https://jsonplaceholder.typicode.com/posts");

                const json = await res.json();
                setData(json);
            } catch (err: any) {
                setError("Failed to fetch posts");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
