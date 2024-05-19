import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';

const TopBlogs = () => {
    return (
        <div className='max-w-7xl mx-auto mb-10'>
            <div>
                <h1 className='text-5xl font-extrabold my-5'>Top Blogs</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div>
                        {/* <Link href='/'>
                            <div className="group">
                                <div className="overflow-hidden rounded-lg">
                                    <Image
                                        src="https://i.ibb.co/DgYx2Mb/herobg-1.png"
                                        width={1000}
                                        height={500}
                                        alt="Blog Post"
                                        className="object-cover shadow-lg rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <div className=" mt-4">
                                    <span className=" text-black text-sm font-semibold bg-gray-600 px-2 py-1 rounded-md w-max">
                                        Label
                                    </span>
                                    <h2 className="text-black text-2xl mt-2 group-hover:underline transition duration-250 ease-in-out">
                                        Beauty of Iphone in the market of all phone
                                    </h2>
                                    <p className="text-base text-gray-900 my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus accusamus at, tempora eos dignissimos sapiente aliquid dolores culpa in necessitatibus atque ut perspiciatis et fuga suscipit fugit accusantium, ipsam iure!</p>
                                </div>
                            </div>
                        </Link> */}
                              <Link href='/'>
                            <div className="group">
                                <div className="overflow-hidden rounded-3xl w-full">
                                    <Image
                                        src="https://i.ibb.co/DgYx2Mb/herobg-1.png"
                                        width={500}
                                        height={500}
                                        alt="Blog Post"
                                        className="w-full object-cover shadow-lg rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <div className='mt-4'>
                                    <span className=" text-black text-sm font-semibold bg-gray-600 px-2 py-1 rounded-md w-max">
                                        Label
                                    </span>
                                    <h2 className="text-black text-2xl mt-2 group-hover:underline transition duration-250 ease-in-out">
                                        Beauty of Iphone in the market of all phone
                                    </h2>
                                    <p className="text-base text-gray-900 my-4 line-clamp-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus accusamus at, tempora eos dignissimos sapiente aliquid dolores culpa in necessitatibus atque ut perspiciatis et fuga suscipit fugit accusantium, ipsam iure!</p>
                                    <Button className='rounded-2xl mb-4'>Read More...</Button>
                                    <div className="flex">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <span className="ml-5">
                                            <p className=" text-xs text-gray-400">Author</p>
                                            <p className="text-black"><b>Elon Musk</b></p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        <Link href='/'>
                            <div className="group flex gap-5 h-full">
                                <div className="overflow-hidden rounded-3xl w-full h-full">
                                    <Image
                                        src="https://i.ibb.co/DgYx2Mb/herobg-1.png"
                                        width={500}
                                        height={500}
                                        alt="Blog Post"
                                        className=" h-full object-cover shadow-lg rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <div className="max-w-[50%]">
                                    <span className=" text-black text-sm font-semibold bg-gray-600 px-2 py-1 rounded-md w-max">
                                        Label
                                    </span>
                                    <h2 className="text-black text-2xl mt-2 group-hover:underline transition duration-250 ease-in-out">
                                        Beauty of Iphone in the market of all phone
                                    </h2>
                                    <p className="text-base text-gray-900 my-4 line-clamp-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus accusamus at, tempora eos dignissimos sapiente aliquid dolores culpa in necessitatibus atque ut perspiciatis et fuga suscipit fugit accusantium, ipsam iure!</p>
                                    <Button className='rounded-2xl mb-4'>Read More...</Button>
                                    <div className="flex">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <span className="ml-5">
                                            <p className=" text-xs text-gray-400">Author</p>
                                            <p className="text-black"><b>Elon Musk</b></p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className="group flex gap-5 h-full">
                                <div className="overflow-hidden rounded-3xl w-full h-full">
                                    <Image
                                        src="https://i.ibb.co/DgYx2Mb/herobg-1.png"
                                        width={500}
                                        height={500}
                                        alt="Blog Post"
                                        className=" h-full object-cover shadow-lg rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <div className="max-w-[50%]">
                                    <span className=" text-black text-sm font-semibold bg-gray-600 px-2 py-1 rounded-md w-max">
                                        Label
                                    </span>
                                    <h2 className="text-black text-2xl mt-2 group-hover:underline transition duration-250 ease-in-out">
                                        Beauty of Iphone in the market of all phone
                                    </h2>
                                    <p className="text-base text-gray-900 my-4 line-clamp-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus accusamus at, tempora eos dignissimos sapiente aliquid dolores culpa in necessitatibus atque ut perspiciatis et fuga suscipit fugit accusantium, ipsam iure!</p>
                                    <Button className='rounded-2xl mb-4'>Read More...</Button>
                                    <div className="flex">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <span className="ml-5">
                                            <p className=" text-xs text-gray-400">Author</p>
                                            <p className="text-black"><b>Elon Musk</b></p>
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