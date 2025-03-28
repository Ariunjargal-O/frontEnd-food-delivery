"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const Offer = () => {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="w-full ">
      {isMobile && (
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img src="/img-home.png" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-3 hover:bg-red-500" />
          <CarouselNext className="absolute right-3 hover:bg-red-500" />
        </Carousel>
      )}

      {!isMobile && (
        <div>
          <Carousel
            className="w-screen"
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
          >
            <CarouselContent className="">
              <CarouselItem className="">
                <img src="/img-home.png" />
              </CarouselItem>
              <CarouselItem>
                <img src="/img-home.png" />
              </CarouselItem>
              <CarouselItem>
                <img src="/img-home.png" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </div>
  );
};

{
  /* <Carousel
className="w-full max-w-full"
opts={{ loop: true }}
plugins={[
  Autoplay({
    delay: 2500,
  }),
]}
>
<CarouselContent className="position">
  <CarouselItem className="">
    <img src="/img-home.png" />
  </CarouselItem>
  <CarouselItem>
    <img src="/img-home.png" />
  </CarouselItem>
  <CarouselItem>
    <img src="/img-home.png" />
  </CarouselItem>
</CarouselContent>
<div>
  <CarouselPrevious />
  <CarouselNext />
</div>
</Carousel> */
}
