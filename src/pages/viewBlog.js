import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function ViewBlogPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const allBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        setBlogs(allBlogs);
    }, []);

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4 h-screen overflow-y-auto">
                <h1 className="text-2xl font-bold mb-4 text-red-600 underline">All Blogs</h1>
                {blogs.length === 0 ? (
                    <p className='text-white'>No blogs found.</p>
                ) : (
                    <ul>
                        {blogs.map((blog, index) => (
                            <li key={index} className='border-4 border-white my-4 p-4'>
                                <Link to={`/view/${index}`} target="_blank" rel="noopener noreferrer" className="text-red-600 font-bold hover:underline">
                                    <h2 className="text-xl my-4 text-red-600 font-bold hover:underline hover:cursor-pointer">{blog.title}</h2>
                                </Link>
                                <div dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 200) }} style={{ color: 'white', marginTop: '4px', marginBottom: '4px' }} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <Footer />
        </>
    );
}
