'use client'
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const LadingSection = () => {

    const [blogs, setBlogs] = useState([]);
    const [index, setIndex] = useState(0);


    useEffect(() => {

        axios.get('http://localhost:3000/api/get-blogs')
            .then(res => setBlogs(res.data.data))
            .catch(err => console.error(err))
    }, [])

    const newEstBlog = blogs.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

    useEffect(()=>{
        setTimeout(()=>{
            if (index > 3) {
                setIndex(0)
            }
            else {
                setIndex(index + 1)
            }
        }, 2000)
    })


    return (
        // <div className="-mt-20 relative z-10 mb-20 bg-black">
        //     {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#1C1C1C]">
        //         <div className=" text-white p-10 flex justify-center items-center">
        //             <div>
        //                 <div className="mt-40 mb-12 lg:max-w-[90%] lg:ml-auto">
        //                     <p className="my-3">Newest Blog</p>
        //                     {newEstBlog.length && <>
        //                         <h2 className="text-3xl font-bold my-4 max-w-[70%]">{newEstBlog[index].title || <Skeleton />}</h2>
        //                         <p className="text-base text-gray-400 my-4">{newEstBlog[index].body || <Skeleton count={2} />}</p>
        //                         <Button className="bg-white text-black rounded-2xl my-4 hover:bg-slate-500 hover:text-white mb-16 z-10">Read More</Button>
        //                         <div className="flex">
        //                             <Avatar >
        //                                 <AvatarImage src="https://github.com/shadcn.png" />
        //                                 <AvatarFallback>CN</AvatarFallback>
        //                             </Avatar>
        //                             <span className="ml-5">
        //                                 <p className=" text-xs text-gray-400">Author</p>
        //                                 <p className="text-white"><b>Elon Musk</b></p>
        //                             </span>
        //                         </div>
        //                     </>}
        //                 </div>
        //                 <div  className="flex justify-end">
        //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"} onClick={handleNext} className=" cursor-pointer">
        //                         <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //                     </svg>
        //                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"} onClick={handleNext} className=" cursor-pointer">
        //                         <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //                     </svg>
        //                 </div>
        //             </div>
        //         </div>
        //         <div
        //             className="h-full bg-cover  min-h-[40vh]" style={{ backgroundImage: `url(${newEstBlog[index]?.thumbnail || 'https://i.ibb.co/QFGLQST/pexels-fotoaibe-1643383.jpg'})` }}>
        //         </div>
        //     </div> */}
        //     <Carousel
        //     plugins={[
        //         Autoplay({
        //             delay:1000,
        //         })
        //     ]}
        //     >
        //         <CarouselContent>

        //             <CarouselItem>
        //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#1C1C1C]">
        //                     <div className=" text-white p-10 flex justify-center items-center">
        //                         <div>
        //                             <div className="mt-40 mb-12 lg:max-w-[90%] lg:ml-auto">
        //                                 <p className="my-3">Newest Blog</p>
        //                                 {newEstBlog.length && <>
        //                                     <h2 className="text-3xl font-bold my-4 max-w-[70%]">{newEstBlog[index].title || <Skeleton />}</h2>
        //                                     <p className="text-base text-gray-400 my-4">{newEstBlog[index].body || <Skeleton count={2} />}</p>
        //                                     <Button className="bg-white text-black rounded-2xl my-4 hover:bg-slate-500 hover:text-white mb-16 z-10">Read More</Button>
        //                                     <div className="flex">
        //                                         <Avatar >
        //                                             <AvatarImage src="https://github.com/shadcn.png" />
        //                                             <AvatarFallback>CN</AvatarFallback>
        //                                         </Avatar>
        //                                         <span className="ml-5">
        //                                             <p className=" text-xs text-gray-400">Author</p>
        //                                             <p className="text-white"><b>Elon Musk</b></p>
        //                                         </span>
        //                                     </div>
        //                                 </>}
        //                             </div>
        //                             <div className="flex justify-end">
        //                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"} onClick={handleNext} className=" cursor-pointer">
        //                                     <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //                                 </svg>
        //                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"} onClick={handleNext} className=" cursor-pointer">
        //                                     <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //                                 </svg>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div
        //                         className="h-full bg-cover  min-h-[40vh]" style={{ backgroundImage: `url(${newEstBlog[index]?.thumbnail || 'https://i.ibb.co/QFGLQST/pexels-fotoaibe-1643383.jpg'})` }}>
        //                     </div>
        //                 </div>
        //             </CarouselItem>

        //             <CarouselItem>
        //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#1C1C1C]">
        //                     <div className=" text-white p-10 flex justify-center items-center">
        //                         <div>
        //                             <div className="mt-40 mb-12 lg:max-w-[90%] lg:ml-auto">
        //                                 <p className="my-3">Newest Blog</p>
        //                                 {newEstBlog.length && <>
        //                                     <h2 className="text-3xl font-bold my-4 max-w-[70%]">{newEstBlog[index].title || <Skeleton />}</h2>
        //                                     <p className="text-base text-gray-400 my-4">{newEstBlog[index].body || <Skeleton count={2} />}</p>
        //                                     <Button className="bg-white text-black rounded-2xl my-4 hover:bg-slate-500 hover:text-white mb-16 z-10">Read More</Button>
        //                                     <div className="flex">
        //                                         <Avatar >
        //                                             <AvatarImage src="https://github.com/shadcn.png" />
        //                                             <AvatarFallback>CN</AvatarFallback>
        //                                         </Avatar>
        //                                         <span className="ml-5">
        //                                             <p className=" text-xs text-gray-400">Author</p>
        //                                             <p className="text-white"><b>Elon Musk</b></p>
        //                                         </span>
        //                                     </div>
        //                                 </>}
        //                             </div>
        //                             <div className="flex justify-end">
        //                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"} onClick={handleNext} className=" cursor-pointer">
        //                                     <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //                                 </svg>
        //                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"} onClick={handleNext} className=" cursor-pointer">
        //                                     <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //                                 </svg>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div
        //                         className="h-full bg-cover  min-h-[40vh]" style={{ backgroundImage: `url(${newEstBlog[index]?.thumbnail || 'https://i.ibb.co/QFGLQST/pexels-fotoaibe-1643383.jpg'})` }}>
        //                     </div>
        //                 </div>
        //             </CarouselItem>

        //             <CarouselItem>
        //                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#1C1C1C]">
        //                     <div className=" text-white p-10 flex justify-center items-center">
        //                         <div>
        //                             <div className="mt-40 mb-12 lg:max-w-[90%] lg:ml-auto">
        //                                 <p className="my-3">Newest Blog</p>
        //                                 {newEstBlog.length && <>
        //                                     <h2 className="text-3xl font-bold my-4 max-w-[70%]">{newEstBlog[index].title || <Skeleton />}</h2>
        //                                     <p className="text-base text-gray-400 my-4">{newEstBlog[index].body || <Skeleton count={2} />}</p>
        //                                     <Button className="bg-white text-black rounded-2xl my-4 hover:bg-slate-500 hover:text-white mb-16 z-10">Read More</Button>
        //                                     <div className="flex">
        //                                         <Avatar >
        //                                             <AvatarImage src="https://github.com/shadcn.png" />
        //                                             <AvatarFallback>CN</AvatarFallback>
        //                                         </Avatar>
        //                                         <span className="ml-5">
        //                                             <p className=" text-xs text-gray-400">Author</p>
        //                                             <p className="text-white"><b>Elon Musk</b></p>
        //                                         </span>
        //                                     </div>
        //                                 </>}
        //                             </div>
        //                             <div className="flex justify-end">
        //                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"} onClick={handleNext} className=" cursor-pointer">
        //                                     <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //                                 </svg>
        //                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"} onClick={handleNext} className=" cursor-pointer">
        //                                     <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        //                                 </svg>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div
        //                         className="h-full bg-cover  min-h-[40vh]" style={{ backgroundImage: `url(${newEstBlog[index]?.thumbnail || 'https://i.ibb.co/QFGLQST/pexels-fotoaibe-1643383.jpg'})` }}>
        //                     </div>
        //                 </div>
        //             </CarouselItem>

        //         </CarouselContent>

        //     </Carousel>
        // </div>
        <div className="-mt-20 relative z-10 mb-20 bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            })
                        ]}
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <div>
                                    <div className="mt-40 mb-12 lg:max-w-[90%] lg:ml-auto">
                                        <p className="my-3">Newest Blog</p>
                                        {newEstBlog.length && <>
                                            <h2 className="text-3xl font-bold my-4 max-w-[70%]">{newEstBlog[index].title || <Skeleton />}</h2>
                                            <p className="text-base text-gray-400 my-4">{newEstBlog[index].body || <Skeleton count={2} />}</p>
                                            <Button className="bg-white text-black rounded-2xl my-4 hover:bg-slate-500 hover:text-white mb-16 z-10">Read More</Button>
                                            <div className="flex">
                                                <Avatar >
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <span className="ml-5">
                                                    <p className=" text-xs text-gray-400">Author</p>
                                                    <p className="text-white"><b>Elon Musk</b></p>
                                                </span>
                                            </div>
                                        </>}
                                    </div>
                                </div>
                            </CarouselItem>

                            <CarouselItem>
                                <div>
                                    <div className="mt-40 mb-12 lg:max-w-[90%] lg:ml-auto">
                                        <p className="my-3">Newest Blog</p>
                                        {newEstBlog.length && <>
                                            <h2 className="text-3xl font-bold my-4 max-w-[70%]">{newEstBlog[index].title || <Skeleton />}</h2>
                                            <p className="text-base text-gray-400 my-4">{newEstBlog[index].body || <Skeleton count={2} />}</p>
                                            <Button className="bg-white text-black rounded-2xl my-4 hover:bg-slate-500 hover:text-white mb-16 z-10">Read More</Button>
                                            <div className="flex">
                                                <Avatar >
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <span className="ml-5">
                                                    <p className=" text-xs text-gray-400">Author</p>
                                                    <p className="text-white"><b>Elon Musk</b></p>
                                                </span>
                                            </div>
                                        </>}
                                    </div>
                                </div>
                            </CarouselItem>

                        </CarouselContent>

                    </Carousel>
                </div>
                <div>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            })
                        ]}
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <div
                                    className="h-full bg-cover  min-h-[70vh]" style={{ backgroundImage: `url(${newEstBlog[index]?.thumbnail || 'https://i.ibb.co/QFGLQST/pexels-fotoaibe-1643383.jpg'})` }}>
                                </div>
                            </CarouselItem>

                            <CarouselItem>
                                <div
                                    className="h-full bg-cover  min-h-[70vh]" style={{ backgroundImage: `url(${newEstBlog[index]?.thumbnail || 'https://i.ibb.co/QFGLQST/pexels-fotoaibe-1643383.jpg'})` }}>
                                </div>
                            </CarouselItem>

                        </CarouselContent>

                    </Carousel>
                </div>
            </div>
            {/* <Carousel
            plugins={[
                Autoplay({
                    delay:1000,
                })
            ]}
            >
                <CarouselContent>

                    <CarouselItem>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#1C1C1C]">
                            <div className=" text-white p-10 flex justify-center items-center">
                                <div>
                                    <div className="mt-40 mb-12 lg:max-w-[90%] lg:ml-auto">
                                        <p className="my-3">Newest Blog</p>
                                        {newEstBlog.length && <>
                                            <h2 className="text-3xl font-bold my-4 max-w-[70%]">{newEstBlog[index].title || <Skeleton />}</h2>
                                            <p className="text-base text-gray-400 my-4">{newEstBlog[index].body || <Skeleton count={2} />}</p>
                                            <Button className="bg-white text-black rounded-2xl my-4 hover:bg-slate-500 hover:text-white mb-16 z-10">Read More</Button>
                                            <div className="flex">
                                                <Avatar >
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <span className="ml-5">
                                                    <p className=" text-xs text-gray-400">Author</p>
                                                    <p className="text-white"><b>Elon Musk</b></p>
                                                </span>
                                            </div>
                                        </>}
                                    </div>
                                    <div className="flex justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"} onClick={handleNext} className=" cursor-pointer">
                                            <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"} onClick={handleNext} className=" cursor-pointer">
                                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="h-full bg-cover  min-h-[40vh]" style={{ backgroundImage: `url(${newEstBlog[index]?.thumbnail || 'https://i.ibb.co/QFGLQST/pexels-fotoaibe-1643383.jpg'})` }}>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#1C1C1C]">
                            <div className=" text-white p-10 flex justify-center items-center">
                                <div>
                                    <div className="mt-40 mb-12 lg:max-w-[90%] lg:ml-auto">
                                        <p className="my-3">Newest Blog</p>
                                        {newEstBlog.length && <>
                                            <h2 className="text-3xl font-bold my-4 max-w-[70%]">{newEstBlog[index].title || <Skeleton />}</h2>
                                            <p className="text-base text-gray-400 my-4">{newEstBlog[index].body || <Skeleton count={2} />}</p>
                                            <Button className="bg-white text-black rounded-2xl my-4 hover:bg-slate-500 hover:text-white mb-16 z-10">Read More</Button>
                                            <div className="flex">
                                                <Avatar >
                                                    <AvatarImage src="https://github.com/shadcn.png" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <span className="ml-5">
                                                    <p className=" text-xs text-gray-400">Author</p>
                                                    <p className="text-white"><b>Elon Musk</b></p>
                                                </span>
                                            </div>
                                        </>}
                                    </div>
                                    <div className="flex justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"} onClick={handleNext} className=" cursor-pointer">
                                            <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={28} height={28} color={"#fff"} fill={"none"} onClick={handleNext} className=" cursor-pointer">
                                            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="h-full bg-cover  min-h-[40vh]" style={{ backgroundImage: `url(${newEstBlog[index]?.thumbnail || 'https://i.ibb.co/QFGLQST/pexels-fotoaibe-1643383.jpg'})` }}>
                            </div>
                        </div>
                    </CarouselItem>

                </CarouselContent>
                
            </Carousel> */}
        </div>
    );
};

export default LadingSection;