import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogDetails from './blogDetails'

export default function BlogDetailsPage() {
    const [blogs, setBlogs] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const allBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        setBlogs(allBlogs);
    }, []);
    const blog = blogs[id];
    if (blogs.length === 0) {
        return <p>Loading...</p>;
    }


    return (
        <>
            <h1 className="text-2xl font-bold mb-4 text-red-600 underline">Blog Details</h1>
            <div>
                {blog ? <BlogDetails blog={blog} /> : <p>Blog not found.</p>}
            </div>
        </>
    );
}
