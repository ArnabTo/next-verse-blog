import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RecentBlogCard = ({recentblogs}) => {
    console.log(recentblogs)
    return (
        <div>
            <div>
            <Link href='/'>
                <div className="group md:flex justify-center items-center gap-5">
                    <div className="overflow-hidden rounded-3xl max-w-xs lg:max-w-[17rem]">
                        <Image
                            src={recentblogs.thumbnail}
                            width={300}
                            height={500}
                            alt="Blog Post"
                            className="object-cover shadow-lg rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                    </div>
                    <div className='mt-4 border-[1px] border-gray-200 p-4 rounded-lg w-full lg:w-[80%] group-hover:shadow-xl transition-all delay-100'>
                        <span className=" text-black text-sm font-semibold bg-gray-600 px-2 py-1 rounded-md w-max">
                            Label
                        </span>
                        <h2 className="text-black text-base mt-5 mb-5 group-hover:underline transition duration-250 ease-in-out">
                          {recentblogs?.title}
                        </h2>
                        <div className="lg:flex justify-between">
                            <Button className='rounded-2xl mb-4'>Read More...</Button>
                        </div>

                    </div>
                </div>
            </Link>
            </div>
        </div>
    );
};

export default RecentBlogCard;