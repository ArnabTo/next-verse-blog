'use client'
import axios from "axios";
import BlogCard from "../blogs/blog-card/BlogCard";
import LatestBlogCard from "./LatestBlogCard";
import { useEffect, useState } from "react";

const LatestBlogs = () => {

    const [blogPosts, setBlogPosts] = useState([]);
    
    const [currentPage, setCurretPage] = useState(1);

    useEffect(()=>{
        async function fetchData(){
            const result =await axios.get('http://localhost:3000/api/get-blogs');
            setBlogPosts(result.data.data)
        }
        fetchData()
    },[])
    const blogs = blogPosts.sort((a,b) => new Date(b) - new Date(a));

    const onPageChage=(pageno)=>{
        setCurretPage(pageno)
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {blogs && blogs.map(blog => <LatestBlogCard key={blog._id} blog={blog} />)}
            </div>
        </div>
    );
};

export default LatestBlogs;