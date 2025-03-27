"use client";

import { useMediaQuery } from "react-responsive";
import { LogIn, User, UserPlus } from "lucide-react";
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

export const Header = () => {
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
          </div></Link>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <User />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Link href={`/costumer/login`}>
                <DropdownMenuItem>

                  Log in
                  <LogIn />
                </DropdownMenuItem></Link>
                <Link href={`/costumer/signup`}>
                <DropdownMenuItem >
                  Sign up
                  <UserPlus />
                </DropdownMenuItem>
                </Link>
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
            <div className="flex items-center gap-4">
              <Link href="/costumer/signup" className="text-black hover:text-red-500 dark:text-white dark:hover:text-red-500">
                Sing up
              </Link>
              <Link
                href="/costumer/login"
                className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-red-500 transition-colors dark:bg-white dark:text-black dark:hover:bg-red-500 dark:hover:text-white"
              >
                Log in
              </Link>
            </div>
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
