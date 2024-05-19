import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../ui/carousel";
import { CardHeader, CardContent, CardFooter, Card, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
const HeroCarousel = () => {
    return (
        <div>
            <h2 className='text-4xl font-extrabold my-4'>On Trending.</h2>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/6 xl:basis-1/7">
                        <Card>
                            <Image src='https://i.ibb.co/MhSjbsv/herobg.jpg' width={500} height={500} className=' rounded-t-lg' />
                            <p className=' text-black text-2xl font-extrabold text-center p-4'>Technology</p>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/6 xl:basis-1/7">
                        <Card>
                            <Image src='https://i.ibb.co/MhSjbsv/herobg.jpg' width={500} height={500} className=' rounded-t-lg' />
                            <p className=' text-black text-2xl font-extrabold text-center p-4'>Technology</p>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/6 xl:basis-1/7">
                        <Card>
                            <Image src='https://i.ibb.co/MhSjbsv/herobg.jpg' width={500} height={500} className=' rounded-t-lg' />
                            <p className=' text-black text-2xl font-extrabold text-center p-4'>Technology</p>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/6 xl:basis-1/7">
                        <Card>
                            <Image src='https://i.ibb.co/MhSjbsv/herobg.jpg' width={500} height={500} className=' rounded-t-lg' />
                            <p className=' text-black text-2xl font-extrabold text-center p-4'>Technology</p>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/6 xl:basis-1/7">
                        <Card>
                            <Image src='https://i.ibb.co/MhSjbsv/herobg.jpg' width={500} height={500} className=' rounded-t-lg' />
                            <p className=' text-black text-2xl font-extrabold text-center p-4'>Technology</p>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/6 xl:basis-1/7">
                        <Card>
                            <Image src='https://i.ibb.co/MhSjbsv/herobg.jpg' width={500} height={500} className=' rounded-t-lg' />
                            <p className=' text-black text-2xl font-extrabold text-center p-4'>Technology</p>
                        </Card>
                    </CarouselItem>
    
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default HeroCarousel;