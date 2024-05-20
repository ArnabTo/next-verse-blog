'use client';
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from "react";
const AdsSection = () => {

    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )

    return (
        <div className="max-w-4xl mx-auto my-20">
            <Carousel plugins={[plugin.current]} >
                <CarouselContent>
                    <CarouselItem>
                        <Image src='https://i.ibb.co/nfZQ6Pt/White-Minimalist-Corporate-Business-Personal-Profile-Linked-In-Banner.png' width={1000} height={500} className='w-full max-h-[50%] rounded-2xl' alt="ads baner" />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src='https://i.ibb.co/4JYGNdV/Grey-Minimalist-Special-Offer-Banner-Landscape.png' width={1000} height={500} className='w-full max-h-[50%] object-cover rounded-2xl' alt="ads baner"/>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default AdsSection;