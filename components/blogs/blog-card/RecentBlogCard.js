import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const RecentBlogCard = ({recentblogs}) => {

    return (
        <div>
            <div>
            <Link href='/'>
                <div className="group md:flex justify-center items-center gap-5">
                    <div className="overflow-hidden rounded-3xl max-w-xs lg:max-w-[17rem]">
                        <Image
                            src={recentblogs.thumbnail}
                            width={100}
                            height={500}
                            alt="Blog Post"
                            className="object-cover shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                    </div>
                    <div className='mt-4 border-[1px] border-gray-200 p-4 rounded-lg w-full lg:w-[80%] group-hover:shadow-xl transition-all delay-100'>
                        <Badge>{recentblogs?.category}</Badge>
                        <h2 className="text-black text-base group-hover:underline transition duration-250 ease-in-out">
                          {recentblogs?.title}
                        </h2>
                       

                    </div>
                </div>
            </Link>
            </div>
        </div>
    );
};

export default RecentBlogCard;