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
  Form,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as React from "react";
import { BASE_URL } from "@/constnants";
import { useRouter } from "next/navigation";
import { toast } from "sonner"


export default function SingupPage() {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  const createUser = async (val: z.infer<typeof formSchema>) => {
    // console.log(val);
    console.log(BASE_URL);
    
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      body: JSON.stringify(val),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const user = await response.json();

    return user;
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

  const router = useRouter();
  const onSubmit = async (val: z.infer<typeof formSchema>) => {
    try {
      // console.log(val);
      const user = await createUser(val);
      if (user){
        toast ("User successfully register.")
      }


      router.push("/login");
      console.log(user);
    } catch (error: unknown) {
      console.log((error as Error).message);
    }
  };

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
                            className="mb-6"
                          ></Input>
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  variant={"outline"}
                  className="bg-gray-300 text-slate-800 dark:bg-gray-100 font-normal text-base leading-6  "
                >
                  Let's go
                </Button>
              </form>
            </Form>

            <div className="flex gap-3 my-6 justify-center">
              <p className="font-normal leading-6 text-sm text-gray-500">
                Already have an account?
              </p>
              <Link href={`/login`}>
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
        <div className="flex items-center gap-15 justify-around px-10">
          <div className="flex flex-col ">
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

                <Button
                  type="submit"
                  variant={"outline"}
                  className="bg-gray-300 mt-6 text-slate-800 dark:bg-gray-100 font-normal text-lg leading-6  "
                >
                  Let's go
                </Button>
              </form>
            </Form>

            <div className="flex gap-3 my-6 justify-center">
              <p className="font-normal leading-6 text-lg text-gray-500">
                Already have an account?
              </p>
              <Link href={`/login`}>
                <p className="font-normal text-lg leading-6 text-blue-600 hover:underline hover:text-red-500">
                  {" "}
                  Log in
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
