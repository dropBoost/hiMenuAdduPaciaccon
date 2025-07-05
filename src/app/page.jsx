import Link from "next/link";
import Image from "next/image";
import { companyName } from "./components/infoCompany";
import { logoDark } from "./components/infoCompany";

export default function Home() {
  return (
    <>
    <div className="flex md:flex-row flex-col">
      <Link href="/intro" >
      <div className="flex justify-center flex-col items-center h-screen w-screen bg-white text-white">
        <Image src={logoDark} width={150} height={600} quality={10} alt={companyName}/>
        <span className="text-xl mt-5 bg-brand-400 hover:bg-white hover:border-2 hover:border-brand-400 hover:text-brand-400 ps-3 pe-3 text transition">MENU</span>
      </div>
      </Link>
    </div>
    </>
  );
}
