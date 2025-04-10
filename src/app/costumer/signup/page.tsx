"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function SingupPage() {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);


  
  return (
    <div>
      {isMobile && (
        <div className="flex flex-col justify-center">
          <Card className=" w-fit h-auto p-0 m-10">
            <img className="" src="/img-create-acc.png" alt="img-create-acc" />
          </Card>
          <div className="flex flex-col px-(--spacing-9)">
            <Link href={`/`}>
              <Button variant={"outline"} size={"icon"} >
                <ChevronLeft className="text-black dark:text-white" />
              </Button>
            </Link>
            <div className="mb-(--spacing-3)">
              <p className="font-bold text-xl leading-4 my-4">
                Create your account{" "}
              </p>
              <p className="font-normal text-sm text-gray-500 ">
                Sign up to explore your favorite dishes.
              </p>
            </div>
            <Input
              placeholder="Enter your email address"
              className="mb-6"

            ></Input>
            <Button
              variant={"outline"}
              className="bg-gray-300 text-slate-800 dark:bg-gray-100 font-normal text-base leading-6  "
            >
              Let's go
            </Button>

            <div className="flex gap-3 my-6 justify-center">
              <p className="font-normal leading-6 text-sm text-gray-500">
                Already have an account?
              </p>
              <Link href={`/costumer/login`}>
                <p className="font-normal text-sm leading-6 text-blue-600 hover:underline hover:text-red-500">
                  {" "}
                  Log in
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="flex items-center gap-15 justify-around ml-30">
          <div className="flex flex-col px-(--spacing-9)">
            <Link href={`/`}>
              <Button variant={"outline"} size={"icon"}>
                <ChevronLeft className="text-black dark:text-white" />
              </Button>
            </Link>
            <div className="mb-(--spacing-8)">
              <p className="font-bold text-4xl leading-8 my-4">
                Create your account{" "}
              </p>
              <p className="font-normal text-lg text-gray-500 ">
                Sign up to explore your favorite dishes.
              </p>
            </div>
            <Input
              placeholder="Enter your email address"
              className="mb-6"
            ></Input>
            <Button
              variant={"outline"}
              className="bg-gray-300 text-slate-800 dark:bg-gray-100 font-normal text-lg leading-6  "
            >
              Let's go
            </Button>

            <div className="flex gap-3 my-6 justify-center">
              <p className="font-normal leading-6 text-lg text-gray-500">
                Already have an account?
              </p>
              <Link href={`/costumer/login`}>
                <p className="font-normal text-lg leading-6 text-blue-600 hover:underline hover:text-red-500">
                  {" "}
                  Log in
                </p>
              </Link>
            </div>
          </div>
          <Card className="my-(--spacing-10) mx-15 w-fit h-auto p-0">
            <img className="" src="/img-create-acc.png" alt="img-create-acc" />
          </Card>
        </div>
      )}
    </div>
  );
}
