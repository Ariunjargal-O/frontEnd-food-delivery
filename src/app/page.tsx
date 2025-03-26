import { CategoriesList } from "@/components/CategoriesList";
import { CategoriesMenuCard } from "@/components/CategoriesMenuCard";
import { Offer } from "@/components/Offer";


export default function Home() {
  return (
    <div>
      <Offer/>
      <CategoriesList/>
      <CategoriesMenuCard/>
    </div>
  );
}
