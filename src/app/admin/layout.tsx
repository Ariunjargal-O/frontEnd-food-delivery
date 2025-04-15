"use client";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { jwtDecode } from "jwt-decode";
import { TypeScriptConfig } from "next/dist/server/config-shared";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";


export type DecodedTokenType = {
  user: {
    email: string;
    password: string;
    role: string;
    _id: string;
    token: string;
  };
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <section>
      
      {isMobile && (
        <div>
          <SidebarProvider
            style={
              {
                "--sidebar-width": "19rem",
              } as React.CSSProperties
            }
          >
            <AppSidebar   />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbSeparator className="hidden md:block" />
                  </BreadcrumbList>
                </Breadcrumb>
              </header>
              <main>
             
                {children}
              </main>
            </SidebarInset>
          </SidebarProvider>
        </div>
      )}
      {!isMobile && (
        <div>
          <SidebarProvider
            style={
              {
                "--sidebar-width": "19rem",
              } as React.CSSProperties
            }
          >
            <AppSidebar  />
            <SidebarInset>
              {" "}
              <main>
             
                {children}
              </main>
            </SidebarInset>
          </SidebarProvider>
        </div>
      )}
    </section>
  );
}
