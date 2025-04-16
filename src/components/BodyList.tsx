import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { BASE_URL } from "@/constnants";
// import "server-only";
import * as React from "react";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "./ui/badge";
import Image from "next/image";

export type CategoryType = {
  categoryName: string;
  _id: string;
};

export type CateFoodType = {
  categoryName: string;
  _id: string;
  foods: FoodType[];
};

export type FoodType = {
  categoryId: string;
  foodName: string;
  image: string;
  ingredients: string[];
  price: number;
  _id: string;
};

export const BodyList = async () => {
  // Client sider render hiibel
  // export const BodyList =  () => {
  // const [foodList, setFoods] = useState([])
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     const dataCate = await fetch(`${BASE_URL}/food-categories`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const category = await dataCate.json();
  //     setFoods(category)
  //     // console.log(category);

  //     // const dataFood = await fetch(`${BASE_URL}/food-categories/with-foods`, {
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     // });
  //     // const foods = await dataFood.json();
  //     // //   console.log(foods.categories);
  //     // const foodList = foods.categories;
  //     // console.log(foodList);
  //     // setFoods(foodList)
  //   };
  //   fetchdata()
  // },[]);

  const dataCate = await fetch(`${BASE_URL}/food-categories`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const category = await dataCate.json();
  // console.log(category);

  const dataFood = await fetch(`${BASE_URL}/food-categories/with-foods`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const foods = await dataFood.json();
  console.log(foods.categories);
  const foodList = foods.categories;
  // console.log(foodList)
  return (
    <div>
      <div>
        <h2 className="font-semibold text-3xl leading-9 pt-(--spacing-8) px-(--spacing-10)">
          Categories
        </h2>

        <div className=" flex px-(--spacing-10) gap-3 items-center justify-between pt-2">
          <Button className="w-8 h-4" variant={"outline"}>
            <ChevronLeft />
          </Button>
          <div className="flex gap-3  overflow-x-auto ">
            {" "}
            {category.map((category: CategoryType) => {
              return (
                <Link href={`#`} key={category._id}>
                  <Badge
                    className="text-base font-normal hover:bg-red-500 rounded-2xl"
                    variant="outline"
                  >
                    {category.categoryName}
                  </Badge>
                </Link>
              );
            })}
          </div>
          <Button className="w-8 h-4" variant={"outline"}>
            <ChevronRight />
          </Button>
        </div>
        <div>
          <div className="p-(--spacing-5)">
            {foodList.map((catefood: CateFoodType) => {
              return (
                <div key={catefood._id}>
                  <h2 className="font-bold text-3xl mb-(--spacing-5) mt-(--spacing-6)">
                    {catefood.categoryName}
                  </h2>
                  <div className="flex gap-9">
                    {catefood.foods.map((food: FoodType) => {
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
                                    className="absolute z-10 right-10 bottom-4 rounded-2xl"
                                  >
                                    <Plus />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className=" h-[300px] box-content">
                                  <DialogTitle className="flex p-0 gap-4">
                                    <Image
                                      alt="foodimage"
                                      width={300}
                                      height={350}
                                      src={food.image}
                                      className="rounded-2xl"
                                    />
                                    <div className="flex flex-col justify-between">
                                      <DialogHeader>
                                        {" "}
                                        <DialogTitle className="font-semibold text-2xl text-red-500 leading-8">
                                          {food.foodName}
                                        </DialogTitle>
                                        <DialogDescription className="text-sm laeding-5 font-normal">
                                          {food.ingredients}
                                        </DialogDescription>
                                      </DialogHeader>

                                      <div className="flex flex-col gap-2">
                                        <div className="flex justify-between gap-7">
                                          <div className="flex flex-col">
                                            <p className="text-sm leading-3">
                                              Total Price
                                            </p>
                                            <p className="font-semibold text-lg leading-7">
                                              ＄{food.price}
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
      </div>
    </div>
  );
};
