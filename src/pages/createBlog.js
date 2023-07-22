import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function CreateBlogPage() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSave = () => {
    const newBlog = { title, content };
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const updatedBlogs = [...existingBlogs, newBlog];
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    alert('Blog saved successfully!');
    setTitle('');
    setContent('');
  };

  return (
    <>
      <Navbar />
      <div className="container h-screen mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Create Blog</h1>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={handleTitleChange}
          className="border border-gray-300 px-4 py-2 mb-4 w-full rounded"
        />
        <ReactQuill
          value={content}
          onChange={handleContentChange}
          style={{backgroundColor: 'white'}}
        />

        <button
          className="bg-red-600 text-white px-4 py-2 mt-4 rounded hover:bg-red-800"
          onClick={handleSave}
        >
          Save Blog
        </button>
      </div>
      <Footer />
    </>
  );
}
