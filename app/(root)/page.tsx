'use client';

import ListBlog from "@/components/shared/Bloglist/ListBlog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const listBlogRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (listBlogRef.current) {
      listBlogRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="bg-[#F6F8FD]">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Welcome to Our Inspiring Blog
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Dive into a world of knowledge and inspiration. Our blog offers
              insightful articles, thought-provoking discussions, and the latest trends.
              Join our community and explore topics that ignite your curiosity and passion.
            </p>
            <Button
              size='lg'
              asChild
              className="bg-transparent text-black border-[1px]
               border-black hover:bg-black hover:text-white
               rounded-full w-full sm:w-fit"
              onClick={handleScroll}
            >
              <span>Explore Blog</span>
            </Button>
          </div>
          <div className="justify-end md:flex hidden">
            <Image
              src='/assets/person_home.svg'
              alt="Hero Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section ref={listBlogRef} className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">List Blog</h2>
        <ListBlog />
      </section>
    </>
  );
}
