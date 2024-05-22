import Image from "next/image";
import BlogCard from "./blog-card/BlogCard";
import RecentBlogCard from "./blog-card/RecentBlogCard";
import { Separator } from "../ui/separator";

const AllBlogs = ({ allBlogs }) => {

    const recentBlogPosts = allBlogs.sort((a, b) => new Date(b.published_at) - new Date(a.published_at)).slice(0, 3);
    console.log(recentBlogPosts)
    return (
        <div>
            <div className="bg-gray-200">
                <div className="max-w-6xl mx-auto py-5">
                    <h1 className='text-5xl font-extrabold my-5'>Top Blogs</h1>
                </div>
            </div>
            <div className="max-w-6xl my-10 mx-5 xl:mx-auto">
                <div className="block lg:flex gap-5">
                    <div className="grid grid-cols-1 gap-4 max-w-full lg:max-w-[70%]">
                        {allBlogs && allBlogs.map(blog => <BlogCard key={blog._id} blog={blog} />)}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-center mt-5">Recent Posts</h3>
                        <Separator className='my-5'/>
                        <div className="grid grid-cols-1 gap-2 mb-5">
                            {recentBlogPosts && recentBlogPosts.map(recentblogs => <RecentBlogCard key={recentblogs._id} recentblogs={recentblogs} />)}
                        </div>
                        <div>
                            <Image src='https://i.ibb.co/mtbFxL0/ganerate-a-horizontal-ads-banner-of-a-tech-product-y-Gn-Bith-XSWWV1it-YOg-P6y-A-o-Ox9-Vt-Dw-TKSJ5-T2.jpg' width={300} height={300} alt="ads banner" className="mx-auto rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;