"use client";

import React, { useState, useEffect } from 'react';
import { fetchComments, fetchPost } from '@/service/api';
import { Comment, Post } from '@/types';
import { Textarea } from '@/components/ui/textarea';
import CommentCollection from '@/components/shared/Bloglist/CommentCollection';
import { DialogReply } from '@/components/shared/Bloglist/DialogReply';

const DetailBlog = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const getPostData = async () => {
    try {
      const postResponse = await fetchPost(id);
      const commentsResponse = await fetchComments(id);
      setPost(postResponse.data);
      setComments(commentsResponse.data);
    } catch (err) {
      setError('Failed to load');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, [id]);

  if (loading) return <div className='wrapper'>Loading...</div>;
  if (error) return <div className='wrapper'>{error}</div>;

  return (
    <section className='wrapper'>
      {post && (
        <div className='w-full md:w-[80%] lg:w-1/2 mx-auto text-left'>
          <h1 className='text-[30px] md:text-[50px] font-bold'>{post.title}</h1>
          <p className='text-base md:text-lg mt-10 font-medium'>{post.body}</p>
        </div>
      )}
      <div className='ww-full md:w-[80%] lg:w-1/2 mx-auto text-left mt-20'>
        <h2 className="text-lg lg:text-2xl font-bold">Comments</h2>
        <Textarea placeholder="Write your comment here" className='mt-4 mb-10' />
        {comments?.map((comment: any) => (
          <CommentCollection
            key={comment.id}
            name={comment.name}
            body={comment.body}
            setOpen={setOpen}
          />
        ))}
      </div>
      <DialogReply
        open={open}
        setOpen={setOpen}
      />
    </section>
  );
};

export default DetailBlog;
