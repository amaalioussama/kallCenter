import Image from "next/image";
import next from "../../../public/Annotation 2024-04-09 000139.png"

export default function Navbar() {
  return (
    <div  className="bg-white md:h-20 flex justify-between md:px-8 shadow-inner">
      <div className="mt-7">
        <Image src={next} width={176} height={24} alt="Startup" />
      </div>
      <button id="butnav" className="bg-amber-600 h-12 mt-4 md:h-12 w-24 md:w-32 rounded-lg md:justify-between items-center justify-center sm:justify-between">
        <span className="text-sm md:text-lg text-white">تسجل دابا</span>
      </button>
    </div>
  );
}
