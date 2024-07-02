'use client';

import { useState, useEffect } from 'react';
import Card from './Card';
import { fetchPosts } from '@/service/api';
import { Button } from '../../ui/button';
import Link from 'next/link';
import PaginationList from '../Pagination';
import { Post } from '@/types';

const ListBlog = () => {
    const [data, setData] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [hasNextPage, setHasNextPage] = useState<boolean>(true);
    const pageSize = 6;

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            try {
                const response = await fetchPosts(page);
                if (response.data.length < pageSize) {
                    setHasNextPage(false);
                } else {
                    setHasNextPage(true);
                }
                setData(response.data.slice(0, pageSize));
            } catch (err) {
                setError('Failed to load');
            } finally {
                setLoading(false);
            }
        };

        getPosts();
    }, [page]);

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
                {window.location.pathname === '/bloglist' && (
                    <div className="flex justify-center mt-5">
                        <PaginationList currentPage={page} onPageChange={setPage} hasNextPage={hasNextPage} />
                    </div>
                )}
                {window.location.pathname === '/' && (
                    <div className="mt-5">
                        <Button
                            size='lg'
                            asChild
                            className="bg-transparent text-black border-[1px]
               border-black hover:bg-black hover:text-white
               rounded-full w-full sm:w-fit"
                        >
                            <Link href="/bloglist">
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
