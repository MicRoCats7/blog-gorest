'use client';

import React, { useState, useEffect } from 'react';
import Card from './Card';
import { fetchPosts } from '@/service/api';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import Link from 'next/link';
import Pagination from './Pagination';

const ListBlog = () => {
    const router = window.location.pathname;
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const [page, setPage] = useState<number>(1);
    const pageSize = 6;

    useEffect(() => {
        const getPosts = async () => {
            try {
                let response;
                if (router === '/') {
                    response = await fetchPosts(1);
                    setData(response.data.slice(0, pageSize));
                } else {
                    response = await fetchPosts(page);
                    setData(response.data);
                }
            } catch (err) {
                setError('Failed to load');
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, [page, router]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <div className="flex flex-col items-center gap-10">
                <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                    {data.map((post: any) => (
                        <li key={post.id} className="flex justify-center">
                            <Card post={post} />
                        </li>
                    ))}
                </ul>

                {router !== '/' && (
                    <div className="flex justify-center mt-5">
                        <Pagination />
                    </div>
                )}
                {router === '/' && (
                    <div className="mt-5">
                        <Button
                            size='lg'
                            asChild
                            className="bg-transparent text-black border-[1px]
               border-black hover:bg-black hover:text-white
               rounded-full w-full sm:w-fit"
                        >
                            <Link href="#listblog">
                                See more blogs
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
            {data.length === 0 && (
                <div className="flex-center wrapper min-h-[150px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
                    <h3 className="p-bold-20 md:h5-bold">No posts found</h3>
                    <p className="p-regular-14">There are no posts to display.</p>
                </div>
            )}
        </>
    );
};

export default ListBlog;
