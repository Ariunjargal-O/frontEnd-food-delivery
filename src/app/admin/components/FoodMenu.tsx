"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { icons, ImageIcon, Pencil, Plus, Trash, X } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BASE_URL } from "@/constnants";
import { useEffect, useState, PropsWithChildren } from "react";
import { createContext } from "vm";
import { any } from "zod";

export type CateFoodType = {
  categoryName: string;
  _id: string;
  foods: FoodType[];
};

export type CateName = {
  categoryName: string | any;
};

export type FoodType = {
  categoryId: string;
  foodName: string;
  image: string;
  ingredients: string[];
  price: number;
  _id: string;
};

type ItemType = {
  food:FoodType;
  count:number;
}

type ContextType ={
  item:ItemType[];
  totalPrice:number;
  addItem:(value:ItemType) => void; // yu ch butsaahgui buyu set ni void bna
removeItem:(value:ItemType) => void;
setOpen:(value:boolean) => void
}



export const AdminFoodMenuSection = () => {
  const [category, setCategory] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    const getdataCate = async () => {
      const res = await fetch(`${BASE_URL}/food-categories/with-foods`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const categoriesList = await res.json();
      console.log(categoriesList);
      setCategory(categoriesList.categories);
      // setFood(categoriesList.categories);
      // console.log(categoriesList.categories);
    };
    getdataCate();
  }, []);
  console.log(category);





 
  return (
    <div className="flex gap-5 flex-col mt-5">
      <Card className="p-6">
        <h1 className="font-bold text-2xl leading-7">Dishes category</h1>
        <div className="flex flex-wrap gap-4">
          {category.map((category: CateFoodType) => {
            return (
              <div key={category._id}>
                <Button
                  variant="outline"
                  className="rounded-2xl hover:bg-red-100"
                >
                  {category.categoryName}
                  <Badge className="rounded-2xl">{category.foods.length}</Badge>
                </Button>
              </div>
            );
          })}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-red-500 rounded-2xl hover:bg-red-900"
              >
                <Plus className="text-white" size="icon " />
              </Button>
            </DialogTrigger>
            <DialogContent className="flex gap-8 flex-col">
              <DialogHeader>
                <DialogTitle className="pb-4">
                  <p className="font-bold text-lg leading-7">
                    Add new category
                  </p>
                </DialogTitle>
              </DialogHeader>

              <div className="flex flex-col gap-3">
                <p className="font-semibold leading-[14px] text-base">
                  Category name
                </p>
                <Input
                  type=""
                  placeholder="List ingredType category name..."
                  className=""
                ></Input>
              </div>

              <Button>Add category</Button>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
      <div className="">
        {category.map((category: CateFoodType) => {
          return (
            <Card className="p-6 flex mb-5" key={category._id}>
              <div key={category._id}>
                {" "}
                <h2 className="text-2xl font-bold leading-7">
                  {category.categoryName}
                  <span className="pl-3">({category.foods.length})</span>
                </h2>
              </div>
              <div className="flex gap-5 flex-row">
                <div>
                  <Card className="w-[270px] h-[240px] border-red-500 border-dashed p-4">
                    <CardContent className="flex justify-center my-auto">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="bg-red-500 rounded-2xl hover:bg-red-900"
                          >
                            <Plus className="text-white" size="icon " />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="gap-8">
                          <DialogHeader>
                            <DialogTitle className="pb-2">
                              <p className="font-bold text-lg leading-7">
                                Add new Dish to <span>Appetizers</span>
                              </p>
                            </DialogTitle>
                          </DialogHeader>
                          <div className="flex justify-between">
                            <div className="flex flex-col gap-3 ">
                              <p className="font-semibold leading-[14px] text-base">
                                Food name
                              </p>
                              <Input className="w-[220px]"
                                type="text"
                                placeholder="Type food name"
                              ></Input>
                            </div>
                            <div className="flex flex-col gap-3 ">
                              <p className="font-semibold leading-[14px] text-base">
                                Food price
                              </p>
                              <Input className="w-[220px]"
                                type="text"
                                placeholder="Enter price..."
                              ></Input>
                            </div>
                          </div>
                          <div className="flex flex-col gap-3">
                            <p className="font-semibold leading-[14px] text-base">
                              Ingredients
                            </p>
                            <Input
                              type=""
                              placeholder="List ingredients..."
                              className="h-[90px]"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-3">
                            <p className="font-semibold leading-[14px] text-base">
                              Food image
                            </p>

                            <Button
                              variant="outline"
                              className="h-[138px] border-2 border-dashed border-blue-300 rounded-2xl bg-blue-50 items-center flex justify-center hover:bg-red-100"
                            >
                              <Input type="file" className="hidden"></Input>
                              <div className="flex flex-col justify-self-center ">
                                <div className="rounded-full border-0 mx-auto bg-white h-10 w-10 flex justify-center items-center">
                                  <ImageIcon size={30} />
                                </div>
                                <p className="font-medium text-base leading-5 pt-3">
                                  Choose a file or drag & drop it here
                                </p>
                              </div>
                            </Button>
                          </div>

                          <Button>Add dish</Button>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex flex-row gap-5 ">
                  {category.foods.map((foods: FoodType) => {
                    return (
                      <div key={foods._id}>
                        <Card className="w-[270px] h-[240px] p-4">
                          <CardContent className="w-fit relative p-0 ">
                            <div className="relative mb-2">
                              <img
                                className="object-cover w-[240px] h-[140px] rounded-xl relative"
                                src={foods.image}
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
                                <DialogContent className="[&_Textarea]:w-[288px]">
                                  <DialogHeader>
                                    <DialogTitle className="pb-2">
                                      <p className="font-bold text-lg leading-7">
                                        Dishes info
                                      </p>
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className="flex justify-between">
                                    <p className="font-normal text-sm leading-4 text-gray-400">
                                      Dish Name
                                    </p>{" "}
                                    <Textarea
                                      value={foods.foodName}
                                      onChange={(e) => setText(e.target.value)}
                                    >
                                      {" "}
                                      hoolnoo nre
                                    </Textarea>
                                  </div>
                                  <div className="flex justify-between">
                                    <p className="font-normal text-sm leading-4 text-gray-400">
                                      Dish category
                                    </p>
                                    <div>
                                      {/* <Select>
                                        <SelectTrigger className="w-[288px]">
                                          <SelectValue
                                            placeholder={category.categoryName}
                                          />
                                        </SelectTrigger>
                                        <SelectContent>
                                          {category.map((cat: CateFoodType) => (
                                            <SelectItem
                                              key={cat._id}
                                              value={cat.categoryName}
                                            >
                                              {cat.categoryName}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select> */}
                                    </div>
                                  </div>
                                  <div className="flex justify-between">
                                    <p className="font-normal text-sm leading-4 text-gray-400">
                                      Ingredients
                                    </p>{" "}
                                    <Textarea
                                      value={foods.ingredients}
                                      onChange={(e) => setText(e.target.value)}
                                    >
                                      hoolnii orst
                                    </Textarea>
                                  </div>
                                  <div className="flex justify-between">
                                    <p className="font-normal text-sm leading-4 text-gray-400">
                                      Price
                                    </p>{" "}
                                    <Textarea
                                      value={foods.price}
                                      onChange={(e) => setText(e.target.value)}
                                    >
                                      une
                                    </Textarea>
                                  </div>
                                  <div className="flex justify-between">
                                    <p className="font-normal text-sm leading-4 text-gray-400">
                                      Image
                                    </p>{" "}
                                    <Image
                                      alt="foodimage"
                                      src={foods.image}
                                      width={210}
                                      height={160}
                                      className="h-[160px]"
                                    ></Image>
                                  </div>
                                  <div className="flex justify-between">
                                    <Button
                                      variant="outline"
                                      className="hover:bg-red-100"
                                    >
                                      <Trash />
                                    </Button>
                                    <Button type="submit">Save Changes</Button>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                            <CardHeader className="p-0">
                              <div className="flex justify-between flex-col ">
                                <div className="flex justify-between ">
                                  <h3 className="text-red-500 text-lg font-semibold">
                                    {foods.foodName}
                                  </h3>
                                  <p className="text-base leading-4 font-normal">
                                    ${foods.price}
                                  </p>
                                </div>

                                <p className="text-base leading-4 font-normal">
                                  {foods.ingredients}
                                </p>
                              </div>
                            </CardHeader>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

// {
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
// }

{
  /* <div className="flex gap-5 flex-row">
<div>
  <Card className="w-[270px] h-[240px] border-red-500 border-dashed p-4">
    <CardContent className="flex justify-center my-auto">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-red-500 rounded-2xl hover:bg-red-900"
          >
            <Plus className="text-white" size="icon " />
          </Button>
        </DialogTrigger>
        <DialogContent className="gap-8">
          <DialogHeader>
            <DialogTitle className="pb-2">
              <p className="font-bold text-lg leading-7">
                Add new Dish to <span>Appetizers</span>
              </p>
            </DialogTitle>
          </DialogHeader>
          <div className="flex gap-8">
            <div className="flex flex-col gap-3 ">
              <p className="font-semibold leading-[14px] text-base">
                Food name
              </p>
              <Input type="" placeholder="Type food name"></Input>
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="font-semibold leading-[14px] text-base">
                Food price
              </p>
              <Input type="" placeholder="Enter price..."></Input>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold leading-[14px] text-base">
              Ingredients
            </p>
            <Input
              type=""
              placeholder="List ingredients..."
              className="h-[90px]"
            ></Input>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold leading-[14px] text-base">
              Food image
            </p>

            <Button
              variant="outline"
              className="h-[138px] border-2 border-dashed border-blue-300 rounded-2xl bg-blue-50 items-center flex justify-center hover:bg-red-100"
            >
              <Input type="file" className="hidden"></Input>
              <div className="flex flex-col justify-self-center ">
                <div className="rounded-full border-0 mx-auto bg-white h-10 w-10 flex justify-center items-center">
                  <ImageIcon size={30} />
                </div>
                <p className="font-medium text-base leading-5 pt-3">
                  Choose a file or drag & drop it here
                </p>
              </div>
            </Button>
          </div>

          <Button>Add dish</Button>
        </DialogContent>
      </Dialog>
    </CardContent>
  </Card>
</div>
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
        <DialogContent className="[&_input]:w-[288px]">
          <DialogHeader>
            <DialogTitle className="pb-2">
              <p className="font-bold text-lg leading-7">
                Dishes info
              </p>
            </DialogTitle>
          </DialogHeader>
          <div className="flex justify-between">
            <p className="font-normal text-sm leading-4 text-gray-400">
              Dish Name
            </p>{" "}
            <Input type="text"></Input>
          </div>
          <div className="flex justify-between">
            <p className="font-normal text-sm leading-4 text-gray-400">
              Dish category
            </p>
            <div>
              <Select>
                <SelectTrigger className="w-[288px]">
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
            <Input type="text" className="h-fit"></Input>
          </div>
          <div className="flex justify-between">
            <p className="font-normal text-sm leading-4 text-gray-400">
              Price
            </p>{" "}
            <Input type="text"></Input>
          </div>
          <div className="flex justify-between">
            <p className="font-normal text-sm leading-4 text-gray-400">
              Image
            </p>{" "}
            <Input className="h-[160px]" type="file"></Input>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" className="hover:bg-red-100">
              <Trash />
            </Button>
            <Button type="submit">Save Changes</Button>
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
</div> */
}




// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { icons, ImageIcon, Pencil, Plus, Trash, X } from "lucide-react";
// import Image from "next/image";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { BASE_URL } from "@/constnants";
// import { useEffect, useState } from "react";

// export type CateFoodType = {
//   categoryName: string;
//   _id: string;
//   foods: FoodType[];
// };

// export type CateName = {
//   categoryName: string | any;
// };

// export type FoodType = {
//   categoryId: string;
//   foodName: string;
//   image: string;
//   ingredients: string[];
//   price: number;
//   _id: string;
// };

// type ItemType = {
//   food: FoodType;
//   count: number;
// };

// export const AdminFoodMenuSection = () => {
//   const [category, setCategory] = useState<CateFoodType[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [refreshData, setRefreshData] = useState(false);

//   // States for new dish
//   const [newDishName, setNewDishName] = useState("");
//   const [newDishPrice, setNewDishPrice] = useState("");
//   const [newDishIngredients, setNewDishIngredients] = useState("");
//   const [newDishImage, setNewDishImage] = useState<File | null>(null);
//   const [selectedCategoryId, setSelectedCategoryId] = useState("");
//   const [openDialog, setOpenDialog] = useState(false);

//   // Fetch categories and foods
//   useEffect(() => {
//     const getdataCate = async () => {
//       try {
//         const res = await fetch(`${BASE_URL}/food-categories/with-foods`, {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         const categoriesList = await res.json();
//         setCategory(categoriesList.categories);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     getdataCate();
//   }, [refreshData]);

//   // Handle image file selection
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     const file: File | null = e.target.files ? e.target.files[0] : null;
//     setNewDishImage(file);
//   };

//   // Handle adding a new dish
//   const handleAddDish = async (categoryId: string): Promise<void> => {
//     setIsLoading(true);
//     try {
//       // Create form data to handle file upload
//       const formData = new FormData();
//       formData.append("foodName", newDishName);
//       formData.append("price", newDishPrice);

//       // Convert comma-separated ingredients to array
//       const ingredientsArray: string[] = newDishIngredients
//         .split(",")
//         .map((item: string) => item.trim());

//       formData.append("ingredients", JSON.stringify(ingredientsArray));
//       formData.append("categoryId", categoryId);

//       if (newDishImage) {
//         formData.append("image", newDishImage);
//       }

//       const response: Response = await fetch(`${BASE_URL}/foods`, {
//         method: "POST",
//         body: formData,
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         // Note: Don't set Content-Type header when using FormData
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to add dish: ${response.statusText}`);
//       }

//       // Reset form fields
//       setNewDishName("");
//       setNewDishPrice("");
//       setNewDishIngredients("");
//       setNewDishImage(null);
//       setOpenDialog(false);

//       // Refresh data to show the new dish
//       setRefreshData((prev: boolean) => !prev);
//     } catch (error: unknown) {
//       console.error("Error adding dish:", error);
//       alert("Failed to add dish. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle opening the add dish dialog for a specific category
//   const openAddDishDialog = (categoryId: string): void => {
//     setSelectedCategoryId(categoryId);
//     setOpenDialog(true);
//   };

//   return (
//     <div className="flex gap-5 flex-col mt-5">
//       <Card className="p-6">
//         <h1 className="font-bold text-2xl leading-7">Dishes category</h1>
//         <div className="flex flex-wrap gap-4">
//           {category.map((category: CateFoodType) => {
//             return (
//               <div key={category._id}>
//                 <Button
//                   variant="outline"
//                   className="rounded-2xl hover:bg-red-100"
//                 >
//                   {category.categoryName}
//                   <Badge className="rounded-2xl ml-2">
//                     {category.foods.length}
//                   </Badge>
//                 </Button>
//               </div>
//             );
//           })}

//           {/* Add category dialog */}
//           <Dialog>
//             <DialogTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="bg-red-500 rounded-2xl hover:bg-red-900"
//               >
//                 <Plus className="text-white" size="icon " />
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="flex gap-8 flex-col">
//               <DialogHeader>
//                 <DialogTitle className="pb-4">
//                   <p className="font-bold text-lg leading-7">
//                     Add new category
//                   </p>
//                 </DialogTitle>
//               </DialogHeader>

//               <div className="flex flex-col gap-3">
//                 <p className="font-semibold leading-[14px] text-base">
//                   Category name
//                 </p>
//                 <Input placeholder="Type category name..." className=""></Input>
//               </div>

//               <Button>Add category</Button>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </Card>

//       {/* Display categories and foods */}
//       <div className="">
//         {category.map((category: CateFoodType) => {
//           return (
//             <Card className="p-6 mb-5" key={category._id}>
//               <div>
//                 <h2 className="text-2xl font-bold leading-7 mb-4">
//                   {category.categoryName}
//                   <span className="pl-3">({category.foods.length})</span>
//                 </h2>
//               </div>
//               <div className="flex gap-5 flex-wrap">
//                 {/* Add dish card */}
//                 <Card className="w-[270px] h-[240px] border-red-500 border-dashed p-4">
//                   <CardContent className="flex justify-center items-center h-full">
//                     <Button
//                       variant="outline"
//                       className="bg-red-500 rounded-2xl hover:bg-red-900"
//                       onClick={() => openAddDishDialog(category._id)}
//                     >
//                       <Plus className="text-white" size="icon" />
//                     </Button>
//                   </CardContent>
//                 </Card>

//                 {/* Display foods in this category */}
//                 {category.foods.map((food: FoodType) => (
//                   <Card className="w-[270px] h-[240px] p-4" key={food._id}>
//                     <CardContent className="w-fit relative p-0">
//                       <div className="relative mb-2">
//                         <img
//                           className="object-cover w-[240px] h-[140px] rounded-xl relative"
//                           src={food.image}
//                           alt={food.foodName}
//                         />
//                         <Dialog>
//                           <DialogTrigger asChild>
//                             <Button
//                               variant="outline"
//                               className="absolute z-10 right-4 bottom-3 rounded-2xl hover:bg-red-100"
//                             >
//                               <Pencil />
//                             </Button>
//                           </DialogTrigger>
//                           <DialogContent className="[&_Textarea]:w-[288px]">
//                             <DialogHeader>
//                               <DialogTitle className="pb-2">
//                                 <p className="font-bold text-lg leading-7">
//                                   Edit Dish Info
//                                 </p>
//                               </DialogTitle>
//                             </DialogHeader>
//                             {/* Edit dialog content */}
//                             <div className="flex justify-between">
//                               <p className="font-normal text-sm leading-4 text-gray-400">
//                                 Dish Name
//                               </p>
//                               <Textarea defaultValue={food.foodName} />
//                             </div>
//                             <div className="flex justify-between">
//                               <p className="font-normal text-sm leading-4 text-gray-400">
//                                 Ingredients
//                               </p>
//                               <Textarea
//                                 defaultValue={food.ingredients.join(", ")}
//                               />
//                             </div>
//                             <div className="flex justify-between">
//                               <p className="font-normal text-sm leading-4 text-gray-400">
//                                 Price
//                               </p>
//                               <Textarea defaultValue={food.price} />
//                             </div>
//                             <div className="flex justify-between">
//                               <p className="font-normal text-sm leading-4 text-gray-400">
//                                 Image
//                               </p>
//                               <div className="h-[160px] w-[288px]">
//                                 <img
//                                   src={food.image}
//                                   alt={food.foodName}
//                                   className="h-full w-full object-cover rounded-md"
//                                 />
//                               </div>
//                             </div>
//                             <div className="flex justify-between">
//                               <Button
//                                 variant="outline"
//                                 className="hover:bg-red-100"
//                               >
//                                 <Trash />
//                               </Button>
//                               <Button type="submit">Save Changes</Button>
//                             </div>
//                           </DialogContent>
//                         </Dialog>
//                       </div>
//                       <CardHeader className="p-0">
//                         <div className="flex justify-between flex-col">
//                           <div className="flex justify-between">
//                             <h3 className="text-red-500 text-lg font-semibold">
//                               {food.foodName}
//                             </h3>
//                             <p className="text-base leading-4 font-normal">
//                               ${food.price}
//                             </p>
//                           </div>
//                           <p className="text-base leading-4 font-normal">
//                             {food.ingredients.join(", ")}
//                           </p>
//                         </div>
//                       </CardHeader>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </Card>
//           );
//         })}
//       </div>

//       {/* Global Add Dish Dialog */}
//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         <DialogContent className="gap-6 max-w-md">
//           <DialogHeader>
//             <DialogTitle className="pb-2">
//               <p className="font-bold text-lg leading-7">
//                 Add new Dish to{" "}
//                 {
//                   (
//                     category.find((cat) => cat._id === selectedCategoryId) as
//                       | CateFoodType
//                       | undefined
//                   )?.categoryName
//                 }
//               </p>
//             </DialogTitle>
//           </DialogHeader>

//           <div className="grid grid-cols-2 gap-4">
//             <div className="flex flex-col gap-2">
//               <p className="font-semibold text-base">Food name</p>
//               <Input
//                 placeholder="Type food name"
//                 value={newDishName}
//                 onChange={(e) => setNewDishName(e.target.value)}
//               />
//             </div>
//             <div className="flex flex-col gap-2">
//               <p className="font-semibold text-base">Food price</p>
//               <Input
//                 placeholder="Enter price..."
//                 type="number"
//                 value={newDishPrice}
//                 onChange={(e) => setNewDishPrice(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="flex flex-col gap-2">
//             <p className="font-semibold text-base">Ingredients</p>
//             <Textarea
//               placeholder="List ingredients (comma separated)..."
//               className="min-h-20"
//               value={newDishIngredients}
//               onChange={(e) => setNewDishIngredients(e.target.value)}
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <p className="font-semibold text-base">Food image</p>
//             <label className="cursor-pointer">
//               <div className="h-32 border-2 border-dashed border-blue-300 rounded-2xl bg-blue-50 flex items-center justify-center hover:bg-blue-100">
//                 <Input
//                   type="file"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//                 <div className="flex flex-col items-center">
//                   <div className="rounded-full bg-white h-10 w-10 flex justify-center items-center">
//                     <ImageIcon size={30} />
//                   </div>
//                   <p className="font-medium text-base pt-3 text-center">
//                     {newDishImage
//                       ? newDishImage.name
//                       : "Choose a file or drag & drop it here"}
//                   </p>
//                 </div>
//               </div>
//             </label>
//           </div>

//           <DialogFooter>
//             <Button
//               onClick={() => handleAddDish(selectedCategoryId)}
//               disabled={isLoading || !newDishName || !newDishPrice}
//             >
//               {isLoading ? "Adding..." : "Add dish"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };