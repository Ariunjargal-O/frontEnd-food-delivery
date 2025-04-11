import * as React from "react"
import { GalleryVerticalEnd, LayoutList, Settings, Truck } from "lucide-react"

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
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Food menu",
      icon: <LayoutList/>
    },
    {
      title: "Orders",
      icon: <Truck/>
    },
    {
      title: "Settings",
      icon: <Settings/>
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}
  >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg"  asChild
            >
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
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent  >
        <SidebarGroup>
          <SidebarMenu className="gap-7">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                 <div className="gap-3">
                 <p className="font-bold leading-5 text-2xl">
                    {item.icon}
                  </p>
                  <p className="font-bold leading-5 text-2xl">
                   {item.title}
                  </p>
                 </div>
                </SidebarMenuButton>
                
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
