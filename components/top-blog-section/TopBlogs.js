import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import axios from 'axios';
import { Badge } from '../ui/badge';

const TopBlogs = async () => {

    const res = await axios.get('http://localhost:3000/api/get-blogs');
    const blogs = res.data.data;

    const topBlogs = blogs.sort((a, b) => b.views - a.views).slice(0, 3);

    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <div>
                <h1 className='text-5xl font-extrabold my-8'>Top Blogs</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='mx-5'>
                        <Link href='/'>
                            <div className="group">
                                <div className="overflow-hidden rounded-3xl w-full">
                                    <Image
                                        src={topBlogs[0].thumbnail}
                                        width={400}
                                        height={500}
                                        alt="Blog Post"
                                        className="w-full max-h-96 object-cover shadow-lg rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <div className='mt-4'>
                                    <Badge>{topBlogs[0].category}</Badge>
                                    <h2 className="text-black text-2xl font-bold mt-2 group-hover:underline transition duration-250 ease-in-out">
                                        {topBlogs[0].title}
                                    </h2>
                                    <p className="text-base text-gray-900 my-4 line-clamp-2">{topBlogs[0].summary}</p>
                                    <Button className='rounded-2xl mb-4'>Read More...</Button>
                                    <div className="flex">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <span className="ml-5">
                                            <p className=" text-xs text-gray-400">Author</p>
                                            <p className="text-black"><b>{topBlogs[0].author}</b></p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='grid grid-cols-1 gap-4 mx-5 lg:mx-0'>
                        <Link href='/'>
                            <div className="group lg:flex gap-5 h-full">
                                <div className="overflow-hidden rounded-3xl w-full lg:h-full">
                                    <Image
                                        src={topBlogs[1].thumbnail}
                                        width={500}
                                        height={500}
                                        alt="Blog Post"
                                        className=" max-h-sm object-cover shadow-lg rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <div className="lg:max-w-[50%]">
                                    <Badge>{topBlogs[1].category}</Badge>
                                    <h2 className="text-black text-2xl font-bold mt-2 group-hover:underline transition duration-250 ease-in-out">
                                        {topBlogs[1].title}
                                    </h2>
                                    <p className="text-base text-gray-900 my-4 line-clamp-3">{topBlogs[1].summary}</p>
                                    <Button className='rounded-2xl mb-4'>Read More...</Button>
                                    <div className="flex">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <span className="ml-5">
                                            <p className=" text-xs text-gray-400">Author</p>
                                            <p className="text-black"><b>{topBlogs[1].author}</b></p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className="group lg:flex gap-5 h-full">
                                <div className="overflow-hidden rounded-3xl w-full lg:h-full">
                                    <Image
                                        src={topBlogs[2].thumbnail}
                                        width={500}
                                        height={500}
                                        alt="Blog Post"
                                        className=" h-full object-cover shadow-lg rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <div className="lg:max-w-[50%]">
                                    <Badge>{topBlogs[2].category}</Badge>
                                    <h2 className="text-black text-2xl font-bold mt-2 group-hover:underline transition duration-250 ease-in-out">
                                        {topBlogs[2].title}
                                    </h2>
                                    <p className="text-base text-gray-900 my-4 line-clamp-3">{topBlogs[2].summary}</p>
                                    <Button className='rounded-2xl mb-4'>Read More...</Button>
                                    <div className="flex">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <span className="ml-5">
                                            <p className=" text-xs text-gray-400">Author</p>
                                            <p className="text-black"><b>{topBlogs[2].author}</b></p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBlogs;