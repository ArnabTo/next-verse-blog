import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const LadingSection = () => {
    return (
        <div className=" -mt-20 relative z-10 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-[#1C1C1C]">
                <div className="  text-white p-10 flex justify-center items-center">
                    <div className="mt-40 mb-12 lg:max-w-[90%] lg:ml-auto">
                        <p className="my-3">Newest Blog</p>
                        <h2 className="text-3xl font-bold my-4 max-w-[70%]">The Art of Home Transformation</h2>
                        <p className="text-base text-gray-400 my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus accusamus at, tempora eos dignissimos sapiente aliquid dolores culpa in necessitatibus atque ut perspiciatis et fuga suscipit fugit accusantium, ipsam iure!</p>
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
                    </div>
                </div>
                <div className="h-full bg-[url('https://i.ibb.co/QFGLQST/pexels-fotoaibe-1643383.jpg')] bg-cover bg-fixed min-h-[40vh] lg:min-h-screen">
                    {/* <Image src='https://i.ibb.co/QFGLQST/pexels-fotoaibe-1643383.jpg' width={1000} height={1000} className="h-full object-cover" /> */}
                </div>
            </div>
        </div>
    );
};

export default LadingSection;