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

import { BASE_URL } from "@/constnants";
import { CategoryType, FoodType } from "@/constnants/Type";
import Image from "next/image";
import { DialogContentComp } from "./DialogContentComp";

export const CategoriesMenuCard = () => {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  const [category, setCategory] = useState<CategoryType[]>([]);
  useEffect(() => {
    const fetchdata = async () => {
      const dataCate = await fetch(`${BASE_URL}/food-categories/with-foods`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const category = await dataCate.json();
      setCategory(category.categories);
      // console.log(category)
    };
    fetchdata();
  }, []);

  return (
    <div>
      {isMobile && (
        <div className="">
          <div className="p-(--spacing-5)">
            {category.map((catefood: CategoryType) => {
              return (
                <div key={catefood._id}>
                  <h2 className="font-bold text-2xl my-(--spacing-4)">
                    {catefood.categoryName}
                  </h2>
                  <div className="flex flex-wrap overflow-scroll gap-3">
                    {catefood.foods.map((food: FoodType, index) => {
                      return (
                        <Card className="" key={food._id}>
                          <CardContent className="w-fit relative">
                            <img
                              alt="foodimage"
                              className=" rounded-2xl ralative w-[350px] h-[210px]"
                              src={food.image}
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
                            </Dialog>
                            <DialogContentComp
                              image={food.image}
                              name={food.foodName}
                              price={food.price}
                              ingredients={food.ingredients}
                            />
                            
                          </CardContent>
                          <CardHeader>
                            <CardTitle className="flex justify-between">
                              <h3 className="font-semibold text-2xl text-red-500 leading-8">
                                {food.foodName}
                              </h3>
                              <p className="font-semibold text-lg leading-7">
                                ${food.price}
                              </p>
                            </CardTitle>

                            <CardDescription className="text-sm laeding-5 font-normal">
                              {food.ingredients}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {!isMobile && (
        <div>
          <div className="p-(--spacing-5)">
            {category.map((catefood: CategoryType) => {
              return (
                <div key={catefood._id}>
                  <h2 className="font-bold text-3xl mb-(--spacing-5) mt-(--spacing-6)">
                    {catefood.categoryName}
                  </h2>
                  <div className="flex gap-9">
                    {catefood.foods.map((food: FoodType, index) => {
                      return (
                        <div key={food._id}>
                          <Card className="w-[400px] h-[350px]">
                            <CardContent className="w-fit relative">
                              <img
                                alt="foodimage"
                                className=" rounded-2xl ralative w-[350px] h-[210px]"
                                src={food.image}
                              />
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="absolute z-10 right-10 bottom-4 rounded-full"
                                  >
                                    <Plus />
                                  </Button>
                                </DialogTrigger>
                                <DialogContentComp 
                                  image={food.image} 
                                  name={food.foodName} 
                                  price={food.price} 
                                  ingredients={food.ingredients} 
                                />
                              </Dialog>
                            </CardContent>
                            <CardHeader>
                              <CardTitle className="flex justify-between">
                                <h3 className="font-semibold text-2xl text-red-500 leading-8">
                                  {food.foodName}
                                </h3>
                                <p className="font-semibold text-lg leading-7">
                                  ${food.price}
                                </p>
                              </CardTitle>

                              <CardDescription className="text-sm laeding-5 font-normal">
                                {food.ingredients}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
