export type CategoryType = {
    categoryName: string;
    _id: string;
    foods: FoodType[];
  };
  
  export type FoodType = {
    categoryId: string;
    foodName: string;
    image: string;
    ingredients: string[];
    price: number;
    _id: string;
  };