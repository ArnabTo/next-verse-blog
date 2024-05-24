import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


const LatestBlogCard = ({ blog }) => {
    return (
        <div>
            <Link href='/'>
                <div className="group flex flex-col justify-center items-center gap-5">
                    <div className="overflow-hidden rounded-3xl">
                        <Image
                            src={blog.thumbnail}
                            width={500}
                            height={500}
                            alt="Blog Post"
                            className="w-full object-cover shadow-lg rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                    </div>
                    <div className='p-5 rounded-lg w-full group-hover:shadow-xl transition-all delay-100'>
                        <Badge>{blog?.category}</Badge>
                        <h2 className="text-black text-2xl font-bold mt-2 group-hover:underline transition duration-250 ease-in-out">
                            {blog?.title}
                        </h2>
                        <p className="text-base text-gray-900 my-4 line-clamp-2">{blog?.summary}</p>
                        <div className="lg:flex flex-col justify-between">
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

export default LatestBlogCard;