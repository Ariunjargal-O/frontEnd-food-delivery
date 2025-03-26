"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "./ui/button";

export const CategoriesList = () => {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <div>
      {isMobile && (
        <div>
          <div>
            <h2 className="font-semibold text-xl leading-9 pt-(--spacing-4) px-(--spacing-7)">
              Categories
            </h2>
          
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-full"
            >
              <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3  mx-(--spacing-8) flex gap-5 pt-(--spacing-2)"
                  >
                    <Link href={`#`}>
                      <Badge
                        className="text-sm font-normal hover:bg-red-500 rounded-2xl"
                        variant="outline"
                      >
                        Badge
                      </Badge>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      )}

      {!isMobile && (
        <div>
          <h2 className="font-semibold text-2xl leading-9 pt-(--spacing-8) px-(--spacing-10)">
            Categories
          </h2>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full min-w-sm"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 my-(--spacing-2) mx-(--spacing-12) flex gap-5 pt-(--spacing-2)"
                >
                  <Link href={`#`}>
                    <Badge
                      className="text-base font-normal hover:bg-red-500 rounded-2xl"
                      variant="outline"
                    >
                      Badge
                    </Badge>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </div>
  );
};
