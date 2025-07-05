
import Footer from "../components/footer";
import ContactBarMenu from "../components/contactBarMenu";

export default function LayoutMenuBurger ({ children }) {

  return (
    <>
        <div className="flex flex-col justify-center items-center rounded bg-brand-400 h-screen w-screen">
            <div className="w-[100vw]">
              <ContactBarMenu/>
            </div>
            <div className="w-full lg:w-[75vw] flex-1 bg-stone-100 justify-start items-start overflow-auto">
              {children}
            </div>
            <div className="w-[100vw] h-[6vh] flex justify-center items-center border-t bg-white border-white overflow-auto">
              <Footer/>
            </div>
        </div>
    </>
  );
}