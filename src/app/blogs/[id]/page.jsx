"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { blogsData } from '@/components/blogs/blogs';

// Icon components
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V4C14 2.89543 13.1046 2 12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 1V3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 1V3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 5H14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3C4.66667 3 2.07333 5.07333 1 8C2.07333 10.9267 4.66667 13 8 13C11.3333 13 13.9267 10.9267 15 8C13.9267 5.07333 11.3333 3 8 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 15L7.5 10L12.5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function BlogDetail() {
  const params = useParams();
  const router = useRouter();
  const blogId = parseInt(params.id);
  
  const blog = blogsData.find(b => b.id === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-futura text-4xl font-bold text-white mb-4">Blog Not Found</h1>
          <button
            onClick={() => router.push('/blogs')}
            className="px-6 py-3 rounded-lg bg-[#3A7BFF] text-white font-futura hover:bg-[#3A7BFF]/80 transition-colors"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  mt-8 bg-black">
      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-6 pt-8 pb-4">
        {/* <button
          onClick={() => router.push('/blogs')}
          className="flex items-center gap-2 text-white/70 hover:text-white font-futura transition-colors"
        >
          <ArrowLeftIcon />
          <span>Back to Blogs</span>
        </button> */}
      </div>

      {/* Blog Image - Full Width */}
      <div className="relative w-full overflow-hidden mb-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto"
          onError={(e) => {
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='500'%3E%3Crect fill='%23333' width='900' height='500'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='24' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EBlog Image%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>

      {/* Blog Content */}
      <article className="max-w-[900px] mx-auto px-6 py-8">
        {/* Blog Header */}
        <div className="mb-8">
          {/* Category Badge */}
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-lg border border-[#3A7BFF] bg-[#3A7BFF]/10 backdrop-blur-sm">
              <span className="font-futura text-sm font-medium text-white">
                {blog.category}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-futura text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Metadata */}
          <div className="flex items-center gap-6 text-white/60 font-futura text-sm">
            <div className="flex items-center gap-2">
              <CalendarIcon />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <EyeIcon />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-invert max-w-none">
          <div className="font-futura text-lg text-white/90 leading-relaxed whitespace-pre-line">
            {blog.description.split('\n').map((paragraph, index) => {
              // Skip empty paragraphs
              if (!paragraph.trim()) return null;
              
              // Check if paragraph is a heading (starts with specific patterns)
              if (paragraph.match(/^(Why|What|How|When|Where|Who|The|Introducing|Key|Features|Benefits|Conclusion|Final|Getting|FAQs)/i) && paragraph.length < 100) {
                return (
                  <h2 key={index} className="font-futura text-2xl font-bold text-white mt-8 mb-4">
                    {paragraph}
                  </h2>
                );
              }
              
              // Check if it's a numbered list item
              if (paragraph.match(/^\d+\./)) {
                return (
                  <div key={index} className="ml-6 mb-4">
                    <p className="font-futura text-lg text-white/90 leading-relaxed">
                      {paragraph}
                    </p>
                  </div>
                );
              }
              
              return (
                <p key={index} className="font-futura text-lg text-white/90 leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Back to Blogs Button */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <button
            onClick={() => router.push('/blogs')}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3A7BFF] text-white font-futura hover:bg-[#3A7BFF]/80 transition-colors"
          >
            <ArrowLeftIcon />
            <span>Back to All Blogs</span>
          </button>
        </div>
      </article>
    </div>
  );
}

export default BlogDetail;

