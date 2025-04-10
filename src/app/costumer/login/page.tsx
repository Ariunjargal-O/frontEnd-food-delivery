"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { BASE_URL } from "@/constnants";
import axios from "axios";

export type UserType = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber: number;
  address: string;
};

export default function LoginPage() {
  // const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => {
  //   setIsMobile(isMobileQuery);
  // }, [isMobileQuery]);
  // const formSchema = z.object({
  //   email: z.string().min(5).max(50),
  //   password: z.string().min(8),
  // });

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  // const userData = async () => {
  //   const user = await axios.get(`${BASE_URL}/users/register`);

  //   console.log(user)
  // };
  // const userData = async () => {
  // const dataCate = await fetch(`${BASE_URL}/users/register`,
  //   { method: "GET",

  //        }
  //   );
  //   const category = await dataCate.json();
  // }

  // console.log(userData)

  // const createUser = async () => {
  //   const response = fetch(`${BASE_URL}/users/register`, {
  //     method: "GET",
  //     body: JSON.stringify(val),
  //   });
  //   const user = await response.json({
  //     email: val.email,
  //     password: val.password,
  //   });
  //   return;
  // };
  // const onSubmit = async (val) => {
  //   const user = createUser(val);
  // };


  const data = async() => {
    const response = await fetch(`${BASE_URL}/users/login`);
    const datauser =  await response.json()
  console.log(datauser)
  }


  return (
    <div>
      <div>
        <div className="flex items-center gap-15 justify-around ml-10 w-screen">
          <div className="flex flex-col px-(--spacing-9)">
            <Link href={`/`}>
              <Button variant={"outline"} size={"icon"}>
                <ChevronLeft />
              </Button>
            </Link>
            <div className="mb-(--spacing-8)">
              <p className="font-bold text-4xl leading-8 my-4">Log in </p>
              <p className="font-normal text-lg text-gray-500 ">
                Log in to enjoy your favorite dishes.
              </p>
            </div>
            <Input
              placeholder="Enter your email address"
              className="mb-4"
            ></Input>
            <Input placeholder="Password" className="mb-2"></Input>
            <p className="font-normal text-sm leading-5 underline mb-7 hover:text-red-500 pl-3">
              Forget password ?{" "}
            </p>
            <Button
              variant={"outline"}
              className="bg-gray-300 text-slate-800 dark:bg-gray-100 font-normal text-lg leading-6"
              onClick={data}
            >
              Let's go
            </Button>

            <div className="flex gap-3 my-6 justify-center">
              <p className="font-normal leading-6 text-lg text-gray-500">
                Don’t have an account?
              </p>
              <Link href={`/costumer/signup`}>
                <p className="font-normal text-lg leading-6 text-blue-600 hover:underline hover:text-red-500">
                  {" "}
                  Sign up
                </p>
              </Link>
            </div>
          </div>

          <Card className="my-(--spacing-10) mx-15 w-fit h-auto p-0">
            <img className="" src="/img-create-acc.png" alt="img-create-acc" />
          </Card>
        </div>
      </div>
    </div>
  );
}

/* <Form {...form}>
        <form onSubmit={form.handleSubmit()} className="space-y-8">
          <FormField
            control={form.control}
            username="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form> */

// {isMobile && (
//   <div className="flex flex-col justify-around ">
//     <Card className=" w-fit h-auto p-0 m-10">
//       <img className="" src="/img-create-acc.png" alt="img-create-acc" />
//     </Card>
//     <div className="flex flex-col px-(--spacing-9)">
//       <Link href={`/`}>
//         <Button variant={"outline"} size={"icon"}>
//           <ChevronLeft />
//         </Button>
//       </Link>
//       <div className="mb-(--spacing-4)">
//         <p className="font-bold text-xl leading-8 my-1">Log in </p>
//         <p className="font-normal text-sm text-gray-500 ">
//           Log in to enjoy your favorite dishes.
//         </p>
//       </div>
//       <Input
//         placeholder="Enter your email address"
//         className="mb-2"
//       ></Input>
//       <Input placeholder="Password" className="mb-2"></Input>
//       <p className="font-normal text-sm leading-5 underline mb-7 hover:text-red-500 pl-3">
//         Forget password ?{" "}
//       </p>
//       <Link href={`/login`}>
//         {" "}
//         <Button
//           variant={"outline"}
//           className="bg-gray-300 text-slate-800 dark:bg-gray-100 font-normal text-base leading-6  "
//         >
//           Let's go
//         </Button>
//       </Link>

//       <div className="flex gap-3 my-6 justify-center">
//         <p className="font-normal leading-6 text-sm text-gray-500">
//           Don’t have an account?
//         </p>
//         <Link href={`/costumer/signup`}>
//           <p className="font-normal text-sm leading-6 text-blue-600 hover:underline hover:text-red-500">
//             {" "}
//             Sign up
//           </p>
//         </Link>
//       </div>
//     </div>
//   </div>
// )}
// {!isMobile && (
//   <div>
//     <div className="flex items-center gap-15 justify-around ml-10 w-screen">
//       <div className="flex flex-col px-(--spacing-9)">
//         <Link href={`/`}>
//           <Button variant={"outline"} size={"icon"}>
//             <ChevronLeft />
//           </Button>
//         </Link>
//         <div className="mb-(--spacing-8)">
//           <p className="font-bold text-4xl leading-8 my-4">Log in </p>
//           <p className="font-normal text-lg text-gray-500 ">
//             Log in to enjoy your favorite dishes.
//           </p>
//         </div>
//         <Input
//           placeholder="Enter your email address"
//           className="mb-4"
//         ></Input>
//         <Input placeholder="Password" className="mb-2"></Input>
//         <p className="font-normal text-sm leading-5 underline mb-7 hover:text-red-500 pl-3">
//           Forget password ?{" "}
//         </p>
//         <Button
//           variant={"outline"}
//           className="bg-gray-300 text-slate-800 dark:bg-gray-100 font-normal text-lg leading-6  "
//         >
//           Let's go
//         </Button>

//         <div className="flex gap-3 my-6 justify-center">
//           <p className="font-normal leading-6 text-lg text-gray-500">
//             Don’t have an account?
//           </p>
//           <Link href={`/costumer/signup`}>
//             <p className="font-normal text-lg leading-6 text-blue-600 hover:underline hover:text-red-500">
//               {" "}
//               Sign up
//             </p>
//           </Link>
//         </div>
//       </div>

//       <Card className="my-(--spacing-10) mx-15 w-fit h-auto p-0">
//         <img
//           className=""
//           src="/img-create-acc.png"
//           alt="img-create-acc"
//         />
//       </Card>
//     </div>
//   </div>
// )}
