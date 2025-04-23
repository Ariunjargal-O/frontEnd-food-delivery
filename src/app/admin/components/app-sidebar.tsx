import * as React from "react";
import {
  GalleryVerticalEnd,
  LayoutDashboard,
  LayoutList,
  Settings,
  Truck,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Food menu",
      icon: <LayoutDashboard />,
      url: "/admin",
    },
    {
      title: "Orders",
      icon: <Truck />,
      url: "/admin/orders",
    },
    {
      title: "Settings",
      icon: <Settings />,
      url: "/admin/settings",
    },
  ],
};

interface NavItem {
  title: string;
  icon: React.ReactNode;
  url: string;
}

// export function AppSidebar({ ...props}: React.ComponentProps<typeof Sidebar>, onNavigate) {
// interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
//   onNavigate: (title: string) => void;
// }

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={"/admin"}>
                <div className="flex gap-2 my-7">
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
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-7 ">
            {data.navMain.map((item: NavItem) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton className=" hover:bg-red-100 px-4 py-5">
                <a href={item.url}><div className="gap-3 flex items-center">
                    <p className="font-bold leading-5 text-2xl ">{item.icon}</p>
                    <p className="font-bold leading-5 text-2xl cursor-pointer">
                      {item.title}
                    </p>
                  </div></a>
                  
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
