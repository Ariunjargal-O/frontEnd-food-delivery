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

export const Footer = () => {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);
  return (
    <div>
      {isMobile && (
        <div className="bg-gray-200 p-(--spacing-3)">
          <div className="flex gap-2 items-center">
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
          <div className="flex justify-between">
            <div>
              <div className="py-(--spacing-3)">
                <h6 className="text-xl">Ari Eats </h6>
               <div className=" text-gray-600 pl-2">
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
                <SheetTrigger className="flex gap-1 items-center text-xl">Menu <ChevronRight size={18}/></SheetTrigger>
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

                  <div className="px-(--spacing-4) flex flex-col gap-4">
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

              <div className="flex flex-col gap-2">
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
              <div className="flex gap-6">
                <p><Link href="#" className="hover:text-gray-300">
                  Privacy policy
                </Link></p>
               <p> <Link href="#" className="hover:text-gray-300">
                  Terms and conditoin
                </Link></p>
                <p><Link href="#" className="hover:text-gray-300">
                  Cookie policy
                </Link></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isMobile && <div></div>}
    </div>
  );
};

// {/* <div className="flex flex-col min-h-screen">
//       {/* Top banner with repeating text */}
//       <div className="bg-red-500 py-4 overflow-hidden whitespace-nowrap">
//         <div className="animate-marquee inline-block">
//           {Array(10)
//             .fill("Fresh fast delivered")
//             .map((text, i) => (
//               <span key={i} className="text-white text-2xl mx-4">
//                 {text}
//               </span>
//             ))}
//         </div>
//       </div>

//       Main content area
//       <div className="flex-grow bg-black text-white">
//         {/* Footer content */}
//         <div className="container mx-auto py-16 px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {/* Logo section */}
//             <div className="flex flex-col items-start">
//               <div className="flex items-center mb-2">
//                 <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
//                   <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               <h2 className="text-xl font-bold">
//                 <span className="text-white">Nom</span>
//                 <span className="text-red-500">Nom</span>
//               </h2>
//               <p className="text-gray-400 text-sm">Swift delivery</p>
//             </div>

//             {/* NOMNOM section */}
//             <div>
//               <h3 className="text-gray-400 uppercase mb-4 tracking-wider">NOMNOM</h3>
//               <ul className="space-y-3">
//                 <li>
//                   <Link href="#" className="hover:text-gray-300">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-gray-300">
//                     Contact us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="hover:text-gray-300">
//                     Delivery zone
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* MENU section */}
//             <div>
//               <h3 className="text-gray-400 uppercase mb-4 tracking-wider">MENU</h3>
//               <div className="grid grid-cols-2 gap-x-8 gap-y-3">
//                 <Link href="#" className="hover:text-gray-300">
//                   Appetizers
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   Side dish
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   Salads
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   Brunch
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   Pizzas
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   Desserts
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   Main dishes
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   Beverages
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   Desserts
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   Fish & Sea foods
//                 </Link>
//               </div>
//             </div>

//             {/* FOLLOW US section */}
//             <div>
//               <h3 className="text-gray-400 uppercase mb-4 tracking-wider">FOLLOW US</h3>
//               <div className="flex space-x-4">
//                 <Link href="#" className="text-white hover:text-gray-300">
//                   <Facebook size={24} />
//                 </Link>
//                 <Link href="#" className="text-white hover:text-gray-300">
//                   <Instagram size={24} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom footer with copyright */}
//         <div className="border-t border-gray-800">
//           <div className="container mx-auto py-6 px-4">
//             <div className="flex flex-wrap justify-between text-gray-400 text-sm">
//               <div className="mb-2 md:mb-0">Copy right 2024 © Nomnom LLC</div>
//               <div className="flex flex-wrap gap-6">
//                 <Link href="#" className="hover:text-gray-300">
//                   Privacy policy
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   Terms and conditoin
//                 </Link>
//                 <Link href="#" className="hover:text-gray-300">
//                   Cookie policy
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
