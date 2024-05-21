import BlogCard from "./blog-card/BlogCard";

const AllBlogs = ({ allBlogs }) => {

    return (
        <div>
            <div className="bg-gray-200">
                <div className="max-w-6xl mx-auto py-5">
                    <h1 className='text-5xl font-extrabold my-5'>Top Blogs</h1>
                </div>
            </div>
            <div className="max-w-6xl my-10 mx-5 xl:mx-auto">
                <div className="block lg:flex gap-5">
                    <div className="grid grid-cols-1 gap-4 max-w-full lg:max-w-[80%]">
                        {allBlogs && allBlogs.map(blog => <BlogCard key={blog._id} blog={blog} />)}
                    </div>
                    <div>
                        <div>
                            <h3>Recent Posts</h3>
                            <h2>Blog</h2>
                            <h2>Blog</h2>
                            <h2>Blog</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;