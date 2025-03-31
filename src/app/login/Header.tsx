"use client";

import { useMediaQuery } from "react-responsive";
import {
  CircleX,
  Clock,
  Delete,
  DeleteIcon,
  icons,
  LocateIcon,
  LogIn,
  Map,
  MapPin,
  Minus,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Soup,
  User,
  UserPlus,
  X,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";

export const LoginHeader = () => {
  const { setTheme } = useTheme();
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <div>
      {isMobile && (
        <header className="flex justify-between px-(--spacing-3) py-(--spacing-4)">
          <Link href={`/`}>
            <div className="flex gap-2">
              <img sizes="icon" src="/icon-logo.png" />
              <div className="flex flex-col items-center justify-center">
                <h2 className="flex flex-col text-base font-bold leading-4">
                  <span className=" text-red-500">Arii </span>
                  <span className="text-black dark:text-white">Eats</span>
                </h2>
              </div>
            </div>
          </Link>
          <div className="flex gap-2">
            {" "}
            <DropdownMenu>
              <DropdownMenuTrigger className=" flex justify-center items-center  w-9 h-9">
                <MapPin />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col justify-center">
                <DropdownMenuLabel className="p-(--spacing-4)">
                  <p className="text-lg">Delivery address:</p>
                  <span className="text-sm pl-2 text-red-700">duuregdfvgb</span>
                </DropdownMenuLabel>

                <Dialog>
                  <DialogTrigger>
                    {" "}
                    <Button
                      variant="outline"
                      className="border-red-500 rounded-4xl"
                    >
                      Add address
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="p-(--spacing-6)">
                    <DialogHeader>
                      <DialogTitle className="flex ">
                        Delivery address
                      </DialogTitle>
                    </DialogHeader>

                    <Textarea
                      placeholder="Please provide specific address details such as building number, entrance, and apartment number"
                      className="mb-4"
                    ></Textarea>
                    <div className="flex flex-row gap-3 justify-end">
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button
                        variant="outline"
                        className="bg-black text-white dark:bg-white dark:text-black"
                      >
                        Deliver here
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger className=" flex justify-center items-center w-9 h-9">
                <ShoppingCart />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="flex gap-2">
                    <ShoppingCart /> Order Detail
                  </SheetTitle>
                </SheetHeader>
                <Tabs defaultValue="account" className="w-[400px]">
                  <TabsList className="w-fit mx-auto">
                    <TabsTrigger className="text-center px-17 " value="cart">
                      Cart
                    </TabsTrigger>
                    <TabsTrigger value="order" className="text-center px-17">
                      Order
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="cart" className="px-(--spacing-4)">
                    <div>
                      {" "}
                      <Card className="min-w-full p-2 mb-3">
                        <h6 className="text-3xl">My Cart</h6>
                        <CardContent className="p-0 flex gap-3">
                          <img
                            className="w-[124px] h-[120px] rounded-2xl"
                            src="/Product-Image.png"
                          />

                          <div className="flex flex-col justify-between py-2">
                            <div>
                              <CardTitle className="flex justify-between">
                                <h3 className="font-semibold text-base text-red-500 leading-6">
                                  Finger food
                                </h3>
                                <Button
                                  variant="outline"
                                  className="border-red-500 rounded-full w-6 h-6"
                                >
                                  <X />
                                </Button>
                              </CardTitle>

                              <CardDescription className="text-sx laeding-2 font-light">
                                Fluffy pancakes stacked with fruits, cream,
                                syrup, and powdered sugar.
                              </CardDescription>
                            </div>

                            <div className=" flex justify-between items-center">
                              <div className="flex gap-3 items-center">
                                <Button className="w-8 h-8" variant="outline">
                                  <Minus />
                                </Button>
                                <p>1</p>
                                <Button className="w-8 h-8" variant="outline">
                                  <Plus />
                                </Button>
                              </div>
                              <p className="font-semibold text-lg leading-7">
                                $12.99
                              </p>
                            </div>
                          </div>
                        </CardContent>
                        <CardContent className="p-0 flex gap-3">
                          <img
                            className="w-[124px] h-[120px] rounded-2xl"
                            src="/Product-Image.png"
                          />

                          <div className="flex flex-col justify-between py-2">
                            <div>
                              <CardTitle className="flex justify-between">
                                <h3 className="font-semibold text-base text-red-500 leading-6">
                                  Finger food
                                </h3>
                                <Button
                                  variant="outline"
                                  className="border-red-500 rounded-full w-6 h-6"
                                >
                                  <X />
                                </Button>
                              </CardTitle>

                              <CardDescription className="text-sx laeding-2 font-light">
                                Fluffy pancakes stacked with fruits, cream,
                                syrup, and powdered sugar.
                              </CardDescription>
                            </div>

                            <div className=" flex justify-between items-center">
                              <div className="flex gap-3 items-center">
                                <Button className="w-8 h-8" variant="outline">
                                  <Minus />
                                </Button>
                                <p>1</p>
                                <Button className="w-8 h-8" variant="outline">
                                  <Plus />
                                </Button>
                              </div>
                              <p className="font-semibold text-lg leading-7">
                                $12.99
                              </p>
                            </div>
                          </div>
                        </CardContent>

                        <Button
                          variant="outline"
                          className="border-red-500 text-red-600 text-lg rounded-4xl"
                        >
                          Add Food
                        </Button>
                      </Card>
                      <Card className="min-w-full p-2">
                        <CardContent className="p-0 flex flex-col gap-6">
                          <h6 className="text-3xl">Payment info</h6>

                          <div className="p-0 flex flex-col gap-2">
                            <div className="flex justify-between">
                              {" "}
                              <p>Items</p>
                              <p>$12.99</p>
                            </div>
                            <div className="flex justify-between">
                              {" "}
                              <p>Shipping</p>
                              <p>$0.99</p>
                            </div>
                            <div className="flex justify-between border-t-2">
                              {" "}
                              <p>Total</p>
                              <p>$13.98</p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            className="bg-red-500 text-white text-lg rounded-4xl w-full"
                          >
                            Checkout
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="order" className="px-(--spacing-4)">
                    <Card className="p-2">
                      <h6 className="text-3xl">Your order</h6>
                      <CardContent className="p-0">
                        <div className="flex justify-between">
                          <p className="text-2xl font-bold text-red-500">
                            $13.98 <span>id</span>
                          </p>
                          <Button
                            variant="outline"
                            className="border-red-500 rounded-4xl"
                          >
                            Pending
                          </Button>
                        </div>
                        <div className="px-3 flex flex-col gap-2">
                          <div className="flex  justify-between">
                            <div className="flex gap-2">
                              {" "}
                              <Soup />
                              <p className="text-gray-500 ">asdfg</p>
                            </div>
                            <p className="text-gray-500 ">x1</p>
                          </div>
                          <div className="flex gap-2">
                            <Clock />
                            <p className="text-gray-500 ">12.12.12</p>
                          </div>
                          <div className="flex gap-2">
                            <Map />
                            <p className="text-gray-500 ">asdfgh</p>
                          </div>
                        </div>
                        <div className="border-b-2 border-dashed my-3"></div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </SheetContent>
            </Sheet>
            <DropdownMenu>
              <DropdownMenuTrigger className=" flex justify-center items-center w-9 h-9">
                <User />
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      )}
      {!isMobile && (
        <header className="flex justify-between px-(--spacing-8) py-(--spacing-4)">
          <Link href={`/`}>
            <div className="flex gap-2">
              <img className="w-15 h-12" src="/icon-logo.png" />
              <div className="flex flex-col items-center justify-center">
                <h2 className="flex gap-1 text-2xl font-bold leading-6">
                  <p className=" text-red-500">Arii </p>
                  <p className="text-black dark:text-white">Eats</p>
                </h2>
                <p className="text-gray-400 text-lg leading-7">
                  Swift delivery
                </p>
              </div>
            </div>
          </Link>

          <div className="flex gap-7 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-red-500 flex justify-center items-center rounded-full p-2">
                <MapPin size={17} />
                <p className="text-xs">Delivery address:</p>
                <span className="text-sm pl-2 text-yellow-300">duureg</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="p-(--spacing-4)">
                  <p className="text-lg">Delivery address:</p>
                  <span className="text-sm pl-2 text-red-700">duuregdfvgb</span>
                </DropdownMenuLabel>

                <Dialog>
                  <DialogTrigger className="w-full">
                    {" "}
                    <Button
                      variant="outline"
                      className="border-red-500 rounded-4xl "
                    >
                      Add address
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="p-(--spacing-6)">
                    <DialogHeader>
                      <DialogTitle className="flex ">
                        Delivery address
                      </DialogTitle>
                    </DialogHeader>

                    <Textarea
                      placeholder="Please provide specific address details such as building number, entrance, and apartment number"
                      className="mb-4"
                    ></Textarea>
                    <div className="flex flex-row gap-3 justify-end">
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                    
                      <Button
                        variant="outline"
                        className="bg-black text-white dark:bg-white dark:text-black"
                      >
                        Deliver here
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger className=" flex justify-center items-center rounded-full w-10 h-10">
                <ShoppingCart />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="flex gap-2">
                    <ShoppingCart /> Order Detail
                  </SheetTitle>
                </SheetHeader>
                <Tabs defaultValue="account" className="w-[400px]">
                  <TabsList className="w-fit mx-auto">
                    <TabsTrigger className="text-center px-17 " value="cart">
                      Cart
                    </TabsTrigger>
                    <TabsTrigger value="order" className="text-center px-17">
                      Order
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="cart" className="px-(--spacing-4)">
                    <div>
                      {" "}
                      <Card className="min-w-full p-2 mb-3">
                        <h6 className="text-3xl">My Cart</h6>
                        <CardContent className="p-0 flex gap-3">
                          <img
                            className="w-[124px] h-[120px] rounded-2xl"
                            src="/Product-Image.png"
                          />

                          <div className="flex flex-col justify-between py-2">
                            <div>
                              <CardTitle className="flex justify-between">
                                <h3 className="font-semibold text-base text-red-500 leading-6">
                                  Finger food
                                </h3>
                                <Button
                                  variant="outline"
                                  className="border-red-500 rounded-full w-6 h-6"
                                >
                                  <X />
                                </Button>
                              </CardTitle>

                              <CardDescription className="text-sx laeding-2 font-light">
                                Fluffy pancakes stacked with fruits, cream,
                                syrup, and powdered sugar.
                              </CardDescription>
                            </div>

                            <div className=" flex justify-between items-center">
                              <div className="flex gap-3 items-center">
                                <Button className="w-8 h-8 rounded-4xl" variant="outline">
                                  <Minus />
                                </Button>
                                <p>1</p>
                                <Button className="w-8 h-8 rounded-4xl" variant="outline">
                                  <Plus />
                                </Button>
                              </div>
                              <p className="font-semibold text-lg leading-7">
                                $12.99
                              </p>
                            </div>
                          </div>
                        </CardContent>
                        

                        <Button
                          variant="outline"
                          className="border-red-500 text-red-600 text-lg rounded-4xl"
                        >
                          Add Food
                        </Button>
                      </Card>
                      <Card className="min-w-full p-2">
                        <CardContent className="p-0 flex flex-col gap-6">
                          <h6 className="text-3xl">Payment info</h6>

                          <div className="px-3 flex flex-col gap-2">
                            <div className="flex justify-between">
                              {" "}
                              <p className="text-gray-500">Items</p>
                              <p >$12.99</p>
                            </div>
                            <div className="flex justify-between">
                              {" "}
                              <p className="text-gray-500">Shipping</p>
                              <p>$0.99</p>
                            </div>
                            <div className="flex justify-between border-t-2">
                              {" "}
                              <p className="text-gray-500">Total</p>
                              <p>$13.98</p>
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            className="bg-red-500 text-white text-lg rounded-4xl w-full"
                          >
                            Checkout
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="order" className="px-(--spacing-4)">
                    <Card className="p-2">
                      <h6 className="text-3xl">Your order</h6>
                      <CardContent className="p-0 ">
                        <div className="flex justify-between mb-3">
                          <p className="text-2xl font-bold text-red-500">
                            $13.98 <span>id</span>
                          </p>
                          <Button
                            variant="outline"
                            className="border-red-500 rounded-4xl"
                          >
                            Pending
                          </Button>
                        </div>
                        <div className="px-3 flex flex-col gap-2">
                          <div className="flex  justify-between">
                            <div className="flex gap-2">
                              {" "}
                              <Soup />
                              <p className="text-gray-500 ">asdfg</p>
                            </div>
                            <p className="text-gray-500 ">x1</p>
                          </div>
                          <div className="flex gap-2">
                            <Clock />
                            <p className="text-gray-500 ">12.12.12</p>
                          </div>
                          <div className="flex gap-2">
                            <Map />
                            <p className="text-gray-500 ">asdfgh</p>
                          </div>
                        </div>
                        <div className="border-b-2 border-dashed my-3"></div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </SheetContent>
            </Sheet>

            <DropdownMenu>
              <DropdownMenuTrigger className="bg-red-500 flex justify-center items-center rounded-full w-10 h-10">
                <User />
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-10 h-10">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      )}
    </div>
  );
};
