import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {

    return (
        <div>
            <Link href='/'>
                <div className="group md:flex justify-center items-center gap-5">
                    <div className="overflow-hidden rounded-3xl lg:max-w-[17rem]">
                        <Image
                            src={blog.thumbnail}
                            width={500}
                            height={500}
                            alt="Blog Post"
                            className="w-full object-cover shadow-lg rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                    </div>
                    <div className='mt-4 border-[1px] border-gray-200 p-5 rounded-lg w-full lg:w-[80%] group-hover:shadow-xl transition-all delay-100'>
                        <span className=" text-black text-sm font-semibold bg-gray-600 px-2 py-1 rounded-md w-max">
                            Label
                        </span>
                        <h2 className="text-black text-2xl mt-2 group-hover:underline transition duration-250 ease-in-out">
                          {blog?.title}
                        </h2>
                        <p className="text-base text-gray-900 my-4">{blog?.summary}</p>
                        <div className="lg:flex justify-between">
                            <Button className='rounded-2xl mb-4'>Read More...</Button>
                        <div className="flex">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="ml-5">
                                <p className=" text-xs text-gray-400">Author</p>
                                <p className="text-black"><b>{blog?.author}</b></p>
                            </span>
                        </div>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;