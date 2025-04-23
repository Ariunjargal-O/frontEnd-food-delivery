"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SelectItemComp } from "./components/SelectItem";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/admin/components/app-sidebar";
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { icons, ImageIcon, Pencil, Plus, Trash, X } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BASE_URL } from "@/constnants";
import { useEffect, useState, PropsWithChildren } from "react";
import { createContext } from "vm";
import { any } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type CateFoodType = {
  categoryName: string;
  _id: string;
  foods: FoodType[];
};

export type CateName = {
  categoryName: string | any;
};

export type FoodType = {
  categoryId: string;
  foodName: string;
  image: string;
  ingredients: string[];
  price: number;
  _id: string;
};

type ItemType = {
  food: FoodType;
  count: number;
};

type ContextType = {
  item: ItemType[];
  totalPrice: number;
  addItem: (value: ItemType) => void; // yu ch butsaahgui buyu set ni void bna
  removeItem: (value: ItemType) => void;
  setOpen: (value: boolean) => void;
};

export default function AdminPage() {
  const [categories, setCategories] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const getdataCate = async () => {
      const res = await fetch(`${BASE_URL}/food-categories/with-foods`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const categoriesList = await res.json();
      console.log(categoriesList);
      setCategories(categoriesList.categories);
      // setFood(categoriesList.categories);
      // console.log(categoriesList.categories);
    };
    getdataCate();
  }, []);
  console.log(categories);

  const deleteFood = async (foodId: string) => {
    if (confirm("Are you sure you want to delete this food?")) {
      await fetch(`${BASE_URL}/foods/${foodId}`, {
        method: "DELETE",
      });

      window.location.reload();
    }
  };

  return (
    <div className="p-6 w-full">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-center items-center w-9 h-9 justify-self-end mr-20">
          <Avatar className="">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              {" "}
              <User />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="p-(--spacing-4)">
            My@gmail.com
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex justify-center">
            <Link href="/">
              <Button className="">Sing out</Button>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex gap-5 flex-col mt-5">
        <Card className="p-6">
          <h1 className="font-bold text-2xl leading-7">Dishes category</h1>
          <div className="flex flex-wrap gap-4">
            {categories.map((category: CateFoodType) => {
              return (
                <div key={category._id}>
                  <Button
                    variant="outline"
                    className="rounded-2xl hover:bg-red-100"
                  >
                    {category.categoryName}
                    <Badge className="rounded-2xl">
                      {category.foods.length}
                    </Badge>
                  </Button>
                </div>
              );
            })}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-red-500 rounded-2xl hover:bg-red-900"
                >
                  <Plus className="text-white" size="icon " />
                </Button>
              </DialogTrigger>
              <DialogContent className="flex gap-8 flex-col">
                <DialogHeader>
                  <DialogTitle className="pb-4">
                    <p className="font-bold text-lg leading-7">
                      Add new category
                    </p>
                  </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-3">
                  <p className="font-semibold leading-[14px] text-base">
                    Category name
                  </p>
                  <Input
                    type=""
                    placeholder="List ingredType category name..."
                    className=""
                  ></Input>
                </div>

                <Button>Add category</Button>
              </DialogContent>
            </Dialog>
          </div>
        </Card>
        <div className="">
          {categories.map((category: CateFoodType) => {
            return (
              <Card className="p-6 flex mb-5 box-border" key={category._id}>
                <div key={category._id}>
                  <h2 className="text-2xl font-bold leading-7">
                    {category.categoryName}
                    <span className="pl-3">({category.foods.length})</span>
                  </h2>
                </div>
                <CardContent className="flex gap-5 flex-wrap">
                  <div className=" ">
                    <Card className="w-[260px] h-[230px] border-red-500 border-dashed p-4">
                      <CardContent className="flex justify-center items-center my-auto">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              className="bg-red-500 rounded-2xl hover:bg-red-900"
                            >
                              <Plus className="text-white" size="icon " />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="gap-8">
                            <DialogHeader>
                              <DialogTitle className="pb-2">
                                <p className="font-bold text-lg leading-7">
                                  Add new Dish to <span>Appetizers</span>
                                </p>
                              </DialogTitle>
                            </DialogHeader>
                            <div className="flex justify-between">
                              <div className="flex flex-col gap-3 ">
                                <p className="font-semibold leading-[14px] text-base">
                                  Food name
                                </p>
                                <Input
                                  className="w-[220px]"
                                  type="text"
                                  placeholder="Type food name"
                                ></Input>
                              </div>
                              <div className="flex flex-col gap-3 ">
                                <p className="font-semibold leading-[14px] text-base">
                                  Food price
                                </p>
                                <Input
                                  className="w-[220px]"
                                  type="text"
                                  placeholder="Enter price..."
                                ></Input>
                              </div>
                            </div>
                            <div className="flex flex-col gap-3">
                              <p className="font-semibold leading-[14px] text-base">
                                Ingredients
                              </p>
                              <Input
                                type=""
                                placeholder="List ingredients..."
                                className="h-[90px]"
                              ></Input>
                            </div>
                            <div className="flex flex-col gap-3">
                              <p className="font-semibold leading-[14px] text-base">
                                Food image
                              </p>

                              <Button
                                variant="outline"
                                className="h-[138px] border-2 border-dashed border-blue-300 rounded-2xl bg-blue-50 items-center flex justify-center hover:bg-red-100"
                              >
                                <Input type="file" className="hidden"></Input>
                                <div className="flex flex-col justify-self-center ">
                                  <div className="rounded-full border-0 mx-auto bg-white h-10 w-10 flex justify-center items-center">
                                    <ImageIcon size={30} />
                                  </div>
                                  <p className="font-medium text-base leading-5 pt-3">
                                    Choose a file or drag & drop it here
                                  </p>
                                </div>
                              </Button>
                            </div>

                            <Button>Add dish</Button>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex flex-row gap-5 box-border">
                    {category.foods.map((foods: FoodType) => {
                      return (
                        <div key={foods._id}>
                          <Card className="w-[260px] h-[230px] p-4 ">
                            <CardContent className="w-fit relative p-0 box-border">
                              <div className="relative mb-2">
                                <img
                                  className="object-cover w-[240px] h-[140px] rounded-xl relative"
                                  src={foods.image}
                                />
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className="absolute z-10 right-4 bottom-3 rounded-2xl  hover:bg-red-100"
                                    >
                                      <Pencil />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="[&_Textarea]:w-[288px]">
                                    <DialogHeader>
                                      <DialogTitle className="pb-2">
                                        <p className="font-bold text-lg leading-7">
                                          Dishes info
                                        </p>
                                      </DialogTitle>
                                    </DialogHeader>
                                    <div className="flex justify-between">
                                      <p className="font-normal text-sm leading-4 text-gray-400">
                                        Dish Name
                                      </p>{" "}
                                      <Textarea
                                        value={foods.foodName}
                                        onChange={(e) =>
                                          setText(e.target.value)
                                        }
                                      >
                                        {" "}
                                        hoolnoo nre
                                      </Textarea>
                                    </div>
                                    <div className="flex justify-between">
                                      <p className="font-normal text-sm leading-4 text-gray-400">
                                        Dish category
                                      </p>
                                      <div>
                                        <Select>
                                          <SelectTrigger className="w-[288px]">
                                            <SelectValue
                                              placeholder={
                                                category.categoryName
                                              }
                                            />
                                          </SelectTrigger>
                                          <SelectContent>
                                            {categories.map(
                                              (cat: CateFoodType) => (
                                                <SelectItem
                                                  value={cat.categoryName}
                                                >
                                                  {cat.categoryName}
                                                </SelectItem>
                                              )
                                            )}
                                          </SelectContent>
                                        </Select>
                                      </div>
                                    </div>
                                    <div className="flex justify-between">
                                      <p className="font-normal text-sm leading-4 text-gray-400">
                                        Ingredients
                                      </p>{" "}
                                      <Textarea
                                        value={foods.ingredients}
                                        onChange={(e) =>
                                          setText(e.target.value)
                                        }
                                      >
                                        hoolnii orst
                                      </Textarea>
                                    </div>
                                    <div className="flex justify-between">
                                      <p className="font-normal text-sm leading-4 text-gray-400">
                                        Price
                                      </p>{" "}
                                      <Textarea
                                        value={foods.price}
                                        onChange={(e) =>
                                          setText(e.target.value)
                                        }
                                      >
                                        une
                                      </Textarea>
                                    </div>
                                    <div className="flex justify-between">
                                      <p className="font-normal text-sm leading-4 text-gray-400">
                                        Image
                                      </p>{" "}
                                      <Image
                                        alt="foodimage"
                                        src={foods.image}
                                        width={210}
                                        height={160}
                                        className="h-[160px]"
                                      ></Image>
                                    </div>
                                    <div className="flex justify-between">
                                      <Button
                                        variant="outline"
                                        className="hover:bg-red-100"
                                        onClick={() => deleteFood(foods._id)}
                                      >
                                        <Trash />
                                      </Button>
                                      <Button type="submit">
                                        Save Changes
                                      </Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <CardHeader className="p-0">
                                <div className="flex justify-between flex-col ">
                                  <div className="flex justify-between ">
                                    <h3 className="text-red-500 text-lg font-semibold">
                                      {foods.foodName}
                                    </h3>
                                    <p className="text-base leading-4 font-normal">
                                      ${foods.price}
                                    </p>
                                  </div>

                                  <p className="text-sm leading-4 font-normal">
                                    {foods.ingredients}
                                  </p>
                                </div>
                              </CardHeader>
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
