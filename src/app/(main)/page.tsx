import { CategoriesList } from "@/components/CategoriesList";
import { CategoriesMenuCard } from "@/components/CategoriesMenuCard";
import { Offer } from "@/components/Offer";
import { BASE_URL } from "../../constnants";
import { headers } from "next/headers";
import { BodyList } from "@/components/BodyList";
import Server from "next/dist/server/base-server";

export default function Home() {
  return (
    <div>
      {/* <Offer/> */}
      {/* <CategoriesList/>
      <CategoriesMenuCard/> */}
      <BodyList/>
    </div>
  );
}
