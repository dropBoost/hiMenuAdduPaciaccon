import Footer from "../components/footer";
import Image from "next/image"
import { companyName, logoLight } from "@/app/components/infoCompany"
import ContactBar from "../components/contactBar";

export default function LayoutMenuBurger ({ children }) {

  return (
    <>

      <div className="flex flex-col justify-center items-center h-screen w-screen">
          <ContactBar/>
          <div className="w-screen flex bg-brandDark-400 text-brand-400 p-5 justify-center items-center">
            <Image src={logoLight} width={100} height={100} quality={10} alt={companyName}/>
          </div>
          <div className="flex flex-col flex-1 bg-stone-100 overflow-auto">
            {children}
          </div>
          <div className="w-[100vw] h-[6vh] flex justify-center items-center border-t bg-white border-white overflow-auto">
            <Footer/>
          </div>
      </div>
    </>
  );
}