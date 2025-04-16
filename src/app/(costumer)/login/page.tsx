"use client";
"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft, User } from "lucide-react";
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
  Form,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as React from "react";
import { BASE_URL } from "@/constnants";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { jwtDecode } from "jwt-decode";

export type UserType = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  phoneNumber: number;
  address: string;
};
export type DecodedTokenType = {
  user: { email: string; password: string; role: string; _id: string };
};

export default function LoginPage() {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);


  
  const router = useRouter();
  const onSubmit = async (val: z.infer<typeof formSchema>) => {
    // console.log(val);
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        body: JSON.stringify(val),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { token } = await response.json();
      console.log(token);

      localStorage.setItem("token", token);

      const decodeToken: DecodedTokenType = jwtDecode(token);
      console.log(decodeToken);
      if (decodeToken.user.role == "ADMIN") {
        router.push("/admin");
        return;
      } else {
        router.push("/");
      }
    } catch (error: any) {
      console.log((error as Error).message);
    }
  };

  const formSchema = z.object({
    email: z
      .string()
      .email("Please enter a valid email address")
      .min(5)
      .max(50),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const router = useRouter();
  // const onSubmit = async (val: z.infer<typeof formSchema>) => {
  //   try {
  //     // console.log(val);
  //     const user = await loginUser(val);
  //     // if (user:void) {
  //       toast("User successfully register.");
  //     }
  //     router.push("/login");
  //     // console.log(user);
  //   } catch (error) {
  //     console.log((error as Error).message);
  //   }
  // };

  //     const response = await fetch(`${BASE_URL}/users/login`, {
  //       method: "POST",
  //       body: JSON.stringify(val),
  //       headers: {
  //         'Accept': 'application/json',
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     const user = await response.json();
  // console.log(user)
  //     return user;
  //   };

  //   const formSchema = z.object({
  //     email: z
  //       .string()
  //       .email("Please enter a valid email address")
  //       .min(5)
  //       .max(50),
  //     password: z.string().min(8, "Password must be at least 8 characters"),
  //   });

  //   const form = useForm<z.infer<typeof formSchema>>({
  //     resolver: zodResolver(formSchema),
  //     defaultValues: {
  //       email: "",
  //       password: "",
  //     },
  //   });

  // const router = useRouter();
  //   const onSubmit = async (val: z.infer<typeof formSchema>) => {
  //     try {
  //       // console.log(val);
  //       const user = await LoginUser(val);
  //       if (user){
  //         toast ("User successfully register.")
  //       }

  //      const decodeToken = jwtDecode(user.data.token)
  //     //  if(decodeToken.user.role == "ADMIN" ){
  //     //   router.push("/admin");}
  //       console.log(decodeToken);
  //     } catch (error: unknown) {
  //       console.log((error as Error).message);
  //     }
  //   };

  return (
    <div>
      {isMobile && (
        <div className="flex flex-col justify-center">
          <Card className=" w-fit h-auto p-0 m-10">
            <img className="" src="/img-create-acc.png" alt="img-create-acc" />
          </Card>
          <div className="flex flex-col px-(--spacing-9)">
            <Link href={`/`}>
              <Button variant={"outline"} size={"icon"}>
                <ChevronLeft />
              </Button>
            </Link>
            <div className="mb-(--spacing-4)">
              <p className="font-bold text-xl leading-8 my-1">Log in </p>
              <p className="font-normal text-sm text-gray-500 ">
                Log in to enjoy your favorite dishes.
              </p>
            </div>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel />
                          <FormControl>
                            <Input
                              placeholder="Enter your email address"
                              {...field}
                            ></Input>
                          </FormControl>
                          <FormDescription />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter your password"
                              {...field}
                            ></Input>
                          </FormControl>
                          <FormDescription />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <p className="font-normal text-sm leading-5 underline mb-7 hover:text-red-500 pl-3 mt-3">
                    Forget password ?{" "}
                  </p>
                  <Button
                    type="submit"
                    variant={"outline"}
                    className="bg-gray-300 text-slate-800 dark:bg-gray-100 font-normal text-base leading-6  "
                  >
                    Let's go
                  </Button>
                </form>
              </Form>
            </div>

            <div className="flex gap-3 my-6 justify-center">
              <p className="font-normal leading-6 text-sm text-gray-500">
                Don’t have an account?
              </p>
              <Link href={`/signup`}>
                <p className="font-normal text-sm leading-6 text-blue-600 hover:underline hover:text-red-500">
                  {" "}
                  Sign up
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="flex items-center gap-15 justify-around px-10">
          <div className="flex flex-col ">
            <Link href={`/`}>
              <Button variant={"outline"} size={"icon"}>
                <ChevronLeft className="text-black dark:text-white" />
              </Button>
            </Link>
            <div className="mb-(--spacing-8)">
              <p className="font-bold text-4xl leading-8 my-4">Log in </p>
              <p className="font-normal text-lg text-gray-500 ">
                Log in to enjoy your favorite dishes.
              </p>
            </div>

            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel />
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email address"
                              {...field}
                            ></Input>
                          </FormControl>
                          <FormDescription />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel />
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter your password"
                              {...field}
                            ></Input>
                          </FormControl>
                          <FormDescription />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <p className="font-normal text-sm leading-5 underline mb-7 hover:text-red-500 mt-2">
                    Forget password ?{" "}
                  </p>
                  <Button
                    type="submit"
                    variant={"outline"}
                    className="bg-gray-300 text-slate-800 dark:bg-gray-100 font-normal text-base leading-6  "
                  >
                    Let's go
                  </Button>
                </form>
              </Form>
            </div>

            <div className="flex gap-3 my-6 justify-center">
              <p className="font-normal leading-6 text-lg text-gray-500">
                Don’t have an account?
              </p>
              <Link href={`/signup`}>
                <p className="font-normal text-lg leading-6 text-blue-600 hover:underline hover:text-red-500">
                  {" "}
                  Sign up
                </p>
              </Link>
            </div>
          </div>
          <Card className="my-(--spacing-10) w-fit h-auto p-0">
            <img className="" src="/img-create-acc.png" alt="img-create-acc" />
          </Card>
        </div>
      )}
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
