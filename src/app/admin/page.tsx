"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AdminFoodMenuSection } from "./components/FoodMenu";
import { AdminOrderSec } from "./components/Orders";
import { AdminSettings } from "./components/Settings";
import { useState } from "react";
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
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const [activePage, setActivePage] = useState("FoodMenu");

  const renderPage = () => {
    switch (activePage) {
      case "FoodMenu":
        return <AdminFoodMenuSection />;
      case "Orders":
        return <AdminOrderSec />;
      case "Settings":
        return <AdminSettings />;
      default:
        return <AdminFoodMenuSection />;
    }
  };

  return (
    <div className="p-6">
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

      <div className="flex">
        <SidebarProvider>
          <div>
            <AppSidebar onNavigate={setActivePage}></AppSidebar>
            <main className="w-full">{renderPage()}</main>
          </div>
        </SidebarProvider>

        {/* <AdminOrderSec/>
          <AdminFoodMenuSection/> */}
      </div>
    </div>
  );
}
// {/* <div className=" mt-20">
// {/* <AdminFoodMenuSection/>
//  */}
// <AdminOrderSec />
// <AdminSettings />
// </div> */}
