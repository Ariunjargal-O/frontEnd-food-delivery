"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Facebook, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { arrayBuffer } from "stream/consumers";

export const Footer = () => {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);
  return (
    <div>
      {isMobile && (
        <div className="p-(--spacing-3) border-t  ">
          <Link href={`/`}>
            <div className="flex gap-2 items-center">
              <img sizes="icon" src="/icon-logo.png" />
              <div className="flex flex-col items-center justify-center">
                <h2 className="flƒex gap-1 text-2xl font-bold leading-4">
                  <p className=" text-red-500 leading-7">Arii </p>
                  <p className="text-black dark:text-white">Eats</p>
                </h2>
                
              </div>
            </div>
          </Link>
          <div className="flex justify-between items-center p-(--spacing-2)">
            <div>
              <div className="py-(--spacing-3)">
                <h6 className="text-xl">Ari Eats </h6>
                <div className=" text-gray-500 pl-2">
                  <Link href={`/`}>
                    <p>Home</p>
                  </Link>
                  <Link href={`/`}>
                    <p>Contact us</p>
                  </Link>
                  <Link href={`/`}>
                    <p>Delivery zone</p>
                  </Link>
                </div>
              </div>
              <Sheet>
                <SheetTrigger className="flex gap-1 items-center text-xl">
                  Menu <ChevronRight size={18} />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className="flex justify-center">
                    <div className="flex gap-2">
                      <img sizes="icon" src="/icon-logo.png" />
                      <div className="flex flex-col items-center justify-center">
                        <h2 className="flex gap-1 text-2xl font-bold leading-4">
                          <p className=" text-red-500">Arii </p>
                          <p className="text-black dark:text-white">Eats</p>
                        </h2>
                        <p className="text-gray-400 text-base leading-7">
                          Swift delivery
                        </p>
                      </div>
                    </div>
                  </SheetHeader>
                  <SheetTitle className="text-3xl px-(--spacing-2)">
                    Do you wanna eat?
                  </SheetTitle>
                  <SheetDescription className="px-(--spacing-3)">
                    Shinehen shineleg hunsnii buteegdehuuneer hamgiin sain
                    chanariin amtlag eruul hooliig tanii gart shuurhai hurgene.
                    Ta yg odoo yu idhiig husej bna ve?
                  </SheetDescription>

                  <div className="px-(--spacing-4) flex flex-col gap-6">
                    <Link href={`/menu`}>
                      {" "}
                      <SheetTrigger className="flex gap-3">
                        <li>Appetizers</li> <ArrowRight />
                      </SheetTrigger>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <SheetTrigger className="flex gap-3">
                        <li>Salads</li>
                        <ArrowRight />
                      </SheetTrigger>
                    </Link>
                    <Link href={`/menu`}>
                      <SheetTrigger className="flex gap-3">
                        <li>Pizzas </li>
                        <ArrowRight />
                      </SheetTrigger>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <SheetTrigger className="flex gap-3">
                        <li>Main dishes </li>
                        <ArrowRight />
                      </SheetTrigger>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <SheetTrigger className="flex gap-3">
                        <li>Desserts </li>
                        <ArrowRight />
                      </SheetTrigger>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <SheetTrigger className="flex gap-3">
                        <li>Side dish </li>
                        <ArrowRight />
                      </SheetTrigger>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <SheetTrigger className="flex gap-3">
                        <li>Brunch </li>
                        <ArrowRight />
                      </SheetTrigger>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <SheetTrigger className="flex gap-3">
                        <li>Desserts </li>
                        <ArrowRight />
                      </SheetTrigger>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <SheetTrigger className="flex gap-3">
                        <li>Beverages </li>
                        <ArrowRight />
                      </SheetTrigger>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <SheetTrigger className="flex gap-3">
                        <li>Fish & Sea foods </li>
                        <ArrowRight />
                      </SheetTrigger>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div>
              <p className="text-2xl ">Follow us</p>

              <div className="flex flex-col gap-2 p-2">
                <Link href="#" className=" hover:text-gray-300 flex gap-1">
                  <Facebook size={24} />
                  Facebook
                </Link>
                <Link href="#" className=" hover:text-gray-300 flex gap-1">
                  <Instagram size={24} />
                  Instagram
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 ">
            <div className="flex flex-wrap justify-between text-gray-400 text-sm pt-(--spacing-2)">
              <div className="mb-2 md:mb-0">Copy right 2025 © AriiEats LLC</div>
              <div className="flex gap-6 text-[13px] ">
                <p>
                  <Link href="#" className="hover:text-gray-300">
                    Privacy policy
                  </Link>
                </p>
                <p>
                  {" "}
                  <Link href="#" className="hover:text-gray-300">
                    Terms and conditoin
                  </Link>
                </p>
                <p>
                  <Link href="#" className="hover:text-gray-300">
                    Cookie policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isMobile && (
        <div className="">
          <div className="bg-red-500 py-(--spacing-4) whitespace-nowrap my-(--spacing-4)">
            <div className="animate-marquee overflow-hidden flex">
              {/* {Array(10)
                .fill("Fresh fast delivered")
                .map((text, i) => (
                  <p key={text} className="text-2xl text-white mx-4 ">Fresh fast delivered</p>
                ))} */}
              <p>Fresh fast delivered</p>
            </div>
          </div>
          <div>
            <div className="p-(--spacing-3) flex items-start gap-3 w-full justify-evenly">
              <Link href={`/`}>
                <div className="flex gap-2 items-center flex-col">
                  <img sizes="icon" src="/icon-logo.png" />
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="flex gap-1 text-xl font-bold leading-4">
                      <p className=" text-red-500">Arii </p>
                      <p className="text-black dark:text-white">Eats</p>
                    </h2>
                    <p className="text-gray-400 text-sm leading-7">
                      Swift delivery
                    </p>
                  </div>
                </div>
              </Link>

              <div className="">
                <h6 className="text-xl">Ari Eats </h6>
                <div className="pl-2">
                  <Link href={`/`}>
                    <p>Home</p>
                  </Link>
                  <Link href={`/`}>
                    <p>Contact us</p>
                  </Link>
                  <Link href={`/`}>
                    <p>Delivery zone</p>
                  </Link>
                </div>
              </div>

              <div>
                <p className="flex gap-1 items-center text-xl">Menu</p>

                <div className="pl-(--spacing-4) flex flex-row gap-7">
                  <div>
                    <Link href={`/menu`}>
                      {" "}
                      <p className="flex gap-3">Appetizers</p>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <p className="flex gap-3">Salads</p>
                    </Link>
                    <Link href={`/menu`}>
                      <p className="flex gap-3">Pizzas</p>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <p className="flex gap-3">Main dishes</p>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <p className="flex gap-3">Desserts</p>
                    </Link>
                  </div>
                  <div>
                    <Link href={`/menu`}>
                      {" "}
                      <p className="flex gap-3">Side dish</p>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <p className="flex gap-3">Brunch</p>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <p className="flex gap-3">Desserts</p>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <p className="flex gap-3">Beverages</p>
                    </Link>
                    <Link href={`/menu`}>
                      {" "}
                      <p className="flex gap-3">Fish & Sea foods</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xl ">Follow us</p>
                <div className="flex flex-col gap-2 p-2">
                  <Link href="#" className=" hover:text-gray-300 flex gap-1">
                    <Facebook size={20} />
                    Facebook
                  </Link>
                  <Link href="#" className=" hover:text-gray-300 flex gap-1">
                    <Instagram size={20} />
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 py-(--spacing-4) mx-(--spacing-5)">
              <div className="flex flex-wrap justify-between text-gray-400 text-sm pt-(--spacing-2)">
                <div className="mb-2 md:mb-0">
                  Copy right 2025 © AriiEats LLC
                </div>
                <div className="flex gap-6 ">
                  <p>
                    <Link href="#" className="hover:text-gray-300 text-xs">
                      Privacy policy
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <Link href="#" className="hover:text-gray-300">
                      Terms and conditoin
                    </Link>
                  </p>
                  <p>
                    <Link href="#" className="hover:text-gray-300">
                      Cookie policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
