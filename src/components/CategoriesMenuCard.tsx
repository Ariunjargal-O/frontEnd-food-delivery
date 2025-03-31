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
import { Button } from "./ui/button";
import { CirclePlus, Minus, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
              <div className="p-1">
                <Card>
                  <CardContent className="relative">
                    <img src="/Product-Image.png" />
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="absolute z-10 right-10 bottom-4 rounded-2xl"
                        >
                          <Plus />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="">
                        <img
                          className="w-[377px] h-[234px] rounded-2xl ralative"
                          src="/Product-Image2.png"
                        />

                        <div className="flex flex-col justify-between">
                          <DialogHeader className=" mb-4">
                            <DialogTitle className="text-start font-semibold text-2xl text-red-500 leading-8">
                              Finger food
                            </DialogTitle>
                            <DialogDescription className=" text-start text-sm laeding-5 font-normal">
                              Fluffy pancakes stacked with fruits, cream, syrup,
                              and powdered sugar.
                            </DialogDescription>
                          </DialogHeader>

                          <DialogFooter className="flex flex-col gap-2">
                            <div className="flex justify-between">
                              <div className="flex flex-col">
                                <p className="text-sm leading-3">Total Price</p>
                                <p className="font-semibold text-lg leading-7">
                                  $12.99
                                </p>
                              </div>

                              <div className=" flex justify-between items-center">
                                <div className="flex gap-3 items-center">
                                  <Button
                                    className="w-8 h-8 rounded-4xl"
                                    variant="outline"
                                  >
                                    <Minus />
                                  </Button>
                                  <p>1</p>
                                  <Button
                                    className="w-8 h-8 rounded-4xl"
                                    variant="outline"
                                  >
                                    <Plus />
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <Button>Add Cart</Button>
                          </DialogFooter>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="flex justify-between">
                      <h3 className="font-semibold text-xl text-red-500 leading-8">
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
        </div>
      )}

      {!isMobile && (
        <div>
          <div className="p-(--spacing-5)">
            <h2 className="font-bold text-3xl mb-(--spacing-12)">Appetizers</h2>
            <div className="flex gap-9">
              <Card className="w-fit h-fit">
                <CardContent className="w-fit relative">
                  <img
                    className="w-[365px] h-[210px] rounded-2xl ralative"
                    src="/Product-Image.png"
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="absolute z-10 right-10 bottom-4 rounded-2xl"
                      >
                        <Plus />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="">
                      <DialogTitle className="flex p-0 gap-4">
                        <img
                          className="w-[377px] h-[234px] rounded-2xl ralative"
                          src="/Product-Image.png"
                        />
                        <div className="flex flex-col justify-between">
                          <DialogHeader>
                            {" "}
                            <DialogTitle className="font-semibold text-2xl text-red-500 leading-8">
                              Finger food
                            </DialogTitle>
                            <DialogDescription className="text-sm laeding-5 font-normal">
                              Fluffy pancakes stacked with fruits, cream, syrup,
                              and powdered sugar.
                            </DialogDescription>
                          </DialogHeader>

                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                              <div className="flex flex-col">
                                <p className="text-sm leading-3">Total Price</p>
                                <p className="font-semibold text-lg leading-7">
                                  $12.99
                                </p>
                              </div>

                              <div className=" flex justify-between items-center">
                                <div className="flex gap-3 items-center">
                                  <Button
                                    className="w-8 h-8 rounded-4xl"
                                    variant="outline"
                                  >
                                    <Minus />
                                  </Button>
                                  <p>1</p>
                                  <Button
                                    className="w-8 h-8 rounded-4xl"
                                    variant="outline"
                                  >
                                    <Plus />
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <Button>Add Cart</Button>
                          </div>
                        </div>
                      </DialogTitle>
                    </DialogContent>
                  </Dialog>
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
                <CardContent className="w-fit relative">
                  <img
                    className="w-[365px] h-[210px] rounded-2xl ralative"
                    src="/Product-Image2.png"
                  />

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="absolute z-10 right-10 bottom-4 rounded-2xl"
                      >
                        <Plus />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="">
                      <DialogTitle className="flex p-0 gap-4">
                        <img
                          className="w-[377px] h-[234px] rounded-2xl ralative"
                          src="/Product-Image2.png"
                        />
                        <div className="flex flex-col justify-between">
                          <DialogHeader>
                            {" "}
                            <DialogTitle className="font-semibold text-2xl text-red-500 leading-8">
                              Finger food
                            </DialogTitle>
                            <DialogDescription className="text-sm laeding-5 font-normal">
                              Fluffy pancakes stacked with fruits, cream, syrup,
                              and powdered sugar.
                            </DialogDescription>
                          </DialogHeader>

                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                              <div className="flex flex-col">
                                <p className="text-sm leading-3">Total Price</p>
                                <p className="font-semibold text-lg leading-7">
                                  $12.99
                                </p>
                              </div>

                              <div className=" flex justify-between items-center">
                                <div className="flex gap-3 items-center">
                                  <Button
                                    className="w-8 h-8 rounded-4xl"
                                    variant="outline"
                                  >
                                    <Minus />
                                  </Button>
                                  <p>1</p>
                                  <Button
                                    className="w-8 h-8 rounded-4xl"
                                    variant="outline"
                                  >
                                    <Plus />
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <Button>Add Cart</Button>
                          </div>
                        </div>
                      </DialogTitle>
                    </DialogContent>
                  </Dialog>
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
