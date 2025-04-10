"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const ProgramCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col justify-center items-center w-full px-4">
        <h2 className="text-4xl font-bold text-green-600 mb-4 text-center">Our Programs</h2>
      <Carousel plugins={[plugin.current]} className="w-full max-w-6xl">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 12 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 sm:basis-full md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="relative flex aspect-square items-center justify-center p-4">
                    <Image
                      src={`/images/our-program/${index + 1}.png`}
                      alt={`Program ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProgramCarousel;
