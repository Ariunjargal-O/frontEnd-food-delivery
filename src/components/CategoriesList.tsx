"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CategoriesList = () => {
  const isMobileQuery = useMediaQuery({ maxWidth: 639 });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <div>
      {isMobile && (
        <div>
          <div>
            <h2 className="font-semibold text-xl leading-9 pt-(--spacing-4) px-(--spacing-7)">
              Categories
            </h2>
            <div className=" flex px-(--spacing-7) gap-3 items-center pt-2">
              <Button className="w-8 h-4" variant={"outline"}>
                <ChevronLeft />
              </Button>
              <div className="flex overflow-scroll gap-2">
                <Link href={`#`}>
                  <Badge
                    className="text-sm font-normal hover:bg-red-500 rounded-2xl "
                    variant="outline"
                  >
                    Badge
                  </Badge>
                </Link>
                <Link href={`#`}>
                  <Badge
                    className="text-sm font-normal hover:bg-red-500 rounded-2xl "
                    variant="outline"
                  >
                    Badge
                  </Badge>
                </Link>
              </div>
              <Button className="w-8 h-4" variant={"outline"}>
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      )}

      {!isMobile && (
        <div>
          <h2 className="font-semibold text-3xl leading-9 pt-(--spacing-8) px-(--spacing-10)">
            Categories
          </h2>
          <div className=" flex px-(--spacing-10) gap-3 items-center justify-between pt-2">
            <Button className="w-8 h-4" variant={"outline"}>
              <ChevronLeft />
            </Button>
            <div className="flex gap-3 overflow-scroll">
              {" "}
              <Link href={`#`}>
                <Badge
                  className="text-base font-normal hover:bg-red-500 rounded-2xl"
                  variant="outline"
                >
                  Badge
                </Badge>
              </Link>
              <Link href={`#`}>
                <Badge
                  className="text-base font-normal hover:bg-red-500 rounded-2xl"
                  variant="outline"
                >
                  Badge
                </Badge>
              </Link>
              <Link href={`#`}>
                <Badge
                  className="text-base font-normal hover:bg-red-500 rounded-2xl"
                  variant="outline"
                >
                  Badge
                </Badge>
              </Link>
            </div>
            <Button className="w-8 h-4" variant={"outline"}>
              <ChevronRight />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
