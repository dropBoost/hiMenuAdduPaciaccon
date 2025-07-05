import CategoryCard from "@/app/components/categoryCard"
import { navLink } from "@/app/components/infoCompany"

export default function PageIntro () {

    return(
        <>
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-5 p-10 w-screen">
            {navLink.map(category => (
                <CategoryCard key={category.name} img={category.img} link={category.link} name={category.name}/>
            ))}
        </div>
        </>
    )

}