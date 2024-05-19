import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
const AdsSection = () => {
    return (
        <div className="max-w-4xl mx-auto my-20">
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <Image src='https://i.ibb.co/nfZQ6Pt/White-Minimalist-Corporate-Business-Personal-Profile-Linked-In-Banner.png' width={1000} height={500} className='w-full max-h-[50%] rounded-t-lg' />
                    </CarouselItem>
                    <CarouselItem>
                        <Image src='https://i.ibb.co/4JYGNdV/Grey-Minimalist-Special-Offer-Banner-Landscape.png' width={1000} height={500} className='w-full max-h-[50%] object-cover rounded-t-lg' />
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default AdsSection;