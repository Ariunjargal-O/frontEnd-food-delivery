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
import Image from "next/image";

interface DialogContentProps {
  image: string;
  price: number;
  ingredients: string[];
  name: string;
}

const DialogContentComp: React.FC<DialogContentProps> = ({
  image,
  price,
  ingredients,
  name,
}) => {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  const [countfood, setCountFood] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(price);

  const handleAdd = () => {
    setCountFood(countfood + 1);
    setTotalPrice(price * (countfood + 1));
  }

  const handleMinus = () => {
    if (countfood > 1) {
      setCountFood(countfood - 1);
      setTotalPrice(price * (countfood - 1));
    }
  }
  return (
    <div>
      {isMobile && (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="absolute z-10 right-10 bottom-4 rounded-2xl"
            >
              <Plus />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <Image
              alt="foodimage"
              width={377}
              height={234}
              className="w-[377px] h-[234px] mt-3 rounded-2xl ralative"
              src={image}
            />

            <div className="flex flex-col justify-between">
              <DialogHeader className=" mb-4">
                <DialogTitle className="text-start font-semibold text-2xl text-red-500 leading-8">
                  {name}
                </DialogTitle>
                <DialogDescription className=" text-start text-sm laeding-5 font-normal">
                  {ingredients}
                </DialogDescription>
              </DialogHeader>

              <DialogFooter className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm leading-3">Total Price</p>
                    <p className="font-semibold text-lg leading-7">${totalPrice}</p>
                  </div>

                  <div className=" flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <Button className="w-8 h-8 rounded-4xl" variant="outline"
                      onClick={handleMinus}>
                        <Minus />
                      </Button>
                      <p>{countfood}</p>
                      <Button className="w-8 h-8 rounded-4xl" variant="outline"
                      onClick={handleAdd}>
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
      )}
      {!isMobile && (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="absolute z-10 right-10 bottom-4 rounded-2xl"
            >
              <Plus />
            </Button>
          </DialogTrigger>
          <DialogContent className=" h-[300px] w-[600px] box-content">
            <DialogTitle className="flex p-0 gap-6">
              <Image
                alt="foodimage"
                width={300}
                height={350}
                src={image}
                className="rounded-2xl"
              />
              <div className="flex flex-col justify-between">
                <DialogHeader>
                  {" "}
                  <DialogTitle className="font-semibold text-2xl text-red-500 leading-8">
                    {name}
                  </DialogTitle>
                  <DialogDescription className="text-sm laeding-5 font-normal">
                    {ingredients}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-2">
                  <div className="flex justify-between gap-4">
                    <div className="flex flex-col w-20">
                      <p className="text-sm leading-3">Total Price</p>
                      <p className="font-semibold text-lg leading-7">
                        ＄{totalPrice}
                      </p>
                    </div>

                    <div className=" flex justify-between items-center ">
                      <div className="flex items-center justify-between w-25">
                        <Button
                          className="w-8 h-8 rounded-4xl"
                          variant="outline"
                          onClick={handleMinus}
                        >
                          <Minus />
                        </Button>
                        <p>{countfood}</p>
                        <Button
                          className="w-8 h-8 rounded-4xl"
                          variant="outline"
                          onClick={handleAdd}
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
      )}
    </div>
  );
};

export { DialogContentComp };
