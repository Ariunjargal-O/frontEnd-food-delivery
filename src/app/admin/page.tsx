"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FoodmenuSection } from "./components/FoodMenu";

export default function AdminPage() {
  return (
    <div className="position p-6">
      <Avatar className="absolute right-10 top-6">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

<div className=" mt-20">
<FoodmenuSection/>
</div>
    </div>
  );
}
