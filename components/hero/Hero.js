import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="lg:max-w-[90%] xl:max-w-[80%] mx-auto">
            <div className="my-16 mx-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <Link href='/'>
                        <div className="relative w-full h-full overflow-hidden rounded-lg  group">
                            <div className="h-full transform transition-transform duration-500 ease-in-out group-hover:scale-110">
                                <Image
                                    src="https://i.ibb.co/DgYx2Mb/herobg-1.png"
                                    width={800}
                                    height={800}
                                    alt="Blog Post"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="relative -top-28">
                            <span className="mx-4 text-white text-sm font-semibold bg-blue-600 px-2 py-1 rounded-md w-max">
                                Label
                            </span>
                            <h2 className="blog-title text-white text-2xl font-extrabold mt-2 px-4">
                                Beauty of Iphone in the market of all phones
                            </h2>
                        </div>
                    </Link>
                    <div className="grid md:grid-cols-2 gap-3">
                        <Link href='/'>
                            <div className="group">
                                <div className="overflow-hidden rounded-lg">
                                    <Image
                                        src="https://i.ibb.co/DgYx2Mb/herobg-1.png"
                                        width={500}
                                        height={500}
                                        alt="Blog Post"
                                        className="object-cover shadow-lg rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <div className=" mt-4">
                                    <span className=" text-white text-sm font-semibold bg-gray-600 px-2 py-1 rounded-md w-max">
                                        Label
                                    </span>
                                    <h2 className="text-black text-2xl mt-2">
                                        Beauty of Iphone in the market of all phones
                                    </h2>
                                </div>
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className="group">
                                <div className="overflow-hidden rounded-lg">
                                    <Image
                                        src="https://i.ibb.co/Jv1RYQ5/demo-image-12-285x190.jpg"
                                        width={500}
                                        height={500}
                                        alt="Blog Post"
                                        className="object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <div className=" mt-4">
                                    <span className=" text-white text-sm font-semibold bg-blue-600 px-2 py-1 rounded-md w-max">
                                        Label
                                    </span>
                                    <h2 className="text-black text-2xl mt-2">
                                        Beauty of Iphone in the market of all phones
                                    </h2>
                                </div>
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className="group">
                                <div className="overflow-hidden rounded-lg">
                                    <Image
                                        src="https://i.ibb.co/MhSjbsv/herobg.jpg"
                                        width={500}
                                        height={500}
                                        alt="Blog Post"
                                        className="object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <div className=" mt-4">
                                    <span className=" text-white text-sm font-semibold bg-blue-600 px-2 py-1 rounded-md w-max">
                                        Label
                                    </span>
                                    <h2 className="text-black text-2xl mt-2">
                                        Beauty of Iphone in the market of all phones
                                    </h2>
                                </div>
                            </div>
                        </Link>
                        <Link href='/'>
                            <div className="group">
                                <div className="overflow-hidden rounded-lg">
                                    <Image
                                        src="https://i.ibb.co/DgYx2Mb/herobg-1.png"
                                        width={500}
                                        height={500}
                                        alt="Blog Post"
                                        className="object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />
                                </div>
                                <div className=" mt-4">
                                    <span className=" text-white text-sm font-semibold bg-blue-600 px-2 py-1 rounded-md w-max">
                                        Label
                                    </span>
                                    <h2 className="text-black text-2xl mt-2">
                                        Beauty of Iphone in the market of all phones
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Hero;