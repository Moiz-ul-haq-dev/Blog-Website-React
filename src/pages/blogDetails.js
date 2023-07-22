import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function BlogDetails({ blog }) {
  console.log(blog);
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-2xl font-bold mb-4 text-red-600 underline">{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} style={{ color: 'white' }} />
      </div>
      <Footer />
    </>
  );
}
