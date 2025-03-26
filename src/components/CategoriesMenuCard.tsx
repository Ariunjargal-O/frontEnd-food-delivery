"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CategoriesMenuCard = () => {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <div>
      {isMobile && (
        <div className="">
          <div className="p-(--spacing-5)">
            <h2 className="font-bold text-2xl mb-(--spacing-8)">Appetizers</h2>
            <div className="flex gap-4">
              <Carousel className="w-full max-w-sm">
                <CarouselContent className="-ml-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card>
                          <CardContent>
                            <img src="/categories-card.png" />
                          </CardContent>
                          <CardHeader>
                            <CardTitle className="flex justify-between">
                              <h3 className="font-semibold text-xl text-red-500 leading-8">
                                Finger food
                              </h3>
                              <p className="font-semibold text-lg leading-7">
                                $12.99
                              </p>
                            </CardTitle>
                            <CardDescription className="text-sm laeding-5 font-normal">
                              Fluffy pancakes stacked with fruits, cream, syrup,
                              and powdered sugar.
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
              </Carousel>
            </div>
          </div>
        </div>
      )}

      {!isMobile && (
        <div>
          <div className="p-(--spacing-5)">
            <h2 className="font-bold text-3xl mb-(--spacing-12)">Appetizers</h2>
            <div className="flex gap-9">
              <Card className="w-fit">
                <CardContent>
                  <img src="/categories-card.png" />
                </CardContent>
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <h3 className="font-semibold text-2xl text-red-500 leading-8">
                      Finger food
                    </h3>
                    <p className="font-semibold text-lg leading-7">$12.99</p>
                  </CardTitle>

                  <CardDescription className="text-sm laeding-5 font-normal">
                    Fluffy pancakes stacked with fruits, cream, syrup, and
                    powdered sugar.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="w-fit">
                <CardContent>
                  <img src="/categories-card.png" />
                </CardContent>
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <h3 className="font-semibold text-2xl text-red-500 leading-8">
                      Finger food
                    </h3>
                    <p className="font-semibold text-lg leading-7">$12.99</p>
                  </CardTitle>

                  <CardDescription className="text-sm laeding-5 font-normal">
                    Fluffy pancakes stacked with fruits, cream, syrup, and
                    powdered sugar.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
