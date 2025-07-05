import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LayoutMenuBurger ({ children }) {

  return (
    <>
        <div className="flex flex-col justify-center items-center rounded bg-brand-500 h-screen w-screen">
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