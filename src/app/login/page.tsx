import { CategoriesList } from "@/components/CategoriesList";
import { CategoriesMenuCard } from "@/components/CategoriesMenuCard";
import { Offer } from "@/components/Offer";
import { LoginHeader } from "./Header";



export default function LoginHomePage () {
    return (
        <div>
            <LoginHeader/>
            <Offer/>
            <CategoriesList/>
            <CategoriesMenuCard/>
        </div>
    )
}