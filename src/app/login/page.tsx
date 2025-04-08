import { CategoriesList } from "@/components/CategoriesList";
import { CategoriesMenuCard } from "@/components/CategoriesMenuCard";
import { Offer } from "@/components/Offer";
import { LoginHeader } from "./Header";
import { BodyList } from "@/components/BodyList";



export default function LoginHomePage () {
    return (
        <div>
            <LoginHeader/>
            <Offer/>
            <BodyList/>
            {/* <CategoriesList/>
            <CategoriesMenuCard/> */}
        </div>
    )
}