import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { icons, Pencil, Plus, Trash, X } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export const FoodmenuSection = () => {
  return (
    <div className="flex gap-5 flex-col">
      <Card className="p-6">
        <h1 className="font-bold text-2xl leading-7">Dishes category</h1>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="rounded-2xl hover:bg-red-100">
            Alldishes<Badge className="rounded-2xl">112</Badge>
          </Button>
          <Button variant="outline" className="rounded-2xl hover:bg-red-100">
            Alldishes<Badge className="rounded-2xl">112</Badge>
          </Button>
          <Button
            variant="outline"
            className="bg-red-500 rounded-2xl hover:bg-red-900"
          >
            <Plus className="text-white" size="icon " />
          </Button>
        </div>
      </Card>
      <Card className="p-6">
        <h2 className="text-2xl font-bold leading-7">
          SALADS<span className="pl-3">(6)</span>
        </h2>

        <div className="flex flex-wrap gap-5">
          <Card className="w-[270px] h-[240px] border-red-500 border-dashed p-4">
            <CardContent className="flex justify-center my-auto">
              <Button
                variant="outline"
                className="bg-red-500 rounded-2xl hover:bg-red-900"
              >
                <Plus className="text-white" size="icon " />
              </Button>
            </CardContent>
          </Card>
          <Card className="w-[270px] h-[240px] p-4">
            <CardContent className="w-fit relative p-0 ">
              <div className="relative mb-2">
                <img
                  className="object-cover w-[240px] h-[140px] rounded-xl relative"
                  src="/Product-Image2.png"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="absolute z-10 right-4 bottom-3 rounded-2xl  hover:bg-red-100"
                    >
                      <Pencil />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="[&_[pinput]:bg-black">
                    <DialogHeader>
                      <DialogTitle>
                        <p className="font-bold text-lg leading-7">
                          Dishes info
                        </p>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-between">
                      <p className="font-normal text-sm leading-4 text-gray-400">
                        Dish Name
                      </p>{" "}
                      <Input></Input>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-normal text-sm leading-4 text-gray-400">
                        Dish category
                      </p>
                      <div>
                        <Select>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Choose food a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-normal text-sm leading-4 text-gray-400">
                        Ingredients
                      </p>{" "}
                      <Input></Input>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-normal text-sm leading-4 text-gray-400">
                        Price
                      </p>{" "}
                      <Input></Input>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-normal text-sm leading-4 text-gray-400">
                        Image
                      </p>{" "}
                      <Input></Input>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" className="hover:bg-red-100">
                        <Trash />
                      </Button>
                      <Button>Save Changes</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <CardHeader className="p-0">
                <div className="flex justify-between flex-col ">
                  <div className="flex justify-between ">
                    <h3 className="text-red-500 text-lg font-semibold">
                      foodName
                    </h3>
                    <p className="text-base leading-4 font-normal">$123</p>
                  </div>
                  <p className="text-base leading-4 font-normal">
                    zsxdcfvgbhjknalsfmksjdnsdnkvn sdg
                  </p>
                </div>
              </CardHeader>
            </CardContent>
          </Card>
        </div>
      </Card>
    </div>
  );
};

{
  /* <CardContent>
<div className="flex flex-col gap-3 ">
  <div className="position">
    <img
      src="/Product-Image2.png"
      alt="Sample Image"
      className="object-cover w-[240px] h-[140px] rounded-xl position"
    />
    <Button className="absolute b-4 right-3 ">dsg</Button>{" "}
  </div>
  <div>
    <div className="flex justify-between">
      <h3 className="text-red-500 text-lg font-semibold">
        foodName
      </h3>
      <p className="text-base leading-4 font-normal">$123</p>
    </div>
    <p className="text-base leading-4 font-normal">
      zsxdcfvgbhjknalsfmksjdnsdnkvn sdg
    </p>
  </div>
</div> */
}
