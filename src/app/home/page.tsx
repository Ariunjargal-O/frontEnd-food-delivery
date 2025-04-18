import { CategoriesList } from "@/components/CategoriesList";
import { CategoriesMenuCard } from "@/components/CategoriesMenuCard";
import { Offer } from "@/components/Offer";
import { LoginHeader } from "./Header";
import { BodyList } from "@/components/BodyList";
import { Footer } from "@/components/Footer";



export default function LoginHomePage () {
    return (
        <div>
            <LoginHeader/>
            <Offer/>
            <CategoriesList/> 
            <CategoriesMenuCard/> 
            <Footer/>
        </div>
    )
}